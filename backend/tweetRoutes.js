// const express = require('express');
// const database = require('./connect');
// const ObjectId = require('mongodb').ObjectId;
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// require("dotenv").config({path: "./config.env"})

// let userRoutes = express.Router();
// const SALT = 6;
// const TWEET_COLLECTION_NAME = "tweets"

// // make CRUD operations:
// // retrieve all
// // http://localhost:3000/tweets
// userRoutes.route('/tweets').get(async (request,response) => {
//     let db = database.getDb();
//     let data = await db.collection(TWEET_COLLECTION_NAME).find({}).toArray();

//     if(data.length > 0){
//         response.json(data);
//     } else{
//         throw new Error("Data not found")
//     }
// })

// retrieve one
// http://localhost:3000/tweets/12345
// userRoutes.route('/tweets/:id').get(async (request,response) => {
//     let db = database.getDb();
//     let data = await db.collection(TWEET_COLLECTION_NAME).findOne({_id: new ObjectId(request.params.id)})
//     // since data should only be one object, we check if the object is empty or not
//     if(Object.keys(data).length > 0){
//         response.json(data);
//     } else{
//         throw new Error("Data not found")
//     }
// })

// create one
// route can be same but use different methods (get/post)
// userRoutes.route('/tweets').post(async (request,response) => {
//     let db = database.getDb();

//     try {
//         const takenEmail = await db.collection(TWEET_COLLECTION_NAME).findOne({ email: request.body.email });
//         if (takenEmail) {
//           return response.json({ success:false, message: "Email is taken" });
//         }
    
//         const hash = await bcrypt.hash(request.body.password, SALT);
    
//         let mongoObject = {
//           name: request.body.name,
//           email: request.body.email,
//           password: hash,
//         };
    
//         let data = await db.collection(TWEET_COLLECTION_NAME).insertOne(mongoObject);
    
//         return response.json({ success:true, data });
//       } catch (error) {
//         throw error
//       }
// })

// // update one
// userRoutes.route('/tweets/:id').put(async (request,response) => {
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
// userRoutes.route('/tweets/:id').delete(async (request,response) => {
//     let db = database.getDb();
//     let data = await db.collection(TWEET_COLLECTION_NAME).deleteOne({_id: new ObjectId(request.params.id)})
//     response.json(data);
// })


// module.exports = userRoutes;