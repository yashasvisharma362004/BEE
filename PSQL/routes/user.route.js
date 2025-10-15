const express = require("express");
const prisma = require("../prisma/client");
const router = express.Router();

router.post("/create",async(req,res)=>{
    try{
        const {name,email} = req.body;
        const user = await prisma.user.create({
            data:{name,email}
        })
        res.status(201).json({user});

    }catch(error){
        res.status(400).json({error:error.message});
    }
})

router.get("/all",async(req,res)=>{
    try {
        const users = await prisma.user.findMany({
         include:{post:true},
        orderBy:{createdAt:"desc"}
        })
        res.status(200).json({ users });
    } catch (error) {
        res.status(400).json({message:error.message});
    }
})

module.exports = router;