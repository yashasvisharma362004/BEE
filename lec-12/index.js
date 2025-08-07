require("dotenv").config();
const express = require("express");
const connectDB = require("./db/conectDB");
const path = require("path")
const todoRouter = require("./routes/todo.routes")

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use("/",todoRouter);
const start = async () => {
  try {
    await connectDB();
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  } catch (err) {
    console.error("DB connection failed", err);
  }
};

start();
