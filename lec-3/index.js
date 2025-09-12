// const express = require("express");
// const formatDate = require("./utils/date-converter");

//in this date_converter we have an object which contains formatDate and anotherFormat
// 

//here we import the two functions which are add or sub

// const math = require("./utils/date-converter");

// console.log(math.add(2,4));
// console.log(math.sub(2,4));



const express = require("express");
const mongoose = require("mongoose")
const app = express();
const users = require('./MOCK_DATA.json');
//const { default: mongoose } = require("mongoose");

const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log(" mongodb connected"))
  .catch((error) => console.log("mongodb not connected", error));


//Schema
const userSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:false
    },
    email:{
        type:String,
       // required:true,
        unique:true,//check karega same entry exist to nhi kati
    },
    gender:{
        type:String,
        required:true
    }
})

const User = mongoose.model("user",userSchema);

app.use(express.urlencoded({extended:false}));

//Routes
//REST API
// app.use((req,res,next)=>{
//     console.log("Hello from middleware");
//     res.send("hello from middleware 1");
//     next();
// })
// app.get('/users',(req,res)=>{
//     return res.json(users);
// })

// //:id->variable h means dynamic
// app.get('/api/users/:id',(req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user)=>user.id === id);
//     return res.json(user);
// })

// app.patch('/api/users/:id',(req,res)=>{
//     return res.json({statsu:"pending"});
// })


// app.delete('/api/users/:id',(req,res)=>{
//     return res.json({status:"pending"});
// })

// app.post('/api/users',(req,res)=>{
//     const body = req.body;
//     console.log("body",body);
//     return res.json({statsu:"pending"});
// })

app.listen(PORT,()=>console.log(`Servers started at PORT ${PORT}`));