const natural = require('natural');
const tf = require('@tensorflow/tfjs');
const fs = require('fs').promises;
const fsSync = require('fs');
const path = require('path');
const { once } = require('events');

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
            "highway 22x", "hw 22x", "hwy 22x", "hwy22x", "hw22x"
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
            PEAK_TIME: 2,
            ROAD_TYPE: {
                major: 5,
                skeletal: 3, 
                other: 1
            },
            LOCATION_TYPE: {
                intersection: 2,
                multiple_lanes: 3,
                single_lane: 1
            },
            INCIDENT_TYPE: {
                critical: 6,    // Ex. Collision, multi-vehicle incidents
                major: 3,       // Ex. Multiple lanes blocked.
                moderate: 2,    // Ex. Just one lane blocked.
                minor: 1        // General incidents
            }
        }

        this.PEAK_TIMES = {
            MORNING: { start: 7, end: 9 },
            EVENING: { start: 16, end: 18 }
        }

        this.LOCATION_KEYWORDS = {
            intersection: ['intersection', 'corner', 'junction'],
            multiple_lanes: ['multiple lanes', 'all lanes', 'several lanes', 'both lanes'],
            single_lane: ['right lane', 'left lane', 'left-hand lane', 'right-hand lane', 'middle lane', 'one lane']
        }

        this.INCIDENT_KEYWORDS = {
            critical: [
                'collision', 'multi-vehicle', 'mvc', 'serious injury', 'fatal',
                'two vehicle incident', 'collision', 'multi vehicle incident',
                'spun out vehicles', 'multiple vechicles', 'multi vehicle collision', 'multi-vehicle collision',
                'rolled over', 'two-vehicle', 'emergency', 'multi-vehicle incident'
            ],
            major: [
                'blocking multiple lanes', 'major delays', 'delays',
                'blocking the intersection', 'expect major backups',
                'blocked off', 'too slippery to get through', 'blocking all lanes', 'blocking', 'blocking both lanes',
                'jackknifed', 'jacknifed', 'jacknife'
            ],
            moderate: [
                'blocking the right lane', 'blocking the left lane', 'blocking the middle lane', 'blocking the left-hand lane', 'blocking the right-hand lane',
                'blocking the right-hand lane', 'blocking the left-hand lane', 'right lane blocked', 'blocking the RH lane', 'blocking the LH lane',
                'left lane blocked', 'expect delays', 'drive with caution', 'lhl', 'rhl', 'shoulder closure',
                'partially blocking', 'single-vehicle', 'single vehicle', 'lane closure', 'stalled vehicle', 'partially blocking'
            ]
        };

        if (!fsSync.existsSync(this.modelSavePath)) {
            fsSync.mkdirSync(this.modelSavePath, { recursive: true });
        }
    }

    // Checking if time is during peak hours
    isPeakTime(hour) {
        return (hour >= this.PEAK_TIMES.MORNING.start && hour <= this.PEAK_TIMES.MORNING.end) ||
            (hour >= this.PEAK_TIMES.EVENING.start && hour <= this.PEAK_TIMES.EVENING.end);
    }

    parseTime(timeStr) {
        try {
            const [time, period] = timeStr.toLowerCase().split(' ');
            let [hours, minutes] = time.split(':').map(num => parseInt(num));

            // Converting to 24 hour format
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

    textToSequence(text) {

        // Split on spaces. Not going to do other preprocessing for now??? maybe
        const words = text.toLowerCase().split(' ');
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
            const words = tweet.text.toLowerCase().split(' ');
            words.forEach(word => this.vocabulary.add(word));
        });

        Array.from(this.vocabulary).forEach((word, index) => {
            this.wordToIndex[word] = index + 1;
        })
    }

    assessIncidentSeverity(tweet) {
        // So we don't have to deal 
        const text = tweet.text.toLowerCase();
        let severityScore = 0;

        const roadType = this.identifyRoadType(text);
        severityScore += this.SEVERITY_WEIGHTS.ROAD_TYPE[roadType];


        const hour = this.parseTime(tweet.time);
        if (hour !== -1 && this.isPeakTime(hour)) {
            severityScore += this.SEVERITY_WEIGHTS.PEAK_TIME;
        }

        let maxIncidentScore = 0;
        for (const [location, keywords] of Object.entries(this.LOCATION_KEYWORDS)) {
            if (keywords.some(keyword => text.includes(keyword))) {
                maxIncidentScore += this.SEVERITY_WEIGHTS.LOCATION_TYPE[location];
                break;
            }
        }

        for (const [severity, keywords] of Object.entries(this.INCIDENT_KEYWORDS)) {
            if (keywords.some(keyword => text.includes(keyword))) {
                const score = this.SEVERITY_WEIGHTS.INCIDENT_TYPE[severity];
                maxIncidentScore = Math.max(maxIncidentScore, score);
            }
        }
        severityScore += maxIncidentScore;

        if (severityScore >= 13) {
            return 2;
        } else if (severityScore >= 8) {
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
        this.model = tf.sequential();

        this.model.add(tf.layers.embedding({
            inputDim: this.vocabulary.size + 1,
            outputDim: 64,  
            inputLength: this.maxSequenceLength,
            maskZero: true,
        }));

        this.model.add(tf.layers.reshape({
            targetShape: [this.maxSequenceLength, 64]
        }));

        this.model.add(tf.layers.bidirectional({
            layer: tf.layers.lstm({
                units: 32,
                returnSequences: true,
                recurrentDropout: 0.2
            })
        }));

        this.model.add(tf.layers.bidirectional({
            layer: tf.layers.lstm({
                units: 16,
                returnSequences: false
            })
        }));

        this.model.add(tf.layers.dense({
            units: 32,
            activation: 'tanh'
        }));

        // Deeper classification layers
        this.model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
        this.model.add(tf.layers.batchNormalization());
        this.model.add(tf.layers.dropout({ rate: 0.3 }));

        this.model.add(tf.layers.dense({ units: 16, activation: 'relu' }));
        this.model.add(tf.layers.batchNormalization());
        this.model.add(tf.layers.dropout({ rate: 0.2 }));

        this.model.add(tf.layers.dense({ units: 3, activation: 'softmax' }));

        // Adamax is better than adam I think for this case...
        const optimizer = tf.train.adamax(0.001);

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

                // Save model topology as JSON
                await fs.writeFile(
                    path.join(this.modelSavePath, 'model.json'),
                    JSON.stringify(modelJSON)
                );

                // Save weights as binary file
                await fs.writeFile(
                    path.join(this.modelSavePath, 'weights.bin'),
                    Buffer.from(artifacts.weightData)
                );

                // Save vocabulary separately
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

            // check if the files exist
            try {
                await fs.access(modelJSONPath);
                await fs.access(weightsPath);
                await fs.access(this.vocabularySavePath);
            } catch (error) {
                console.log('No saved model found. Need to train a model first:', error);
                return false;
            }

            // then we load vocab
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

            // then we try and load the model
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
                    optimizer: tf.train.adamax(0.001),
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

    async train(tweets, epochs = 10) {
        const trainingData = this.prepTrainingData(tweets);

        await this.createModel();

        // Then just convert to tensors
        const xTensor = tf.tensor2d(trainingData.sequences);
        const yTensor = tf.tensor1d(trainingData.labels);


        const minimumLearningRate = 0.0001;


        // Keeps overflowing the heap?
        /*
        const customLearning = new tf.CustomCallback({
            onEpochBegin: async (epoch, logs) => {
                const decayFactor = Math.pow(0.9, Math.floor(epoch / 3));

                // 0.001 was ths the initial learning rate
                const newLearningRate = Math.max(0.001 * decayFactor, minimumLearningRate);
                optimizer.learningRate = newLearningRate;
                console.log(`Epoch ${epoch + 1}: Learning rate updated to ${newLearningRate}`);
            }
        })
        */

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
                custom,
            ]
        });

        await this.saveModel();
        xTensor.dispose();
        yTensor.dispose();
        tf.dispose([xTensor, yTensor]);

        return history;
    }

    // Then the prediction function that will be called when we pull in tweets.
    async predict(tweet) {
        const sequence = this.textToSequence(tweet.text);
        const inputTensor = tf.tensor2d([sequence]);

        const prediction = await this.model.predict(inputTensor).array();
        inputTensor.dispose();
        return prediction[0];

    }
}
module.exports = CrashSeverityClassifier;