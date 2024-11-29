const express = require('express');
const database = require('./connect');
const ObjectId = require('mongodb').ObjectId;
const { convertToDate } = require('./dateConverter');

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

module.exports = crashRoutes;
