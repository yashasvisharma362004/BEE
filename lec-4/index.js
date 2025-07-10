const express = require("express")
const app = express();
const PORT = 4000;

app.use((req,res,next)=>{
    console.log("generic middleware");
    next();
})

app.use("/user",userVerify,(req,res,next)=>{
    console.log("/user path middleware");
    //console.log(id);
    next();
})

app.get("/",(req,res)=>{
    console.log("home routr");
    res.send("ok")
})



function userVerify(req,res,next){
    console.log("api specific middleware")
    next();
}
app.get("/user",userVerify,(req,res,next)=>{
    console.log("/user api");
    res.send("ok");
    next();
})

app.get("/:name",(req,res)=>{
    res.send("Hello from yashu");
})
app.listen(PORT,()=>{
    console.log(`app live on ${PORT}`);
})