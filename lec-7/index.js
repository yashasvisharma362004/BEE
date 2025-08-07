const express = require("express");
const app = express();
const PORT = 4000;
require("dotenv").config()
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    //name:String
    name:{
        type:String,
        maxLength:16,
        required:true //make an attribute compulsory    
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        age:{
            type:Number,
            min:1//minimum value user can give
        }
})

const User = mongoose.model('user',userSchema);//collection create karta h
User.create({
    name:'YashasviSHARMA',
    email:'yashukiballeballe@gmail.com',
    age:21
}).then(()=>
{    console.log("user created");
}).catch((error)=>{
    console.error(error);
});

async function connectDB(){
    await mongoose.connect(process.env.db);
    console.log("db connected");
}
app.use(express.json);
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{ });

connectDB().then(()=>{
    app.listen(PORT,()=>console.log("Server running on port " + PORT))
})
.catch((error)=>console.log(error))
