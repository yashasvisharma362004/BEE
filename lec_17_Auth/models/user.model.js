const mongoose = require("mongoose");

//schema bna de
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        select:false,
    }
},{timestamps:true});

const User = mongoose.model("User",userSchema);
module.exports = User;