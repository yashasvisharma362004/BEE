const express = require("express");
const prisma = require("../prisma/client");
const router = express.Router();

router.post("/create",async(req,res)=>{
    try {
        const {name,credits} = req.body;
        const course = await prisma.courses.create({
            data:{name,credits}
        });
        res.status(201).json({course});
    } catch (error) {
        res.status(400).json({message:error.message});
    }
})

module.exports = router;