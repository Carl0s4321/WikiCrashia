const express = require('express');
const { Rettiwt } = require('rettiwt-api');
const { Client } = require('@googlemaps/google-maps-services-js');
require("dotenv").config({path:"./config.env"})
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const rettiwtRoutes = express.Router();

const RettiwtSocketService = require('./rettiwtSocketService');

rettiwtRoutes.get('/twitter/incidents', async (req, res) => {

    try {
        const rettiwtService = req.app.get('rettiwtService');

        const tweets = await rettiwtService.getCurrentTweets();

        res.status(200).json(tweets);
    } catch (error) {
        console.log("Error getting tweets: ", error);
    }
});

module.exports = rettiwtRoutes;
