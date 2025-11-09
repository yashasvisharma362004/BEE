const express = require("express");
const app = express();
const PORT = 8001;
const urlRoutes  = require("./routes/url");

app.use(express.json());
const {connectToMongoDB} = require("./connect");
connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(()=>{
    console.log("Connected to MongoDB");
})
app.use("/url",urlRoutes);
// app.get("/",(req,res)=>{
//     res.send("Welcome to Short URL Service");
// })

app.listen(PORT,()=>{
    console.log("Server is running at port",PORT);
})