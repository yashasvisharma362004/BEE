const express = require("express");
const app = express();
const http = require("http");//m direct app.listen use nhi kar skta to m use karungs http module ka
const path = require("path");
const {Server} = require("socket.io");

const server = http.createServer(app);//ye server ab http ka h express ka nhi rha m http ke ander express use kar rha hu
//app.use(express.static(path.resolve("./public")));//to serve static files like css js images

const io = new Server(server);//ye paeticular cheez meri har cheez handle karegi

io.on("connection",(socket)=>{//ye mera client h -> user
    socket.on("chatMessage",(message)=>{
       // console.log("A new User message",message);
        io.emit("message",message);//ye sare clients ko message bhej dega
    })
});//io.on ka matlab jab bhi koi connection aayega to ye function chalega

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})
server.listen(9000,()=>{
    console.log("Chat App running on port 9000");
})