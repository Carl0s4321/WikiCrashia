// Things to consider...
/*
https://en.wikipedia.org/wiki/Transportation_in_Calgary
1. Road type and design.
2. Traffic volume
3. Connectivity
5. Speed limits
6. Impact when blocked

// High Severity Roads:
1. Deerfoot Trail:
- It is a primary north-south freeway apart of Highway 2
- It is a major commuter route.
- Key connection to airport and industrial areas.
- Incidents here severely impact city-wide traffic.

2. Stoney Trail:
- Ring road encircling Calgary 
- 100 km/h speed limit
- Critical bypass route
- Connects to major highways
- Limited alternative routes

3. Glenmore Trail (Highway 8):
- Only major east-west skeletal road spanning entire city width
- Connects to both Deerfoot and Stoney
- Heavy commuter usage
- Critical for cross-city travel

4. Trans-Canada Highway (Highway 1):


Medium severity (Skeletal roads of 70-90 km/h speed limits, including both freeways and expressways):
1. Crowchild Trail:
- Major north-south route but has some signalized sections.
- Important but has more alternatives than freeways.
- Mixed freeway and arterial sections.

2. Macleod Trail:
- North-south route in south Calgary.
- Full freeway section between 14th Street and Stoney Trail
- Rest is signalized arterial.

3. Sarcee Trail:
- North-South route in West Calgary
- South section has three interchanges
- Two signal lights (planned for interchange conversion)

4. Memorial Drive:
- Downtown connection from Deerfoot Trail
- Skeletal designation between Reconciliation Bridge and Deerfoot
- Rest is parkway

5. 16 Avenue (Trans-Canada Highway)
- Freeway sections between Stoney Trail West and Sarcee Trail
- Freeway section east of Deerfoot
- Central section is Urban Boulevard (not planned for freeway conversion).

6. Airport Trail:
- East-west in Northeast Calgary 
- Freeway section connecting to airport.
- Planned for full freeway conversion.

Additional skeletal roads (without signifacant freeway sections): 
Shaganappi Trail, Barlow Trail, Anderson Road, Beddington Trail, 14th Street W
John Laurie/McKnight Boulevard, Peigan Trail
*/

const MAJOR_ROADS = [
    "deerfoot trail", "deerfoot tr", "deerfoot", "highway 2", "hw 2", "hwy 2", "hwy2", "hw2",
    "stoney trail", "stoney tr", "stoney", "highway 201", "hw 201", "hwy 201", "hwy201", "hw201",
    "glenmore trail", "glenmore tr", "glenmore", "highway 8", "hw 8", "hwy 8", "hwy8",
    "trans-canada highway", "highway 1", "hw 1", "hwy1", 
    
    "16 avenue", "16 ave", "16 av", "16th avenue", "16th ave", "16th av",
    "highway 1a", "hw 1a", "hwy 1a", "hwy1a", "hw1a",
    "highway 22x", "hw 22x", "hwy 22x", "hwy22x", "hw22x"
]

const SKELETAL_ROADS = [
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

const SEVERITY_CRITERIA = {
    ROAD: {
        MAJOR_ROAD: "Major Road",
        SKELETAL_ROAD: "Skeletal Road",
        OTHER: "Non-Major Road"
    },
    Time: {
        PEAK_HOURS: "Peak Traffic Hours",
        NON_PEAK_HOURS: "Non-Traffic Hours"
    }
}


function getRoadSeverityWeight(text) {

    if (MAJOR_ROADS.some(road => text.toLowerCase().includes(road))) {
        return 3.0;
    }
    else if (SKELETAL_ROADS.some(road => text.toLowerCase().includes(road))) {
        return 2.0;
    }
    
    // Is just an arterial road or minor road
    return 1.0;
}

function getTimeWeight(timeStr) {
    const [time, period] = timeStr.split(" ");
    const [hours, minutes] = time.split(":").map(Number);

    if (((hours >= 7 && hours <= 9) && period === "a.m") || 
        (((hours >= 3 && hours <= 7) && period === "p.m.") || 
        ((hours == 11 && minutes <= 59) && period === "a.m.") ||
        (hours == 12 || hours == 1 || hours == 2) && period ==="p.m.")) {
        return 3.0;
    } else {
        return 1.0;
    }

}   

function test() {
    getTimeWeight("5:10 p.m.");
}

test();

