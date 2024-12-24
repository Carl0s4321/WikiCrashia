const express = require('express');
const database = require('./connect');
const ObjectId = require('mongodb').ObjectId;
const { convertToDate } = require('./dateConverter');
const { request } = require('@huggingface/inference');
const CrashSeverityClassifier = require('./modelFiles/severityModel');


let crashRoutes = express.Router();
const CRASHES_COLLECTION_NAME = "crashes";

crashRoutes.route('/crashes').get(async (request, response) => {
    try {
        let db = database.getDb();
        let crashes = await db.collection(CRASHES_COLLECTION_NAME).find({}).sort({dateTime: 1}).toArray();
        console.log(crashes);

        if (crashes.length > 0) {
            response.json(crashes);
        } else {
            response.status(404).json({ message: "No crash data found" });
        }
    } catch (error) {
        console.error("Error retrieving crashes:", error);
        response.status(500).json({ message: "Internal server error" });
    }
});

crashRoutes.route('/crashes/updateDates').post(async (request, response) => {
    try {
        let db = database.getDb();
        let crashes = await db.collection(CRASHES_COLLECTION_NAME).find({}).toArray();

        for (let crash of crashes) {
            if (crash.date && crash.time) {
                const dateTime = convertToDate(crash.date, crash.time);
                await db.collection(CRASHES_COLLECTION_NAME).updateOne(
                    { _id: crash._id },
                    { $set: { dateTime: dateTime } }
                )
            };
        }
        console.log("Updated times in database.")
        response.status(200).json({ message: "Successfully updated dates" });
    } catch (error) {
        console.error("Error retrieving crashes:", error);
        response.status(500).json({ message: "Internal server error" });
    }
});


crashRoutes.route('/crashes/updateSeverity').post(async (request, response) => {
    try {
        let db = database.getDb();
        let crashes  = await db.collection(CRASHES_COLLECTION_NAME).find({}).toArray();
        const classifier = new CrashSeverityClassifier();

        for (let crash of crashes) {
            
            const relatedTweets = await db.collection('tweets').find({ crash_id: crash._id}).toArray();

            if (relatedTweets.length > 0) {
                const severityPromises = relatedTweets.map(tweet => 
                    classifier.predict(tweet)
                );

                const severityPredictions = await Promise.all(severityPromises);

                const maxPredictions = severityPredictions.map(prediction => {
                    const maxIndex = prediction.indexOf(Math.max(...prediction));
                    return maxIndex;
                });

                const maxSeverity = Math.max(...maxPredictions);
                await db.collection(CRASHES_COLLECTION_NAME).updateOne(
                    { _id: crash._id },
                    { $set: { severity: maxSeverity }}
                );
            }
        }
        console.log("Successfully updated crash severities");
    } catch (error) {
        console.log("Error retrieving/updating crashes with their severity.");
        response.status(500).json({ message: "Internal server error" });
    }
});


module.exports = crashRoutes;
