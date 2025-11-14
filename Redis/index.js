const express = require("express");
const client = require("./client");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const res1 = await client.set("users:10","test 1",'nx');
        console.log(res1);
        const data = await client.get("users:10");
        const datas = await client.mget("users:10","users:1","users:5");
        res.json({data,datas})
    } catch (error) {
        console.log(error);
    }
	


    res.json({ success: true });
});

//list data type
app.get("/list",async (req,res)=>{
    try {
        const res1 = await client.lpush("myList",1);
        const res2 = await client.rpush("myList",2);

        const data = await client.lrange("myList",0,-1);
        res.json({data});

        
    } catch (error) {
        console.log(error);
    }
});
    //sets data type
    app.get("/sets",async(req,res)=>{
        try {
            const res1 = await client.sadd("set","Hello",7);
            const res2 = await client.sadd("set","hel",12);
            const res3 = await client.sadd("set",1,21);
            
            const allKeys = await client.smembers("set");

            //const isExist = await client.ismember("set","hello");
            res.json({allKeys});
        } catch (error) {
            console.log(error);
        }
    })

app.listen(PORT, () => console.log("Server running on port " + PORT));