import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    status:{
        type:String,
        default:false,
    },
    task:{
        type:String,
        required:true,
    },
},{timestamps:true})

const User = mongoose.model("Todo",todoSchema);
export default todoSchema;