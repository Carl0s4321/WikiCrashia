const express = require('express');
const { Rettiwt } = require('rettiwt-api');

const rettiwtRoutes = express.Router();

const rettiwt = new Rettiwt({ apiKey: process.env.RETTIWT_API_KEY });

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
        console.log('Rettiwt response:', JSON.stringify(tweets, null, 2));
        res.json(tweets);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports = rettiwtRoutes;