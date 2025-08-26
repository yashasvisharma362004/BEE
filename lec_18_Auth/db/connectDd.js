const mongoose = require("mongoose");
//isme m db connect karne ka code likunga

async function connectDB(){
    await mongoose.connect(process.env.DB_URL);
    console.log("DB connected");
}

module.exports = connectDB;