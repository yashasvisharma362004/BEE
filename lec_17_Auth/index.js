const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors")


const connectDB = require("./db/connectDd");
require("dotenv").config();
//router
const authRouter = require("./routes/auth.routes");

app.use(express.json());
app.use(cors);
app.use(express.urlencoded({extended:true}));

app.use("/",authRouter);

app.listen(3000,()=>{
    console.log("server is started on port 3000");
    connectDB();
})