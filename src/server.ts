import express from "express";
import mongoose from "mongoose"
import  {api}  from "./route/Route";
import http from "http";
import {Server} from "socket.io";
import cors from "cors"
// dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();
const io= http.createServer(app);
app.use(express.json())
app.use(cors())

io.on("connection", socket => {
    socket.emit("your id", socket);
    socket.on("send message", body => {
        io.emit("message", body)
    })
})

mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'chatapp', //"mongodb+srv://harinder:uRsuoNcurgLsKHHs@cluster0.tfhsj.mongodb.net/mydb?retryWrites=true&w=majority",
   useNewUrlParser: true, useUnifiedTopology: true },
).then(result=>{
    console.log("connected")
}).catch(()=>{
    console.log("not connected")
});
app.use("/api", api);


app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
