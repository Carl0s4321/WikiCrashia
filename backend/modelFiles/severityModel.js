const natural = require('natural');
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const { once } = require('events');
const { throws } = require('assert');

class CrashSeverityClassifier {
    constructor() {
        this.tokenizer = new natural.WordTokenizer();
        this.vocabulary = new Set();
        this.model = null;
        this.wordToIndex = {};
        this.maxSequenceLength = 50;
        this.modelSavePath = path.join(__dirname, 'savedModel');
        this.vocabularySavePath = path.join(this.modelSavePath, 'vocabularyOfModel.json');
        this.MAJOR_ROADS = [
            "deerfoot trail", "deerfoot tr", "deerfoot", "highway 2", "hw 2", "hwy 2", "hwy2", "hw2",
            "stoney trail", "stoney tr", "stoney", "highway 201", "hw 201", "hwy 201", "hwy201", "hw201",
            "glenmore trail", "glenmore tr", "glenmore", "highway 8", "hw 8", "hwy 8", "hwy8",
            "trans-canada highway", "highway 1", "hw 1", "hwy1",

            "16 avenue", "16 ave", "16 av", "16th avenue", "16th ave", "16th av",
            "highway 1a", "hw 1a", "hwy 1a", "hwy1a", "hw1a",
            "highway 22x", "hw 22x", "hwy 22x", "hwy22x", "hw22x",
            "country hills boulevard", "country hills blvd", "country hills"
        ];

        this.SKELETAL_ROADS = [
            "crowchild trail", "crowchild tr", "crowchild",
            "macleod trail", "macleod tr", "macleod",
            "shaganappi trail", "shaganappi tr", "shaganappi",
            "memorial drive", "memorial dr", "memorial",
            "airport trail", "airport tr",
            "anderson road", "anderson rd", "anderson",
            "sarcee trail", "sarcee tr", "sarcee",
            "barlow trail", "barlow tr", "barlow",
            "beddington trail", "beddington tr", "beddington",
            "14 street west", "14 street w", "14 st west", "14 st w", "14th street west", "14th street w", "14th st west", "14th st w",
            "john laurie boulevard", "john laurie blvd", "john laurie",
            "mcknight boulevard", "mcknight blvd", "mcknight",
            "peigan trail", "peigan tr", "peigan",
            "bow trail", "bow tr", "bow",
            "52 street", "52 st", "52nd street", "52nd st",
            "36 street", "36 st", "36th street", "36th st"
        ]

        this.SEVERITY_WEIGHTS = {
            PEAK_TIME: {
                PEAK: 2,
                NEAR_PEAK: 1
            },

            ROAD_TYPE: {
                major: 5,
                skeletal: 3, 
                other: 1
            },
            LOCATION_TYPE: {
                intersection: 3,
                multiple_lanes: 3,
                single_lane: 1
            },
            INCIDENT_TYPE: {
                critical: 6,    
                major: 3,       
                moderate: 2,    
            },
            COMBINATIONS: {
                MULTI_MAJOR_ROADS: 3,         
                MAJOR_SKELETAL_COMBO: 2,       
                EMERGENCY_WITH_INJURIES: 2,  
                ROLLOVER_MULTI_VEHICLE: 2,  
                JACKKNIFE_MULTI_VEHICLE: 2,  
                ALL_LANES_EMERGENCY: 2,
                PEAK_SINGLE_LANE: 2,
                MAJOR_ROAD_DELAYS: 2
            },
            TRAFFIC_IMPACT: {
                severe: 3,
                moderate: 2,
                minor: 1
            }
        }

        this.PEAK_TIMES = {
            MORNING: { start: 7, end: 9 },
            EVENING: { start: 16, end: 18 }
        }

        this.NEAR_PEAK_TIMES = {
            MORNING: { before: 5, after: 10 },
            EVENING: { before: 14, after: 20 }
        }

        this.LOCATION_KEYWORDS = {
            intersection: [
                'intersection', 'corner', 'junction','at the corner of', 
                'at the junction of', 'at the intersection',
                'turning lane', 'turn lane',
                'left turn lane', 'right turn lane',
                'on-ramp', 'off-ramp', 'exit ramp', 'entrance ramp',
                'merge area', 'merging area'
            ],

            multiple_lanes: [
                'multiple lanes', 'all lanes', 'several lanes', 'both lanes',
                'blocking multiple lanes', 'blocking all lanes', 'blocking both lanes',
                'multiple lanes blocked', 'all lanes blocked', 'both lanes blocked',
                'lanes are blocked', 'lanes blocked',
                'blocked off', 'completely blocked', 'fully blocked',
                'road blocked', 'roadway blocked',
                'blocking the on-ramp', 'blocking the off-ramp',
                'on-ramp blocked', 'off-ramp blocked',
                'ramp blocked', 'ramp closure',
                'blocking the intersection', 'intersection blocked',
                'all nb lanes', 'all sb lanes', 'all eb lanes', 'all wb lanes',
                'both nb lanes', 'both sb lanes', 'both eb lanes', 'both wb lanes',
                'exit blocked', 'entrance blocked',
                'exit closed', 'entrance closed'
            ],
            single_lane: [
                'right lane', 'left lane', 'center lane', 'middle lane',
                'passing lane', 'travel lane', 'through lane',
                'rh lane', 'lh lane', 'rhl', 'lhl',
                'right-hand lane', 'left-hand lane',
                'blocking the right lane', 'blocking the left lane',
                'blocking the middle lane', 'blocking the center lane',
                'right lane blocked', 'left lane blocked',
                'middle lane blocked', 'center lane blocked',
                'shoulder closure', 'shoulder blocked',
                'right shoulder', 'left shoulder',
                'partially blocking', 'partial blockage',
                'one lane blocked', 'single lane blocked',
                'nb right lane', 'sb right lane', 'eb right lane', 'wb right lane',
                'nb left lane', 'sb left lane', 'eb left lane', 'wb left lane'
            ]
        };

        this.INCIDENT_KEYWORDS = {
            critical: [
                'collision', 'mvc', 'crash', 'accident',
                'multi-vehicle', 'multi vehicle', 'multiple vehicles', 'several vehicles',
                'chain reaction', 'pile-up', 'pileup',
                'head-on', 'head on collision',
                'rolled over', 'rollover', 'rollovers', 'roll-over',
                'spun out', 'spin out', 'spun around',
                'serious injury', 'serious injuries', 'injuries reported',
                'fatal', 'fatality', 'casualties', 'serious incident',
                'emergency', 'emergency response', 'emergency crews',
                'multiple ems units', 'emergency services',
                'emergency vehicles', 'first responders',
                'fire crews', 'ambulance on scene',
                'two vehicle', 'two-vehicle',
                'three vehicle', 'three-vehicle',
                'four vehicle', 'four-vehicle',
                'five vehicle', 'five-vehicle',
                'hazmat', 'fuel spill', 'chemical spill',
                'fire', 'vehicle fire', 'explosion'

            ],
            major: [
                'major delays', 'significant delays', 'heavy delays',
                'expect major backups', 'significant backups',
                'jackknifed', 'jacknifed', 'jacknife',
                'overturned vehicle', 'vehicle on its side',
                'disabled semi', 'disabled truck',
                'traffic stopped', 'traffic halted',
                'no access', 'road closed',
                'police on scene', 'police attending',
                'tow truck required', 'heavy rescue',
                'whiteout conditions', 'black ice',
                'severe weather', 'zero visibility'
            ],

            moderate: [
                'single-vehicle', 'single vehicle',
                'stalled vehicle', 'disabled vehicle',
                'vehicle breakdown', 'mechanical issue',
                'drive with caution', 'use caution',
                'reduce speed', 'slow down',
                'proceed with care', 'watch for crews',
                'minor delays', 'brief delays',
                'expect delays', 'short delays',
                'slow traffic', 'traffic moving slowly',
                'reduced speed', 'slower than normal',
                'fender bender', 'minor collision',
                'flat tire', 'vehicle stopped'
            ]
        };

        this.CRITICAL_COMBINATIONS = [
            ['rollover', 'injuries'],
            ['multiple vehicles', 'emergency'],
            ['jackknife', 'blocked'],
            ['collision', 'serious injuries']
        ];

        if (!fsSync.existsSync(this.modelSavePath)) {
            fsSync.mkdirSync(this.modelSavePath, { recursive: true });
        }
    }

