import mongoose from "mongoose";


const AddUserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})


const AddUser = mongoose.model("AddUser",AddUserSchema);

export default AddUser