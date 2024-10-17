const express = require('express');
const { Rettiwt } = require('rettiwt-api');
require("dotenv").config({path:"./config.env"})
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const rettiwtRoutes = express.Router();

const rettiwt = new Rettiwt({ apiKey: process.env.RETTIWT_API_KEY });

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
];

// Used to get the address using that gemini model.
async function extractAddress(text) {
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash", safetySettings: safetySettings});

    const prompt = `Identify the address mentioned in the following text: "${text}" When you respond, just state the address.`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const responseText = response.text().trim();
        console.log(responseText);
        return responseText;
    } catch (error) {
        console.error("Error extracting address:", error);
        return null;
    }
}

// Could add more words for more filtering
const KEYWORDS = [
    'car crash', 'car accident', 'road closure',
    'traffic alert', 'road blockage', 'car pileup', 'traffic delay',
    'closure', 'injury', 'road traffic', 'motorcyclist', 'highway', 'accident'
]

rettiwtRoutes.get('/twitter/incidents', async (req, res) => {
    try {
        const tweets = await rettiwt.tweet.search({
            fromUsers: ['@yyctransport'],
            words: KEYWORDS,
            limit: 50,
            sortBy: 'latest'
        });
        
        const tweetsList = tweets.list;
        
        // Basically adding the address to the object returned.
        const addressTweets = await Promise.all(tweetsList.map(async (tweet) => {
            const address = await extractAddress(tweet.fullText);
            return {...tweet, address};
        }));

        res.json(addressTweets);

    } catch (error) {
        console.error("Error in /twitter/incidents route:", error);
        res.status(500).json({error: error.message});
    }
});

module.exports = rettiwtRoutes;