    createLocationVariations(originalLocation) {
        const variations = [];

        const getRandomRoad = (roadList) => {
            return roadList[Math.floor(Math.random() * roadList.length)];
        };

        const formatIntersection = (road1, road2) => {
            const formats = [
                `${road1} and ${road2}`,
                `${road1} at ${road2}`,
                `intersection of ${road1} and ${road2}`,
                `${road1} near ${road2}`,
                `${road1} approaching ${road2}`
            ];
            return formats[Math.floor(Math.random() * formats.length)];
        };

        for (let i = 0; i < 2; i++) {
            const road1 = getRandomRoad(this.MAJOR_ROADS);
            const road2 = getRandomRoad(this.MAJOR_ROADS.filter(r => r !== road1));
            variations.push(formatIntersection(road1, road2));
        }

        for (let i = 0; i < 2; i++) {
            const majorRoad = getRandomRoad(this.MAJOR_ROADS);
            const skeletalRoad = getRandomRoad(this.SKELETAL_ROADS);
            variations.push(formatIntersection(majorRoad, skeletalRoad));
        }

        for (let i = 0; i < 2; i++) {
            const road1 = getRandomRoad(this.SKELETAL_ROADS);
            const road2 = getRandomRoad(this.SKELETAL_ROADS.filter(r => r !== road1));
            variations.push(formatIntersection(road1, road2));
        }

        const directions = ['NB', 'SB', 'EB', 'WB'];
        const roadTypes = [...this.MAJOR_ROADS, ...this.SKELETAL_ROADS];
        for (let i = 0; i < 2; i++) {
            const road = getRandomRoad(roadTypes);
            const direction = directions[Math.floor(Math.random() * directions.length)];
            variations.push(`${direction} ${road}`);
        }

        return variations.filter(v => v !== originalLocation);
    }

    augmentTrainingData(tweets) {
        const augmentedTweets = [];

        tweets.forEach(tweet => {

            const cleanedText = this.cleanText(tweet.text);
            augmentedTweets.push({
                ...tweet,
                text: cleanedText
            });

            const severity = this.assessIncidentSeverity(tweet);

            const locationVariations = this.createLocationVariations(cleanedText);

            if (severity === 0) {
                this.augmentLowSeverity(tweet, cleanedText, locationVariations, augmentedTweets);
            } 
            else if (severity === 1) {
                this.augmentMediumSeverity(tweet, cleanedText, locationVariations, augmentedTweets);
            }
            else if (severity === 2) {
                this.augmentHighSeverity(tweet, cleanedText, locationVariations, augmentedTweets);
            }
        });

        return augmentedTweets.sort(() => Math.random() - 0.5);
    }

    augmentLowSeverity(tweet, cleanedText, locationVariations, augmentedTweets) {

        const templates = [
            "ALERT: {condition} at {location}. {impact}",
            "In the {area}, {condition} on {location}. {impact}",
            "{direction} {location}, {condition}. {impact}",
            "ALERT: Minor incident on {location}. {impact}"
        ];

        const conditions = [
            "temporary lane reduction",
            "routine maintenance work",
            "brief delay",
            "minor traffic disruption",
            "slow moving traffic",
            "local traffic adjustment",
            "scheduled road work",
            "minor congestion",
            "traffic slowdown"
        ];

        const impacts = [
            "traffic moving normally",
            "minimal delays expected",
            "all lanes moving",
            "regular traffic flow maintained",
            "brief delays possible",
            "drive with normal caution",
            "expect minor slowdown",
            "traffic flowing smoothly",
            "crews working efficiently"
        ];

        const directions = ['NB', 'SB', 'EB', 'WB'];

        const areas = ['Northwest', 'Northeast', 'Southwest', 'Southeast', 'Central'];

        locationVariations.forEach(location => {

            if (cleanedText.includes('pedestrian')) {
                const lowPedestrian =  [
                    "UPDATE: Minor pedestrian incident cleared at {location}. All lanes open.",
                    "Pedestrian incident at {location} resolved. Traffic flowing normally.",
                    "Earlier pedestrian incident at {location} has been cleared. No delays."
                ]

                lowPedestrian.forEach(template => {
                    const augmentedText = template.replace("{location}", location);
                    augmentedTweets.push({
                        ...tweet,
                        text: this.cleanText(augmentedText),
                        severity: 0
                    });
                });
            }

            for(let i = 0; i < 2; i++) {
                templates.forEach(template => {
                    let augmentedText = template
                        .replace('{location}', location)
                        .replace('{condition}', conditions[Math.floor(Math.random() * conditions.length)])
                        .replace('{impact}', impacts[Math.floor(Math.random() * impacts.length)])
                        .replace('{direction}', directions[Math.floor(Math.random() * directions.length)])
                        .replace('{area}', areas[Math.floor(Math.random() * areas.length)]);

                    augmentedText = `${augmentedText} #yyctraffic #yycroads`;

                    if (!augmentedText.includes('emergency') && !augmentedText.includes('crews')) {
                        augmentedTweets.push({
                            ...tweet,
                            text: this.cleanText(augmentedText),
                            severity: 0
                        });
                    }
                });
            }

            const maintenanceText = [
                `Regular maintenance on ${location}, traffic moving well.`,
                `Scheduled work on ${location}, minimal impact to traffic.`,
                `Road work on ${location}, all lanes remain open.`,
                `Minor delays on ${location}, routine maintenance in progress.`
            ];

            maintenanceText.forEach(text => {
                augmentedTweets.push({
                    ...tweet,
                    text: this.cleanText(`ALERT: ${text} #yyctraffic #yycroads`),
                    severity: 0
                });
            });
        });
    }

