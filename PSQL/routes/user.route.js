//this is user router
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

router.post("/transfer",async(req,res)=>{
    try{
        const {senderId,receiverId,amount} = req.body;
        const transfer = await prisma.$transaction(async(tx)=>{
            const sender = await tx.user.findUnique({
                where:{id:senderId}
            })
            //step->1 balance check
            if(!sender || sender.balance <= amount){
                throw new Error("Insuffient balance");
            }
            //step->2 amount deduction
            await tx.user.update({
                where:{id:receiverId},
                //data:{balance:sender.balance-amount}
                data:{balance:{increment:amount}}
            })
            //step 4->transaction table entry (history)
            const trns = await tx.transaction.create({
                data:{amount,senderId,receiverId}
            })
            return trns;
        })
        res.status(203).json({transfer});
    }catch(error){
        res.status(400).json({message:error.message});
    }
})

module.exports = router;