import express from "express"
import Todo from "../models/todo.models.js"
import {createTodo,updateTodo,deleteTodo} from "../controllers/todo.controller.js";
const router= express.Router();

router.post("/create",createTodo);
router.delete("/delete/:id",deleteTodo);

router.put("/update/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const todo = await Todo.findById(id);
        todo.status = !todoSchema.status;
        await todo.save();
        res.status(200).json({message: "todo updated sucessfully"});
    }catch(error){
        res.status(500).json({messgae:error.message});
    }
})

router.get("/search",async(req,res)=>{
    try{
        const {task} = req.query;
        const matchedTodos = await Todo.find({task:{$regex:task},$options:"i"});
        res.status(200).json({todos:matchedTodos})
    }catch(error){
        res.status(500).json({message:error.message});
    }
})

export default router;