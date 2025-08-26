//schema bnani hai
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    role:{
        type:String,
        enum:["user","admin"],//possible value of attribute
        default:"user",
        select:false
    },
    package:{
        type:String,
        enum:["free","gold","platinum"],
        default:"free"
    },
    credits:{
        type:Number,
        default:0
    }
},{
    timestamps:true
})

const User = mongoose.model("User",userSchema);
module.exports = User;