const express = require("express");
const prisma = require("../prisma/client");
const router = express.Router();

router.post("/create",async(req,res)=>{
    try {
        const { title, description,userId} = req.body;
        const post = await prisma.post.create({
            data: {title, description, authorId: userId} // Replace with actual authorId
        });
        res.status(201).json({ post});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}) 

router.get("/all",async(req,res)=>{
    try {
        // const allPosts = await prisma.post.findMany({
        //     include:{
        //         author:true,
        //         comments:true
        //     }
        // });

        const allPosts = await prisma.post.findMany({
            include:{
                author : true,
                comments:{
                    include:{author:true}
                }
            }
        })

        //sorting
    //   const allPosts = await prisma.postfind.Many({
    //         include:{
    //             author:true,
    //              comments:{include:{author:true}}
    //         },
    //         orderBy:{cr}
    //     });

       res.status(200).json({ allPosts });
    } catch (error) {
       res.status(400).json({ message: error.message });
  }
 })

 router.get("/pagination",async(req,res)=>{
    try {
        const {page = 1,limit = 20} = req.query;
        const skipCount = (page-1)*limit;
        const posts = await prisma.post.findMany({
            include :{
                author:true,
                comments:{include:{author:true}}
            },
            take:limit,
            skip:skipCount,//how many posts we should skip (if page = 2 then we have to skip first 20 posts)
        })
        res.status(200).json({posts});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
 })

module.exports = router;