    augmentMediumSeverity(tweet, cleanedText, locationVariations, augmentedTweets) {

        const templates = [
            "ALERT: Traffic incident on {location}, {blockage}. {impact}",
            "In the {area}, watch out for a crash on {location}, {blockage}. {impact}",
            "Traffic Alert: {direction} {location} experiencing {condition}, {blockage}. {impact}",
            "{direction} {location} - {condition}. {blockage}, {impact}"
        ];
    
        const conditions = [
            "significant congestion",
            "vehicle breakdown",
            "collision with delays",
            "traffic backup",
            "lane closure incident",
            "traffic disruption",
            "vehicle incident"
        ];
    
        const blockages = [
            "blocking the right lane",
            "blocking the left lane",
            "blocking the center lane",
            "partially blocking traffic",
            "affecting the turn lane",
            "single lane blocked",
            "causing lane restrictions"
        ];
    
        const impacts = [
            "expect moderate delays",
            "use alternate route if possible",
            "emergency crews responding",
            "traffic moving slowly",
            "reduce speed through the area",
            "drive with extra caution",
            "delays building in the area",
            "allow extra travel time"
        ];

        const emergencyServicesMediumTemplates = [
            "Emergency services attending incident on {location}. Single lane affected, traffic moving.",
            "Emergency crews on scene at {location}. Limited impact to traffic flow.",
            "Emergency response at {location}. One lane blocked but traffic getting by.",
            "Emergency services helping at {location}. Partial lane closure only.",
            "Emergency crews attending. Traffic flowing with minor delays at {location}.",
            `Emergency crews managing traffic at {location}. Single lane affected.`,
            `Emergency response on {location}. Traffic getting by in remaining lanes.`,
            `Emergency services on scene at {locationStr}. Minor delays only.`,
            `First responders attending {location}. Traffic flow maintained.`,
            `Emergency crews directing traffic at {location}. Expect brief delays.`,
            'Emergency services are helping a pedestrian involve in an incident on {location}. Please go slow and watch for fellow Calgarians.'
        ];

        const directions = ['NB', 'SB', 'EB', 'WB'];
        const areas = ['Northwest', 'Northeast', 'Southwest', 'Southeast', 'Central'];
    
        locationVariations.forEach(locationStr => {
    
            const isHighPriorityRoad = this.MAJOR_ROADS.some(road => 
                locationStr.toLowerCase().includes(road.toLowerCase())
            ) || this.SKELETAL_ROADS.some(road => 
                locationStr.toLowerCase().includes(road.toLowerCase())
            );
    
            if (cleanedText.includes('pedestrian')) {

                const mediumPedestrian = [
                    "ALERT: Emergency services assisting pedestrian at {location}. Use caution.",
                    "Emergency crews helping pedestrian at {location}. Single lane affected.",
                    "Pedestrian incident on {location}. Emergency crews on scene, traffic moving.",
                    "Emergency services attending to pedestrian at {location}. Expect minor delays.",
                    "Pedestrian incident at {location}. Emergency crews managing traffic flow."
                ]

                mediumPedestrian.forEach(template => {
                    const augmentedText = template.replace("{location}", locationStr);
                    augmentedTweets.push({
                        ...tweet,
                        text: this.cleanText(augmentedText),
                        severity: 1
                    })
                });
            }
    
            const iterations = isHighPriorityRoad ? 3 : 2;
    
            for(let i = 0; i < iterations; i++) {
                templates.forEach(template => {
                    let augmentedText = template
                        .replace('{location}', locationStr)
                        .replace('{condition}', conditions[Math.floor(Math.random() * conditions.length)])
                        .replace('{blockage}', blockages[Math.floor(Math.random() * blockages.length)])
                        .replace('{impact}', impacts[Math.floor(Math.random() * impacts.length)])
                        .replace('{direction}', directions[Math.floor(Math.random() * directions.length)])
                        .replace('{area}', areas[Math.floor(Math.random() * areas.length)]);
    
                    augmentedTweets.push({
                        ...tweet,
                        text: this.cleanText(augmentedText),
                        severity: 1
                    });
                });
                if (cleanedText.includes('emergency') || 
                    cleanedText.includes('emergency services') || 
                    cleanedText.includes('emergency crews')) {
                    
                    emergencyServicesMediumTemplates.forEach(template => {
                        let augmentedText = template
                            .replace('{location}', locationStr)
                            .replace('{blockage}', blockages[Math.floor(Math.random() * blockages.length)])
                            .replace('{impact}', impacts[Math.floor(Math.random() * impacts.length)]);

                        augmentedTweets.push({
                            ...tweet,
                            text: this.cleanText(augmentedText),
                            severity: 1
                        });
                    });
                }
                
            }
    
            if (isHighPriorityRoad) {
                const singleLaneMajorTemplates = [
                    `Traffic incident: Single lane blocked on ${locationStr}, expect delays but traffic still moving.`,
                    `Watch out for a crash on ${locationStr}, one lane affected. Moderate delays in the area.`,
                    `Single lane closure on ${locationStr}, traffic getting by with delays.`,
                    `Lane restriction in effect on ${locationStr}, expect moderate slowdown.`,
                    `Traffic incident: Right lane blocked on ${locationStr}, expect delays.`,
                    `Left lane affected on ${locationStr}, traffic moving slowly.`,
                    `Center lane blocked on ${locationStr}, use caution.`,
                    `Lane restriction on ${locationStr}, moderate delays building.`
                ];
    
                singleLaneMajorTemplates.forEach(text => {
                    augmentedTweets.push({
                        ...tweet,
                        text: this.cleanText(text),
                        severity: 1
                    });
                });
    
                const emergencyMediumTemplates = [
                    `Emergency crews on scene at ${locationStr}, single lane blocked. Traffic moving slowly.`,
                    `First responders attending incident on ${locationStr}, partial lane closure only.`,
                    `Emergency response on ${locationStr}, traffic getting by in remaining lanes.`,
                    `Police attending incident on ${locationStr}, one lane affected.`
                ];
    
                emergencyMediumTemplates.forEach(text => {
                    augmentedTweets.push({
                        ...tweet,
                        text: this.cleanText(text),
                        severity: 1
                    });
                });
            }
    
            const stalledVehicleTemplates = [
                `Stalled vehicle on ${locationStr}, blocking right lane. Traffic moving in other lanes.`,
                `Disabled vehicle on ${locationStr}, moderate impact to traffic.`,
                `Vehicle breakdown on ${locationStr}, traffic getting by in adjacent lane.`,
                `Mechanical issue on ${locationStr}, expect some delays but moving.`
            ];
    
            stalledVehicleTemplates.forEach(text => {
                augmentedTweets.push({
                    ...tweet,
                    text: this.cleanText(text),
                    severity: 1
                });
            });
    
            const moderateTemplates = [
                `Collision on ${locationStr}, single lane blocked but no injuries reported.`,
                `Incident on ${locationStr} causing delays but traffic still moving.`,
                `Minor crash on ${locationStr}, emergency crews managing traffic flow.`,
                `Traffic backup on ${locationStr} but all emergency vehicles able to access.`
            ];
    
            moderateTemplates.forEach(text => {
                augmentedTweets.push({
                    ...tweet,
                    text: this.cleanText(text),
                    severity: 1
                });
            });
        });
    }

