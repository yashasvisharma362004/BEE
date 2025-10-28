const express = require("express");
const app = express();
const PORT = 3000;
const http = require("http");
const server = http.createServer(app);
//ye server ab http ka h express ka nhi rha m http ke ander express use kar rha hu
const socket = require("socket.io");
const io = socket(server);//attach socket.io to the server
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection",(client)=>{
    console.log("User1 connected->",client.id);

    //sending data to other clients on servers
    client.emit("notice","This is first message");
})

app.get("/", (req, res) => {
    res.send("Server running successfully");
	});

server.listen(PORT, () => console.log("Server running on port " + PORT));