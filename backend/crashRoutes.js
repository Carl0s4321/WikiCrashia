const express = require('express');
const database = require('./connect');
const ObjectId = require('mongodb').ObjectId;

let crashRoutes = express.Router();
const CRASHES_COLLECTION_NAME = "crashes";

crashRoutes.route('/crashes').get(async (request, response) => {
    try {
        let db = database.getDb();
        let crashes = await db.collection(CRASHES_COLLECTION_NAME).find({}).toArray();

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

module.exports = crashRoutes;
