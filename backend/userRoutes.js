const express = require('express');
const database = require('./connect');
const ObjectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');

let userRoutes = express.Router();
const SALT = 6;

// make CRUD operations:
// retrieve all
// http://localhost:3000/users
userRoutes.route('/users').get(async (request,response) => {
    let db = database.getDb();
    let data = await db.collection("users").find({}).toArray();

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
    let data = await db.collection("users").findOne({_id: new ObjectId(request.params.id)})
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
    // check for taken email
    const takenEmail = await db.collection("users").findOne({email: request.body.email})
    if(takenEmail){
        response.json({message: "Email is taken"})
    } else{
        const hash = await bcrypt.hash(request.body.password, SALT)
    
        let mongoObject = {
            name: request.body.name,
            email: request.body.email,
            password: hash,
        };
        let data = await db.collection("users").insertOne(mongoObject);
        response.json(data);
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
    let data = await db.collection("users").updateOne({_id: new ObjectId(request.params.id)}, mongoObject);
    response.json(data);
})

// delete one
userRoutes.route('/users/:id').delete(async (request,response) => {
    let db = database.getDb();
    let data = await db.collection("users").deleteOne({_id: new ObjectId(request.params.id)})
    response.json(data);
})

// login
userRoutes.route('/users/login').post(async (request,response) => {
    let db = database.getDb();
    
    const user = await db.collection("users").findOne({email: request.body.email})
    if(user){
        bcrypt.compare(request.body.password, user.password, (err, data) => {
            //if error then throw error
            if (err) throw err

            if (data) {
                response.json({success:true, user})
            } else {
                response.json({success:false, message: "Incorrect email/password"})
            }
        })
    }else{
        response.json({success:false, message: "Account not found"})
    }
})

module.exports = userRoutes;