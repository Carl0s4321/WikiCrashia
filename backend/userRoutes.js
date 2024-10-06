const express = require('express');
const database = require('./connect');
const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config({path: "./config.env"})

let userRoutes = express.Router();
const SALT = 6;
const USER_COLLECTION_NAME = "users"

// make CRUD operations:
// retrieve all
// http://localhost:3000/users
userRoutes.route('/users').get(async (request,response) => {
    let db = database.getDb();
    let data = await db.collection(USER_COLLECTION_NAME).find({}).toArray();

    if(data.length > 0){
        response.json(data);
    } else{
        throw new Error("Data not found")
    }
})

// retrieve one
// http://localhost:3000/users/12345
userRoutes.route('/users/:id').get(async (request,response) => {
    let db = database.getDb();
    let data = await db.collection(USER_COLLECTION_NAME).findOne({_id: new ObjectId(request.params.id)})
    // since data should only be one object, we check if the object is empty or not
    if(Object.keys(data).length > 0){
        response.json(data);
    } else{
        throw new Error("Data not found")
    }
})

// create one
// route can be same but use different methods (get/post)
userRoutes.route('/users').post(async (request,response) => {
    let db = database.getDb();

    try {
        const takenEmail = await db.collection(USER_COLLECTION_NAME).findOne({ email: request.body.email });
        if (takenEmail) {
          return response.json({ success:false, message: "Email is taken" });
        }
    
        const hash = await bcrypt.hash(request.body.password, SALT);
    
        let mongoObject = {
          name: request.body.name,
          email: request.body.email,
          password: hash,
        };
    
        let data = await db.collection(USER_COLLECTION_NAME).insertOne(mongoObject);
    
        return response.json({ success:true, data });
      } catch (error) {
        throw error
      }
})

// update one
userRoutes.route('/users/:id').put(async (request,response) => {
    let db = database.getDb();
    let mongoObject = {
        $set: {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
        }
    };
    let data = await db.collection(USER_COLLECTION_NAME).updateOne({_id: new ObjectId(request.params.id)}, mongoObject);
    response.json(data);
})

// delete one
userRoutes.route('/users/:id').delete(async (request,response) => {
    let db = database.getDb();
    let data = await db.collection(USER_COLLECTION_NAME).deleteOne({_id: new ObjectId(request.params.id)})
    response.json(data);
})

// login
userRoutes.route('/users/login').post(async (request,response) => {
    let db = database.getDb();
    
    const user = await db.collection(USER_COLLECTION_NAME).findOne({email: request.body.email})
    if(user){
        bcrypt.compare(request.body.password, user.password, (err, data) => {
            //if error then throw error
            if (err) throw err

            if (data) {
                const token = jwt.sign(user, process.env.SECRET_KEY, {expiresIn: '1h'})
                return response.json({success:true, token})
            } else {
                return response.json({success:false, message: "Incorrect email/password"})
            }
        })
    }else{
        return response.json({success:false, message: "Account not found"})
    }
})


module.exports = userRoutes;