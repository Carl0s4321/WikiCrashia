const express = require('express');
const { Rettiwt } = require('rettiwt-api');
const { Client } = require('@googlemaps/google-maps-services-js');
require("dotenv").config({path:"./config.env"})
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

const rettiwtRoutes = express.Router();

const googleMapsClient = new Client({});

const rettiwt = new Rettiwt({ apiKey: process.env.RETTIWT_API_KEY});

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

    const prompt = `Identify the address mentioned in the following text. The scope of the address is inside the city of Calgary, Alberta, Canada: "${text}" When you respond, just state the address.
    And also format the address so it can be searched in google maps to geolocate its latitude and longitude and if no address is found just say 'null'`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const responseText = response.text().trim();
        console.log(responseText);
        if(responseText === 'null') return null;
        return responseText;
    } catch (error) {
        console.error("Error extracting address:", error);
        return null;
    }
}

const calgaryBounds = {
    northeast: { lat: 51.2130, lng: -113.3064 },  // NE corner
    southwest: { lat: 50.8000, lng: -114.0714 }   // SW corner
  };

async function getGeocode(address) {
    if (!address) return null;
    
    try {
        const response = await googleMapsClient.geocode({
            params: {
                address: address,
                key: process.env.GOOGLE_MAPS_API_KEY,
                bounds: `${calgaryBounds.southwest.lat},${calgaryBounds.southwest.lng}|${calgaryBounds.northeast.lat},${calgaryBounds.northeast.lng}`, 
                region: "ca"
            }
        });

        if (response.data.results && response.data.results.length > 0) {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng,
                formattedAddress: response.data.results[0].formatted_address
            };
        }
        return null;
    } catch (error) {
        console.error("Didn't get anything from it?:", error);
        return null;
    }
}


function convertUTCToMountain(time) {
    const utcDate = new Date(time);

    timeConfig = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }

    timeConfig2 = {
        hour: 'numeric',
        minute: '2-digit'
    }

    const localDate = utcDate.toLocaleString(undefined, timeConfig);

    const localTime = utcDate.toLocaleString(undefined, timeConfig2);

    return {localDate, localTime};

}

function getHighQualImageUrl(urlLink) {
    return urlLink.replace('_normal', '');
}

// Could add more words for more filtering
const KEYWORDS = [
    'car crash', 'car accident', 'road closure', 'closure',
    'traffic alert', 'road blockage', 'car pileup', 'traffic delay',
    'closure', 'injury', 'road traffic', 'motorcyclist', 'highway', 'accident'
]

rettiwtRoutes.get('/twitter/incidents', async (req, res) => {
    try {
        const tweets = await rettiwt.tweet.search({
            hashtags:["yyctraffic", "yycroads"],
            excludeWords: ["CLEAR", "Update"],
            startDate: new Date("2024-11-16 23:59:00"), 
        });

        // console.log(tweets)
        
        let tweetsList = tweets.list;
        if (tweetsList.length == 0) {
            console.log("Nothing found.")
        }

        tweetsList = tweetsList.map((tweet) => {
            const {localDate, localTime} = convertUTCToMountain(tweet.createdAt);
            const profilePic = getHighQualImageUrl(tweet.tweetBy.profileImage);
            return {...tweet, localDate, localTime, profilePic};
        })
        
        // Basically adding the address to the object returned.
        const addressTweets = await Promise.all(tweetsList.map(async (tweet) => {
            const address = await extractAddress(tweet.fullText);
            if(!address) return null // IF NO ADDRESS REMOVE THE TWEET
            const coords = await getGeocode(address);
            if(!coords) return null // IF NO COORDINATE REMOVE THE TWEET
            return {...tweet, address, location: coords};
        }));

        
        res.status(200).json(addressTweets);

    } catch (error) {
        console.error("Error in /twitter/incidents route:", error);
        res.status(500).json({error: error.message});
    }
});

module.exports = rettiwtRoutes;
