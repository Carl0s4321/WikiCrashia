const CrashSeverityClassifier = require('./modelFiles/severityModel');

async function getClassifier() {
    const classifier = new CrashSeverityClassifier;
    await classifier.loadModel();
    return classifier;
}

module.exports = getClassifier;