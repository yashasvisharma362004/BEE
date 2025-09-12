const express = require("express");
const Todo = require("../models/todo.model");
const { createTodo, deleteTodo } = require("../controllers/todo.controller");
const router = express.Router();

router.post("/create",createTodo);

router.delete("/delete/:id",deleteTodo);

router.put("/update/:id",async (req,res)=>{
  try {
    const {id} = req.params;
    const todo = await Todo.findById(id);
    todo.status = !todo.status;
    await todo.save();
    res.status(200).json({message:"todo updated successfully"});
  } catch (error) {
    res.status(500).json({message:error.message});
  }
})

router.get("/search",async(req,res)=>{
  try {
    const {task} = req.query;
    const matchedTodos = await Todo.find();
    res.status(200).json({todos})
  } catch (error) {
    res.status(500).json({message:error.message});
  }
})

router.get("/filter",async(req,res)=>{
  try{
    const {filterName} = req.query;
    if(!filterName){
      throw new Error("filterName id required");
    }
  
  //filterName - all,active,completed
  //all->return all todos
  //active->return todos where status is false
  //completed->return todos whose status is true

  if(filterName == "all"){
    const todos = await Todo.find();
    return res.status(200).json({todos});
  }
  //Todo.find({status:false}) -> active
  const todos = await Todo.find({status:filterName=="active"?false:true})
}
    catch(error){
      res.status(200).json({message:error.message})
    }
})

router.get("/filter",async(req,res)=>{

})

router.delete("/clear/completed",async(req,res)=>{
  try{
    await Todo.deleteMany({status:true});
    res.status(200).json({message:"todos deleted"});
  }catch(error){
    res.status(500).json({message:error.message});
  }
})

module.exports = router;