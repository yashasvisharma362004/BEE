const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 4000;

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

async function connectDB(){
    await mongoose.connect(process.env.DB_URL);
    console.log("Dtabase Connected")
}

app.get("/",(req,res)=>{
    res.send("Hello world")
})

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port` + PORT);
    });
}).catch((err)=>{
    console.error("Database connection failed:" + err)
});

app.get("/",(req,res)=>{
    res.send()
})
