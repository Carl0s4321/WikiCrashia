const connect = require("./connect")
const express = require("express")
const cors = require('cors')
const users = require('./userRoutes')
const rettiwt = require('./rettiwtRoutes')
const tweets = require('./tweetRoutes')
const crashRoutes = require('./crashRoutes');
const { createServer } = require("http");
const { Server } = require('socket.io')
const RettiwtSocketService = require('./rettiwtSocketService');
const loadClassifier = require('./loadClassifier');

const app = express();
const PORT = 3000;
let classifier; 

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        // Doesn't really matter since its only us connecting to it
        origin: "*",
    }
});

app.use(cors());
app.use(express.json());
app.use(users) // mounts to userRoutes
app.use(rettiwt)
app.use(tweets)
app.use(crashRoutes);


io.on('connection', (socket) => {
    console.log("Client connected.", socket.id)
    socket.on('disconnect', (reason) => {
        console.log("Client disconnected.", socket.id, " Reason:", reason);
    });
});

const startServer = async () => {

    await connect.connectToServer();
    try {
        classifier = await loadClassifier();
    } catch (error) {
        console.log("Couldn't load model: ", error);
    }

    const rettiwtService = new RettiwtSocketService(io, classifier);
    app.set('rettiwtService', rettiwtService);


    await rettiwtService.start();

    httpServer.listen(PORT, async () => {
        console.log(`server connected to port ${PORT}`);
    }); 

   

   
}

try {
    startServer();
    console.log("Http server started...")
}
catch (error) {
    console.log("Error starting server...")
}