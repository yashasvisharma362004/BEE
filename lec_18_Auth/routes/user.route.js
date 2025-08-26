const express  = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const verifyUser = require("../middlewares/verify.middleware");
const Product = require("../models/product.model");
const {verifyGoldUser,verifyplatinumUser} = require("../middlewares/verify.prem.middleware");
const User = require("../models/user.model");

const products = [
    {
        name:"product 1",
        price:199,
        description:"this is product 1"
    },
    {
        name:"product 2",
        price:999,
        description:"this is product 2"
    },
    {
        name:"product 3",
        price:1499,
        description:"this is product 3"
    },
    {
        name:"product 4",
        price:1500,
        description:"this is product 4"
    }
]

router.get("/create/products",async(req,res)=>{
    try{
        const Allproducts = await Product.insertMany(products);
        res.status(200).json({success:true,data:Allproducts,message:"Products created sucessfully"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

router.post("/package/buy",verifyUser,async(req,res)=>{
    try{
        const {package} = req.query;
        if(!package){
            throw new Error("package name is required");
        }
        const currUserId = req.user.id;
        const user = await User.findById(currUserId);
        user.package = package;
        if(package == "gold"){
            user.credits += 500;
        }
        if(package == "platinum"){
            user.credits += 1000;
        }
        await user.save();
        res.status(200).json({message:"package bought sucessfully"})

    }catch(error){
        res.status(500).json({message:error.message});
    }
})

router.get("/gold/discount/:productId",verifyUser,verifyGoldUser,async(req,res)=>{
    try{
        const {productId} = req.params;
        const userId = req.user.id;

        const [user,product] = await Promise.all([
            await User.findById(userId),
            await Product.findById(productId)
        ]);

        const discountedPrice = product.price-(product.price*0.1);
        user.credits -= (product.price*0.1);
        await user.save();
        res.status(200).json({newPrice:discountedPrice});

    }catch(error){
        res.status(500).json({newPrice:discountedPrice});
    }
})

router.get("/platinum/discount/:productId",verifyUser,verifyplatinumUser,async(req,res)=>{
    try{
        const {productId} = req.params;
        const userId = req.user.id;

        const [user,product] = await Promise.all([
            
            await User.findById(userId),
            await Product.findById(productId)
        ]);
        console.log(userId);

        const discountedPrice = product.price-(product.price*0.2);
        user.credits -= (product.price*0.2);
        await user.save();
        res.status(200).json({newPrice:discountedPrice});

    }catch(error){
        res.status(500).json({newPrice:discountedPrice});
    }
})

module.exports = router;