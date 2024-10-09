const connect = require("./connect")
const express = require("express")
const cors = require('cors')
const users = require('./userRoutes')
const rettiwt = require('./rettiwtRoutes')

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(users) // mounts to userRoutes
app.use(rettiwt)

app.listen(PORT, () => {
    connect.connectToServer();
    console.log(`server connected to port ${PORT}`)
});