import mongoose from "mongoose"

async function connectDB(){
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to DB");
}

export default connectDB;