    augmentHighSeverity(tweet, cleanedText, locationVariations, augmentedTweets) {

        const templates = [
            "ALERT: Multi-vehicle incident on {location}, {blockage}. {impact}",
            "CRITICAL: {condition} on {location}. {blockage}. {impact}",
            "MVC on {location} - {blockage}. {impact}",
            "MAJOR: Emergency crews attending {condition} on {location}. {blockage}",
            "ALERT: Serious collision on {location}, {blockage}. {emergency}"
        ];

        const pedestrianTemplates = [
            "CRITICAL: Emergency crews attending serious pedestrian incident on {location}. {blockage}. {emergency}",
            "MAJOR: Pedestrian incident on {location}. Full emergency response in progress. {blockage}",
            "Emergency services responding to serious pedestrian incident on {location}. {blockage}. Avoid area"
        ];

        const conditions = [
            "serious collision",
            "major multi-vehicle incident",
            "critical emergency",
            "chain-reaction crash",
            "multiple vehicle collision",
            "serious incident with injuries",
            "major incident requiring extraction"
        ];

        const blockages = [
            "blocking multiple lanes",
            "all lanes blocked",
            "complete road closure",
            "multiple lanes affected",
            "full closure in effect",
            "both directions affected",
            "emergency crews blocking all lanes"
        ];

        const impacts = [
            "multiple emergency units on scene",
            "expect major delays in the area",
            "police and emergency crews responding",
            "traffic severely impacted",
            "use alternate routes",
            "extended delays expected",
            "emergency services extracting",
            "avoid the area if possible"
        ];

        const emergencyServices = [
            "Multiple EMS units on scene",
            "Fire crews attending",
            "Police and emergency crews responding",
            "Emergency extraction in progress",
            "Multiple emergency units responding",
            "Full emergency response deployed"
        ];

        const mvcSpecificTemplates = [
            "MVC on {location} requiring full emergency response. {blockage}",
            "Major collision reported on {location}. Emergency crews extracting. {blockage}",
            "MVC with emergency response on {location}. Multiple units on scene",
            "Serious collision on {location}. Emergency crews attending",
            "Multiple vehicle collision on {location}. Emergency crews responding",
            "Critical incident: MVC on {location}. {emergency}",
            "Accident at {location} - MVC. Expect delays"
        ];
        

        const emergencyResponseTemplates = [
            "Multiple emergency units attending MVC on {location}",
            "Fire crews and EMS responding to collision on {location}",
            "Full emergency response to MVC on {location}",
            "Emergency crews extracting at collision scene on {location}"
        ];

        const emergencyServicesHighTemplates = [
            "Multiple emergency units responding to serious incident on {location}. All lanes affected.",
            "Full emergency response deployed at {location}. Complete road closure in effect.",
            "Major emergency response on {location}. Multiple crews on scene, avoid area.",
            "Critical incident: Emergency services extracting at {location}. Road closed.",
            "Emergency crews attending serious collision on {location}. Multiple lanes blocked.",
            `Major emergency response at {location}. Multiple units on scene. Area closed.`,
            `Critical incident with emergency extraction on {location}. Avoid area.`,
            `Multiple emergency crews responding to serious incident on {location}.`,
            `Full emergency response with road closure on {location}. Seek alternate routes.`,
            `Emergency services at critical scene on {location}. All traffic diverted.`
        ];

        const highPedestrian = [
            "CRITICAL: Serious pedestrian incident at {location}. All lanes blocked.",
            "Emergency crews at critical pedestrian incident on {location}. Road closed.",
            "Major pedestrian incident at {location}. Multiple emergency units on scene.",
            "ALERT: Critical pedestrian incident at {location}. Avoid area.",
            "Serious pedestrian incident at {location}. Full emergency response."
        ]

        locationVariations.forEach(locationStr => {  

            if (cleanedText.includes('emergency') || 
                cleanedText.includes('emergency services') || 
                cleanedText.includes('emergency crews')) {
                
                if (cleanedText.includes('multiple lanes') || 
                    cleanedText.includes('all lanes') || 
                    cleanedText.includes('serious') || 
                    cleanedText.includes('major')) {
                    
                    emergencyServicesHighTemplates.forEach(template => {
                        let augmentedText = template
                            .replace('{location}', locationStr)
                            .replace('{blockage}', blockages[Math.floor(Math.random() * blockages.length)])
                            .replace('{emergency}', emergencyServices[Math.floor(Math.random() * emergencyServices.length)]);

                        augmentedTweets.push({
                            ...tweet,
                            text: this.cleanText(augmentedText),
                            severity: 2
                        });
                    });
                }
            }

            if (cleanedText.includes('pedestrian')) {
                highPedestrian.forEach(template => {
                    const augmentedText = template.replace("{location}", locationStr);
                    augmentedTweets.push({
                        ...tweet,
                        text: this.cleanText(augmentedText),
                        severity: 2
                    })
                });
            }

            if (cleanedText.includes('mvc') || cleanedText.includes('collision')) {
                mvcSpecificTemplates.forEach(template => {
                    let augmentedText = template
                        .replace('{location}', locationStr)
                        .replace('{blockage}', blockages[Math.floor(Math.random() * blockages.length)])
                        .replace('{emergency}', emergencyServices[Math.floor(Math.random() * emergencyServices.length)]);
    
                    augmentedTweets.push({
                        ...tweet,
                        text: this.cleanText(augmentedText),
                        severity: 2
                    });
                });

                emergencyResponseTemplates.forEach(template => {
                    let augmentedText = template.replace('{location}', locationStr);
                    
                    augmentedTweets.push({
                        ...tweet,
                        text: this.cleanText(augmentedText),
                        severity: 2
                    });
                });

                const shortFormatMVC = [
                    `MVC on ${locationStr}. Multiple emergency units responding.`,
                    `MVC reported at ${locationStr}. Emergency crews on scene.`,
                    `MVC: ${locationStr}. Expect major delays.`,
                    `Collision on ${locationStr}. Emergency response in progress.`,
                    `MVC at ${locationStr}. Multiple units attending.`
                ];

                shortFormatMVC.forEach(text => {
                    augmentedTweets.push({
                        ...tweet,
                        text: this.cleanText(text),
                        severity: 2
                    });
                });
            }

            const isHighPriorityRoad = this.MAJOR_ROADS.some(road => 
                locationStr.toLowerCase().includes(road.toLowerCase())
            ) || this.SKELETAL_ROADS.some(road => 
                locationStr.toLowerCase().includes(road.toLowerCase())
            );

            if (cleanedText.includes('pedestrian') && isHighPriorityRoad) {
                pedestrianTemplates.forEach(template => {
                    let augmentedText = template
                        .replace('{location}', locationStr)
                        .replace('{blockage}', blockages[Math.floor(Math.random() * blockages.length)])
                        .replace('{emergency}', emergencyServices[Math.floor(Math.random() * emergencyServices.length)]);

                    augmentedText = `${augmentedText}`;

                    augmentedTweets.push({
                        ...tweet,
                        text: this.cleanText(augmentedText),
                        severity: 2
                    });
                });
                return;
            }

            const iterations = isHighPriorityRoad ? 4 : 2;

            for(let i = 0; i < iterations; i++) {
                templates.forEach(template => {
                    let augmentedText = template
                        .replace('{location}', locationStr)
                        .replace('{condition}', conditions[Math.floor(Math.random() * conditions.length)])
                        .replace('{blockage}', blockages[Math.floor(Math.random() * blockages.length)])
                        .replace('{impact}', impacts[Math.floor(Math.random() * impacts.length)])
                        .replace('{emergency}', emergencyServices[Math.floor(Math.random() * emergencyServices.length)]);

                    augmentedText = `${augmentedText}`;

                    augmentedTweets.push({
                        ...tweet,
                        text: this.cleanText(augmentedText),
                        severity: 2
                    });
                });
            }

            if (isHighPriorityRoad) {
                const criticalScenarios = [
                    `CRITICAL: Multiple vehicle collision on ${locationStr}. All lanes blocked. Emergency crews on scene.`,
                    `MVC with injuries on ${locationStr}. Multiple emergency units responding. Expect major delays.`,
                    `MAJOR: Serious incident on ${locationStr}. Full road closure in effect. Avoid area.`,
                    `Multi-vehicle collision on ${locationStr}. Emergency crews extracting. All lanes affected.`
                ];

                criticalScenarios.forEach(text => {
                    augmentedTweets.push({
                        ...tweet,
                        text: this.cleanText(`${text}`),
                        severity: 2
                    });
                });
            }

            if (cleanedText.includes('mvc') || 
                cleanedText.includes('multiple vehicle') || 
                cleanedText.includes('several vehicle') || 
                cleanedText.includes('two-vehicle')) {

                const mvcSpecific = [
                    `MVC: Multiple vehicles involved on ${locationStr}. Emergency crews on scene. All lanes blocked.`,
                    `Major collision on ${locationStr}. Multiple EMS units responding. Expect extended delays.`,
                    `Serious MVC on ${locationStr}. Full emergency response. Traffic severely impacted.`,
                    `Two vehicle collision on ${locationStr}. All lanes blocked. Emergency crews on scene.`,
                    `Major collision on ${locationStr}. Multiple emergency units on scene.`,
                    `Serious MVC on ${locationStr}. Full emergency response.`,
                    `Critical incident: Multi-vehicle collision on ${locationStr}.`,
                    `MVC with injuries on ${locationStr}. Emergency crews attending.`,
                    `Collision with multiple vehicles on ${locationStr}. Major delays.`
                ];

                mvcSpecific.forEach(text => {
                    augmentedTweets.push({
                        ...tweet,
                        text: this.cleanText(`${text}`),
                        severity: 2
                    });
                });
            }
        });
    }

