import express from "express";
import mongoose from "mongoose"
import  {api}  from "./route/Route";

// dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// app.use(helmet());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
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
