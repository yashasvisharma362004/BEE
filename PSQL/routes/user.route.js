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

module.exports = router;