    isPeakTime(hour) {
        return (hour >= this.PEAK_TIMES.MORNING.start && hour <= this.PEAK_TIMES.MORNING.end) ||
            (hour >= this.PEAK_TIMES.EVENING.start && hour <= this.PEAK_TIMES.EVENING.end);
    }

    isNearPeakTime(hour) {
        return (hour === this.NEAR_PEAK_TIMES.MORNING.before || hour === this.NEAR_PEAK_TIMES.MORNING.after || 
                hour === this.NEAR_PEAK_TIMES.EVENING.before || hour === this.NEAR_PEAK_TIMES.EVENING.after); 
    }

    parseTime(timeStr) {
        try {
            const [time, period] = timeStr.toLowerCase().split(' ');
            let [hours, minutes] = time.split(':').map(num => parseInt(num));

            if (period.includes('p') && hours !== 12) {
                hours += 12;
            } else if (period.includes('a') && hours === 12) {
                hours = 0;
            }
            return hours;
        } catch (error) {
            console.warn("Error parsing time: ", timeStr);
            return -1;
        }
    }

    identifyRoadType(text) {
        text = text.toLowerCase();
        if (this.MAJOR_ROADS.some(road => text.includes(road))) {
            return 'major';
        }
        if (this.SKELETAL_ROADS.some(road => text.includes(road))) {
            return 'skeletal';
        }
        return 'other';
    }

