// import express from "express";
// import mongoose from "mongoose"
// import  {api}  from "./route/Route";
// import http from "http";
// import {Server} from "socket.io";
// import cors from "cors"
// // dotenv.config();

// const PORT = process.env.PORT || 8080;
// const app = express();
// const io= http.createServer(app);
// app.use(express.json())
// app.use(cors())

// io.on("connection", socket => {
//     socket.emit("your id", socket);
//     socket.on("send message", body => {
//         io.emit("message", body)
//     })
// })

// mongoose.connect('mongodb://localhost:27017/', {
//     dbName: 'chatapp', //"mongodb+srv://harinder:uRsuoNcurgLsKHHs@cluster0.tfhsj.mongodb.net/mydb?retryWrites=true&w=majority",
//    useNewUrlParser: true, useUnifiedTopology: true },
// ).then(result=>{
//     console.log("connected")
// }).catch(()=>{
//     console.log("not connected")
// });
// app.use("/api", api);


// app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));

const express = require("express");
const http = require("http");
const router = require("express").Router()
const app = express();
const path = require('path')
// app.use(express.static(path.join(__dirname + '/public')))
router.get("/", (req, res) => {
res.send({ response: "I am alive" }).status(200);
});
const server = http.createServer(app);
const socketIo = require("socket.io");
const port = process.env.PORT || 4001;
const io = socketIo(server, {
cors: {
origin: "http://localhost:3000",
methods: ["GET", "POST"],
allowedHeaders: ["my-custom-header"],
credentials: true
}
});

io.on("connection", (socket) => {
console.log("New client connected",socket.id);
socket.join('p1')
socket.on('message', message => {
console.log("New client id",message);
// console.log("message--->", message)
socket.to("p1").emit(message.id,message.message)
})
socket.on("disconnect", (message) => {
console.log("Client disconnected");
});
});


server.listen(port, () => console.log(`Listening on port ${port}`));
