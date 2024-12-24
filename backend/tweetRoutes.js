const express = require('express');
const database = require('./connect');
const ObjectId = require('mongodb').ObjectId;
require("dotenv").config({path: "./config.env"})
const error = require('./util')
const { convertToDate } = require('./dateConverter');

let tweetRoutes = express.Router();
const TWEET_COLLECTION_NAME = "tweets"
const CRASH_COLLECTION_NAME = "crashes"

// dangerous
async function clearColl(db){
    try{
        // const deleteAll = await db.collection(CRASH_COLLECTION_NAME).deleteMany({_id: {$ne: new ObjectId('673e7b0f654b2c6b54a85172')}})
        // const deleteAll2 = await db.collection(TWEET_COLLECTION_NAME).deleteMany({_id: {$ne: new ObjectId('6700b50bb2c1f5a21ddf086d')}})
    }catch(e){
        throw e
    }
}

// INSERT BATCH
tweetRoutes.route('/tweets/bulk').post(async (req, res) => {

    const tweets = req.body.tweets
    const db = database.getDb();

    try{
        let bulkOps = []
        
        for(let tweet of tweets){
            // console.log('CURRENT TWEET**********************************\n', tweet)

            let crashId = ''
            
            const crash = await db.collection(CRASH_COLLECTION_NAME).findOne({'location.formattedAddress': tweet.location.formattedAddress})

            const dateTimeConvert = convertToDate(tweet.localDate, tweet.localTime);
            if(!crash){
                
                const newCrash = {
                    location: {
                        actualAddress: tweet.address,
                        formattedAddress: tweet.location.formattedAddress,
                        lat: tweet.location.lat,
                        lng: tweet.location.lng,
                    },
                    date: tweet.localDate,
                    time: tweet.localTime,
                    dateTime: dateTimeConvert,
                    severity: tweet.severity
                }
                const crashResult = await db.collection('crashes').insertOne(newCrash);
                crashId = crashResult.insertedId;
            }else{
                crashId = crash._id
                console.log('CRASH FOUND: ', tweet.location.formattedAddress, " CRASH ID: ", crashId)
            }

            const existTweet = await db.collection(TWEET_COLLECTION_NAME).findOne({tweet_id: tweet.id})

            if(!existTweet){
                bulkOps.push({
                    insertOne: {
                        document: {
                            tweet_id: tweet.id,
                            author_username: tweet.tweetBy.userName,
                            author_name: tweet.tweetBy.fullName,
                            text: tweet.fullText,
                            crash_id: crashId,
                            date: tweet.localDate,
                            time: tweet.localTime,
                            profilePic: tweet.profilePic,
                        }
                    }
                })
            } else{
                console.log('TWEET EXIST: ', tweet.id)
            }


        }

        if(bulkOps.length > 0){
            const result = await db.collection(TWEET_COLLECTION_NAME).bulkWrite(bulkOps)
            console.log(`Bulk insert successful: ${result.insertedCount} tweets inserted.`);
            res.status(200).json({ message: `${result.insertedCount} tweets processed successfully` });
        }else {
            error('No valid tweets to insert.', 404)
          }

    }catch(error){
        console.error(error.message)
        res.status(error.status).json(error)
    }
})

tweetRoutes.route('/tweets').get(async (req, res) => {
    try {
        const db = database.getDb();
        const tweets = await db.collection(TWEET_COLLECTION_NAME).find({}).toArray();

        if (tweets.length > 0) {
            res.status(200).json(tweets);
        } else {
            res.status(404).json({ message: "No tweets found." });
        }
    } catch (error) {
        console.error("Error fetching tweets:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

tweetRoutes.route('/tweets/:id').get(async (req, res) => {
    try {
        const db = database.getDb();
        const tweet = await db.collection(TWEET_COLLECTION_NAME).findOne({ tweet_id: req.params.id });

        if (tweet) {
            res.status(200).json(tweet);
        } else {
            res.status(404).json({ message: "Tweet not found." });
        }
    } catch (error) {
        console.error("Error fetching tweet:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

// get all tweets related to the crash
tweetRoutes.route('/tweets/crash/:id').get(async(req,res)=> {
    try{
        const db = database.getDb()
        const tweet = await db.collection(TWEET_COLLECTION_NAME).find({crash_id: new ObjectId(req.params.id)}).toArray()
        
        if(tweet){
            res.status(200).json(tweet)
        }else{
            error('No valid tweets to fetch.', 404)
        }
    } catch(error){
        console.error(error.message);
        res.status(error.status).json({ message: "Internal server error" });
    }
})

// // make CRUD operations:
// // retrieve all
// // http://localhost:3000/tweets
// tweetRoutes.route('/tweets').get(async (request,response) => {
//     let db = database.getDb();
//     let data = await db.collection(TWEET_COLLECTION_NAME).find({}).toArray();

//     if(data.length > 0){
//         response.json(data);
//     } else{
//         throw new Error("Data not found")
//     }
// })

// // retrieve one
// // http://localhost:3000/tweets/12345
// tweetRoutes.route('/tweets/:id').get(async (request,response) => {
//     let db = database.getDb();
//     let data = await db.collection(TWEET_COLLECTION_NAME).findOne({_id: new ObjectId(request.params.id)})
//     // since data should only be one object, we check if the object is empty or not
//     if(Object.keys(data).length > 0){
//         response.json(data);
//     } else{
//         throw new Error("Data not found")
//     }
// })



// // update one
// tweetRoutes.route('/tweets/:id').put(async (request,response) => {
//     let db = database.getDb();
//     let mongoObject = {
//         $set: {
//             name: request.body.name,
//             email: request.body.email,
//             password: request.body.password,
//         }
//     };
//     let data = await db.collection(TWEET_COLLECTION_NAME).updateOne({_id: new ObjectId(request.params.id)}, mongoObject);
//     response.json(data);
// })

// delete one
// tweetRoutes.route('/tweets/:id').delete(async (request,response) => {
//     let db = database.getDb();
//     let data = await db.collection(TWEET_COLLECTION_NAME).deleteOne({_id: new ObjectId(request.params.id)})
//     response.json(data);
// })



module.exports = tweetRoutes;