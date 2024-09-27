const express = require('express');
const database = require('./connect');
const ObjectId = require('mongodb').ObjectId;

let userRoutes = express.Router();

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
// update one
// delete one