    cleanText(text) {
        return text
            .replace(/https?:\/\/\S+/g, '')        
            .replace(/(?:t\.co|bit\.ly)\/\S+/g, '') 
            .replace(/#\w+/g, '')                   
            .replace(/\s+/g, ' ')                 
            .toLowerCase()
            .trim();
    }

    textToSequence(text) {
        const cleanText = this.cleanText(text);
        const words = cleanText.split(' ').filter(word => 
            word && 
            !word.includes('/') && 
            !word.includes('.') &&
            !word.includes('http') &&
            !word.match(/t\.co|bit\.ly/)
        );

        const sequence = words.map(word => this.wordToIndex[word] || 0);

        if (sequence.length > this.maxSequenceLength) {
            return sequence.slice(0, this.maxSequenceLength);
        }

        while (sequence.length < this.maxSequenceLength) {
            sequence.push(0);
        }

        return sequence;
    }

    buildVocabulary(tweets) {
        this.vocabulary.clear();
        this.wordToIndex = {};

        tweets.forEach(tweet => {
            const cleanText = this.cleanText(tweet.text);
            const words = cleanText.split(' ').filter(word => 

                word && 
                !word.includes('/') && 
                !word.includes('.') &&
                !word.includes('http') &&
                !word.match(/t\.co|bit\.ly/)
            );
            words.forEach(word => this.vocabulary.add(word));
        });

        Array.from(this.vocabulary).forEach((word, index) => {
            this.wordToIndex[word] = index + 1;
        })
    }

    assessIncidentSeverity(tweet) {
        const text = tweet.text.toLowerCase();
        let severityScore = 0;

        const isPedestrianIncident = text.includes('pedestrian');
        const hasEmergencyServices = text.includes('emergency services') || 
                                    text.includes('emergency crews') ||
                                    text.includes('ems') ||
                                    text.includes('ambulance') ||
                                    text.includes('emergency');

        if (isPedestrianIncident) {
            // High severity cases for pedestrian incidents
            if (hasEmergencyServices && 
                (this.LOCATION_KEYWORDS.multiple_lanes.some(keyword => text.includes(keyword)) ||
                text.includes('all directions') ||
                text.includes('road closed') ||
                text.includes('serious') ||
                text.includes('critical'))) {
                return 2;
            }
            
            // Medium severity cases - this is the default for most pedestrian incidents
            if (hasEmergencyServices) {
                return 1;
            }
            
            // Low severity cases
            if (text.includes('minor') || text.includes('cleared')) {
                return 0;
            }
            
            // If we have a pedestrian incident with no other context, default to medium
            return 1;
        }

        const roadType = this.identifyRoadType(text);
        const roadScore = this.SEVERITY_WEIGHTS.ROAD_TYPE[roadType];
        severityScore += roadScore;

        const hasCriticalKeywords = {

            collision: this.INCIDENT_KEYWORDS.critical.some(keyword => text.includes(keyword)),
            emergency: text.includes('emergency') || text.includes('ems') || 
                      text.includes('crews responding') || text.includes('ambulance'),
            multiVehicle: text.includes('multi-vehicle') || text.includes('multiple vehicles') ||
                         /\b(two|three|four|five)\s+vehicle/.test(text) || text.includes("mvc") || text.includes("several vehicles"),
            injuries: text.includes('injuries') || text.includes('injury') || 
                     text.includes('medical') || text.includes('paramedics'),
            allLanes: this.LOCATION_KEYWORDS.multiple_lanes.some(keyword => text.includes(keyword))
        };

        if ((roadType === 'major' && hasCriticalKeywords.multiVehicle) ||
            (roadType === 'major' && text.includes('mvc') && hasCriticalKeywords.allLanes) ||
            (hasCriticalKeywords.emergency && hasCriticalKeywords.injuries) ||
            (hasCriticalKeywords.collision && hasCriticalKeywords.multiVehicle) ||
            (roadType === 'major' && hasCriticalKeywords.allLanes && hasCriticalKeywords.emergency) ||
            text.includes('chain reaction') ||
            text.includes('all lanes closed') ||
            (text.includes('serious') && hasCriticalKeywords.collision)) {
            return 2;
        }

        const hour = this.parseTime(tweet.time);
        if (hour !== -1) {
            if (this.isPeakTime(hour)) {
                severityScore += this.SEVERITY_WEIGHTS.PEAK_TIME.PEAK;
            } else if (this.isNearPeakTime(hour)) {
                severityScore += this.SEVERITY_WEIGHTS.PEAK_TIME.NEAR_PEAK;
            }
        }

        let locationImpact = 0;
        const hasIntersection = this.LOCATION_KEYWORDS.intersection.some(keyword => 
            keyword !== 'approaching' && text.includes(keyword)
        );
        const hasMultipleLanes = this.LOCATION_KEYWORDS.multiple_lanes.some(keyword => 
            text.includes(keyword)
        );
        const hasSingleLane = this.LOCATION_KEYWORDS.single_lane.some(keyword => 
            text.includes(keyword)
        );

    
        // Last check for MVC
        if ((roadType === 'major' && 
            (text.includes('mvc') || text.includes('collision')) && 
            (hasSingleLane || hasMultipleLanes || this.isPeakTime(hour))) ||
           (hasCriticalKeywords.collision && hasCriticalKeywords.multiVehicle)) {
           return 2;
       }

       

        if (hasMultipleLanes) {
            locationImpact = this.SEVERITY_WEIGHTS.LOCATION_TYPE.multiple_lanes;
        } else if (hasIntersection) {
            locationImpact = this.SEVERITY_WEIGHTS.LOCATION_TYPE.intersection;
        } else if (hasSingleLane) {
            locationImpact = this.SEVERITY_WEIGHTS.LOCATION_TYPE.single_lane;
        }
        severityScore += locationImpact;

        let incidentScore = 0;
        if (this.INCIDENT_KEYWORDS.critical.some(keyword => text.includes(keyword))) {
            incidentScore = this.SEVERITY_WEIGHTS.INCIDENT_TYPE.critical;
        } else if (this.INCIDENT_KEYWORDS.major.some(keyword => text.includes(keyword))) {
            incidentScore = this.SEVERITY_WEIGHTS.INCIDENT_TYPE.major;
        } else if (this.INCIDENT_KEYWORDS.moderate.some(keyword => text.includes(keyword))) {
            incidentScore = this.SEVERITY_WEIGHTS.INCIDENT_TYPE.moderate;
        }
        severityScore += incidentScore;

        if (roadType === 'major' && hasMultipleLanes) {
            severityScore += this.SEVERITY_WEIGHTS.COMBINATIONS.MAJOR_SKELETAL_COMBO;
        }

        if (severityScore >= 15 || 
            (roadType === 'major' && hasMultipleLanes && incidentScore >= this.SEVERITY_WEIGHTS.INCIDENT_TYPE.major) ||
            (text.includes('mvc') && roadType === 'major')) {
            return 2;
        }

        if (severityScore >= 9 ||
            (roadType === 'major' && hasSingleLane) ||
            (hasMultipleLanes && (roadType === 'major' || roadType === 'skeletal'))) {
            return 1;
        }

        return 0;
    }

    prepTrainingData(tweets) {
        this.buildVocabulary(tweets);

        const sequences = tweets.map(tweet => this.textToSequence(tweet.text));
        const labels = tweets.map(tweet => this.assessIncidentSeverity(tweet));

        return {
            sequences: sequences,
            labels: labels
        };
    }

    async createModel() {
        const input = tf.input({shape: [this.maxSequenceLength]});
    
        const embedding = tf.layers.embedding({
            inputDim: this.vocabulary.size + 1,
            outputDim: 96,
            maskZero: true,
            embeddingsInitializer: tf.initializers.randomUniform(-0.05, 0.05),
            embeddingsRegularizer: tf.regularizers.l1l2({ l1: 0.0002, l2: 0.0002 })
        }).apply(input);
        
        const embeddingDropout = tf.layers.spatialDropout1d({ 
            rate: 0.2
        }).apply(embedding);

        const severityConv = tf.layers.conv1d({
            filters: 32,
            kernelSize: 2,
            padding: 'same',
            activation: 'relu',
            kernelInitializer: 'glorotUniform',
            name: 'severity_patterns'
        }).apply(embeddingDropout);
        
        const contextConv = tf.layers.conv1d({
            filters: 32,
            kernelSize: 3,
            padding: 'same',
            activation: 'relu',
            kernelInitializer: 'glorotUniform',
            name: 'context_patterns'
        }).apply(embeddingDropout);
        
        // Path 3: Broader context patterns (larger window size)
        const broadConv = tf.layers.conv1d({
            filters: 32,
            kernelSize: 4,
            padding: 'same',
            activation: 'relu',
            kernelInitializer: 'glorotUniform',
            name: 'broad_patterns'
        }).apply(embeddingDropout);
        
        // Batch normalization after each convolution to stabilize training
        const batchNorm1 = tf.layers.batchNormalization().apply(severityConv);
        const batchNorm2 = tf.layers.batchNormalization().apply(contextConv);
        const batchNorm3 = tf.layers.batchNormalization().apply(broadConv);
        
        // Simple attention mechanism for severity patterns
        const attention = tf.layers.dense({
            units: this.maxSequenceLength,
            useBias: false,
            activation: 'tanh',
            name: 'attention_layer'
        }).apply(batchNorm1);
        
        // Multiple pooling strategies to capture different aspects of the text
        const maxPool1 = tf.layers.globalMaxPooling1d().apply(batchNorm1);
        const avgPool1 = tf.layers.globalAveragePooling1d().apply(batchNorm1);
        const maxPool2 = tf.layers.globalMaxPooling1d().apply(batchNorm2);
        const avgPool2 = tf.layers.globalAveragePooling1d().apply(batchNorm2);
        const maxPool3 = tf.layers.globalMaxPooling1d().apply(batchNorm3);
        const avgPool3 = tf.layers.globalAveragePooling1d().apply(batchNorm3);
        const attentionPool = tf.layers.globalAveragePooling1d().apply(attention);
        
        // Combine all features with concatenation
        const concatenated = tf.layers.concatenate()
            .apply([maxPool1, avgPool1, maxPool2, avgPool2, maxPool3, avgPool3, attentionPool]);
        
        // First dense layer for feature processing
        const dense1 = tf.layers.dense({
            units: 128,
            activation: 'relu',
            kernelInitializer: 'glorotUniform',
            kernelRegularizer: tf.regularizers.l1l2({ l1: 0.0001, l2: 0.0001 })
        }).apply(concatenated);
        
        const batchNorm4 = tf.layers.batchNormalization().apply(dense1);
        const dropout1 = tf.layers.dropout({ rate: 0.3 }).apply(batchNorm4);
        
        // Second dense layer with residual connection
        const dense2 = tf.layers.dense({
            units: 64,
            activation: 'relu',
            kernelInitializer: 'glorotUniform',
            kernelRegularizer: tf.regularizers.l1l2({ l1: 0.0001, l2: 0.0001 })
        }).apply(dropout1);
        
        const batchNorm5 = tf.layers.batchNormalization().apply(dense2);
        const dropout2 = tf.layers.dropout({ rate: 0.25 }).apply(batchNorm5);
        
        // Output layer with careful initialization
        const output = tf.layers.dense({
            units: 3,
            activation: 'softmax',
            kernelInitializer: tf.initializers.glorotUniform(),
            kernelRegularizer: tf.regularizers.l1l2({ l1: 0.0001, l2: 0.0001 })
        }).apply(dropout2);
        
        this.model = tf.model({ inputs: input, outputs: output });
        
        const optimizer = tf.train.adam(0.001, 0.9, 0.999, 1e-7);
        
        this.model.compile({
            optimizer: optimizer,
            loss: 'sparseCategoricalCrossentropy',
            metrics: ['accuracy']
        });
    }
    async saveModel() {
        try {
            const modelArtifacts = await this.model.save(tf.io.withSaveHandler(async (artifacts) => {
                const modelJSON = {
                    modelTopology: artifacts.modelTopology,
                    format: 'layers-model',
                    generatedBy: 'TensorFlow.js v' + tf.version.tfjs,
                    convertedBy: null,
                    weightsManifest: [{
                        paths: ['weights.bin'],
                        weights: artifacts.weightSpecs
                    }]
                };

                await fs.writeFile(
                    path.join(this.modelSavePath, 'model.json'),
                    JSON.stringify(modelJSON)
                );

                await fs.writeFile(
                    path.join(this.modelSavePath, 'weights.bin'),
                    Buffer.from(artifacts.weightData)
                );

                const vocabularyData = {
                    vocabulary: Array.from(this.vocabulary),
                    wordToIndex: this.wordToIndex,
                    maxSequenceLength: this.maxSequenceLength
                };
                await fs.writeFile(
                    this.vocabularySavePath,
                    JSON.stringify(vocabularyData, null, 2)
                );

                console.log("Model and vocabulary saved successfully");
                return artifacts;
            }));

            return modelArtifacts;
        } catch (error) {
            console.error("Error saving model:", error);
            throw error;
        }
    }

    async loadModel() {
        try {
            const modelJSONPath = path.join(this.modelSavePath, 'model.json');
            const weightsPath = path.join(this.modelSavePath, 'weights.bin');

            try {
                await fs.access(modelJSONPath);
                await fs.access(weightsPath);
                await fs.access(this.vocabularySavePath);
            } catch (error) {
                console.log('No saved model found. Need to train a model first:', error);
                return false;
            }

            try {
                const vocabularyData = JSON.parse(
                    await fs.readFile(this.vocabularySavePath, 'utf-8')
                );
                this.vocabulary = new Set(vocabularyData.vocabulary);
                this.wordToIndex = vocabularyData.wordToIndex;
                if (vocabularyData.maxSequenceLength) {
                    this.maxSequenceLength = vocabularyData.maxSequenceLength;
                }
            } catch (error) {
                console.error("Error loading vocabulary:", error);
                throw error;
            }

            try {
                const modelJSON = JSON.parse(
                    await fs.readFile(modelJSONPath, 'utf-8')
                );
                const weightData = await fs.readFile(weightsPath);

                this.model = await tf.loadLayersModel(tf.io.fromMemory({
                    modelTopology: modelJSON.modelTopology,
                    weightSpecs: modelJSON.weightsManifest[0].weights,
                    weightData: weightData
                }));

                this.model.compile({
                    optimizer: tf.train.adam(0.001),
                    loss: 'sparseCategoricalCrossentropy',
                    metrics: ['accuracy']
                });

                console.log('Model loaded successfully');
                this.model.summary();
                return true;
            } catch (error) {
                console.error("Error loading model:", error);
                throw error;
            }
        } catch (error) {
            console.error('Error in loadModel:', error);
            return false;
        }
    }

    calculateClassWeight(augmentedTweets) {
        const severityCounts = {
            '0': 0,
            '1': 0,
            '2': 0
        }

        augmentedTweets.forEach(tweet => {
            severityCounts[tweet.severity]++;
        });

        const totalSamples = augmentedTweets.length;
        const numClasses = 3;
        let weights = {}

        for (let severity in severityCounts) {
            weights[severity] = totalSamples / (severityCounts[severity] * numClasses);
        }

        const minWeight = Math.min(...Object.values(weights));

        for (let severity in weights) {
            weights[severity] = weights[severity] / minWeight;
        }

        return weights;
    }

    async train(tweets, epochs = 10) {
        const augmentedTweets = this.augmentTrainingData(tweets);
        console.log(`Augmented dataset size: ${augmentedTweets.length}`);

        augmentedTweets.forEach(tweet => {
            console.log(tweet);
        })
        console.log(`Original dataset size: ${tweets.length}`);

        console.log(`Augmented dataset size: ${augmentedTweets.length}`);

        const trainingData = this.prepTrainingData(augmentedTweets);
        await this.createModel();

        const xTensor = tf.tensor2d(trainingData.sequences);
        const yTensor = tf.tensor1d(trainingData.labels);

        const initialLearningRate = 0.0005;
        const minimumLearningRate = 0.00001;
        const earlyDecayRate = 0.97;
        const midDecayRate = 0.93;
        const laterDecayRate = 0.90;
        let currentLearningRate = initialLearningRate;
        let decayFactor = 0;

        const classWeights = this.calculateClassWeight(augmentedTweets);
        console.log('Class weights:', classWeights);

        const customCallbacks = new tf.CustomCallback({
            onEpochBegin: async (epoch) => {
                let learningRate;

                if (epoch < 5) {

                    learningRate = 0.00005 * (1 + 3 * (epoch / 5));
                } 

                else if (epoch < 18) { 
                    const cycle = Math.sin(2 * Math.PI * (epoch - 5) / 13);

                    learningRate = 0.0002 * (1 + 0.05 * cycle);
                } 

                else {

                    learningRate = 0.0002 * Math.pow(0.97, epoch - 17);
                }

                const optimizer = tf.train.adam(
                    learningRate,
                    0.9,    
                    0.999,  
                    1e-7    
                );

                this.model.compile({
                    optimizer,
                    loss: 'sparseCategoricalCrossentropy',
                    metrics: ['accuracy']
                });

                console.log(`Epoch ${epoch + 1}: Learning rate = ${learningRate.toFixed(6)}`);
            }
        });

        const custom = {
            onEpochEnd: async (epoch, logs) => {
                console.log(`Epoch ${epoch + 1}:    accuracy = ${logs.acc.toFixed(4)}`);
            }
        }

        const history = await this.model.fit(xTensor, yTensor, {
            epochs: epochs,
            validationSplit: 0.2,
            shuffle: true,
            callbacks: [
                tf.callbacks.earlyStopping({
                    monitor: 'val_loss',
                    patience: 7,
                    minDelta: 0.001,
                    verbose: 1,
                    mode: 'min'
                }),
                customCallbacks
            ],
            classWeight: classWeights,
            batchSize: 32
        });

        await this.saveModel();
        xTensor.dispose();
        yTensor.dispose();
        tf.dispose([xTensor, yTensor]);

        return history;
    }

    async predict(tweet) {
        const sequence = this.textToSequence(tweet.text);
        const inputTensor = tf.tensor2d([sequence]);

        const prediction = await this.model.predict(inputTensor).array();
        inputTensor.dispose();
        return prediction[0];

    }

}

module.exports = CrashSeverityClassifier;