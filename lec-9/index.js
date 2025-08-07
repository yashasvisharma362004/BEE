// index.js (ES module format)

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import Todo from "./models/todo.models.js"; 
import createTask from "./routes/index.js";

dotenv.config(); // Load .env variables

const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", createTask);

app.listen(7000,()=>{
    console.log("server is running on port 7000")
    connectDB();
})