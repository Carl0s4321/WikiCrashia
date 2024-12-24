const express = require('express');
const { Rettiwt } = require('rettiwt-api');
const { Client } = require('@googlemaps/google-maps-services-js');
require("dotenv").config({path:"./config.env"})
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");
const fs = require('fs').promises;
const path = require('path');
const { convertToDate } = require('./dateConverter');
const CrashSeverityClassifier = require('./modelFiles/severityModel');

const googleMapsClient = new Client({});



const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const calgaryBounds = {
    northeast: { lat: 51.2130, lng: -113.3064 },  // NE corner
    southwest: { lat: 50.8000, lng: -114.0714 }   // SW corner
};

const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
];

function getHighQualImageUrl(urlLink) {
    return urlLink.replace('_normal', '');
}

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


class RettiwtSocketService {
    constructor(socketIO, classifier) {
        this.io = socketIO;
        this.currentTweets = [];
        this.rettiwt = new Rettiwt({ apiKey: process.env.RETTIWT_API_KEY});
        this.googleMapsClient = new Client({});
        this.lastId = null;
        // Can change:
        this.updateInterval = 5 * 60 * 1000;
        this.requestCount = 0;

        // Idk if this is the rate limit, but just checking for now.
        this.maxRequests = 30;
        this.resetTime = new Date() + this.updateInterval;
        this.lastIdFile = path.join(__dirname, 'lastTweetId.json');
        this.classifier = classifier;
    }

    getCurrentTweets() {
        return this.currentTweets;
    }

    printTweets() {
        console.log(this.currentTweets);
    }

    async getLastId() {
        try {
            const data = await fs.readFile(this.lastIdFile, 'utf8');
            const savedId = JSON.parse(data);

            if (savedId.timestamp) {
                this.lastId = savedId.timestamp;
            }
        } catch (error) {
            console.log("No saved ID found.");
        }
    }

    async saveLastId() {
        if (!this.lastId) return;

        try {
            const data = {
                lastId: this.lastId,
                timeStamp: new Date()
            };
            await fs.writeFile(this.lastIdFile, JSON.stringify(data));
            console.log("Saved last id to file: ", this.lastId);
        } catch (error) {
            console.log("Error writing to file: ", error);
        }
         
    }

    async start() {
        await this.getLastId();

        await this.fetchTweets();   
        setInterval(async () => {
            if (Date.now() >= this.resetTime) {
                this.requestCount;
                this.resetTime = new Date() + this.updateInterval;
            }

            if (this.requestCount < this.maxRequests) {
                await this.fetchTweets();
            }

        // Getting every minute.
        }, 5 * 60 * 1000)

        // Updating the last id every 5 minutes.
        setInterval(() => this.saveLastId(),
            300000
        )
    }

    async fetchTweets() {
        try {
            const searchParams = {
                hashtags:["yyctraffic", "yycroads"],
                excludeWords: ["CLEAR", "Update"],
                startDate: new Date('2024-12-20'), 
            };

            if (this.lastId) {
                searchParams.sinceId = this.lastId;
            }

            const tweets = await this.rettiwt.tweet.search(searchParams);
            // console.log(tweets);
            this.requestCount++;

            if (tweets.list.length > 0) {
                this.lastId = tweets.list[0].id;
                const processedTweets = await this.processTweets(tweets.list);
                console.log("The processed tweets are: ", processedTweets);

                console.log(new Date(tweets.list[0].createdAt));

                if (processedTweets && processedTweets.length > 0) {
                    this.currentTweets = [...processedTweets, ...this.currentTweets];
                    this.io.emit('newTeets', processedTweets);

                    await this.saveLastId();
                } else {
                    console.log("Nothing in processed tweets.");
                }
            } 
        } catch (error) {
            console.log("Error getting tweets:", error);
        }
        
    }

    async processTweets(tweetsList) {
        tweetsList = tweetsList.map((tweet) => {
            const {localDate, localTime} = convertUTCToMountain(tweet.createdAt);
            const profilePic = getHighQualImageUrl(tweet.tweetBy.profileImage);
            const dateTime = convertToDate(localDate, localTime);
            return {...tweet, dateTime, localDate, localTime, profilePic};
        });

        const addressTweets = await Promise.all(tweetsList.map(async (tweet) => {
            const address = await extractAddress(tweet.fullText);
            if(!address) return null // IF NO ADDRESS REMOVE THE TWEET
            const coords = await getGeocode(address);
            if(!coords) return null // IF NO COORDINATE REMOVE THE TWEET
            return {...tweet, address, location: coords};
        }));

        const filteredTweets = addressTweets.filter(tweet => tweet !== null);

        const severityTweets = await Promise.all(filteredTweets.map(async (tweet) => {
            const severityArray = await this.classifier.predict(tweet.fullText, tweet.localTime);
            const severity = severityArray.indexOf(Math.max(...severityArray));
            return {...tweet, severity: severity};
        }));

        return severityTweets;

    }
    async verifyApiKey() {
        try {
            const testTweet = await this.rettiwt.tweet.search({
                hashtags: ["test"],
                count: 1
            });
            console.log("API key verification successful");
            return true;
        } catch (error) {
            console.error("API key verification failed:", error);
            return false;
        }
    }
    

}

module.exports = RettiwtSocketService;
