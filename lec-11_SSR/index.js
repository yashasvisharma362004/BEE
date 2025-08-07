const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path")//path provide karna kisi bhi folder ya package ka

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")))
//app.use(express.static(path.join(__dirname,"")))

app.get("/", (req, res) => {
    res.send("server is running");
});

app.get("/user",(req,res)=>{

})

app.get("/contacts",(req,res)=>{
    res.redirect("contacts.html");
})

app.get("/user",(req,res)=>{
    let user = {
        name: "Yashasvi",
        email: "yashu@gmail.com",
        age:21
    }
    res.status(200).json({user});
})

app.listen(3000, () => console.log("Server running on port " + 3000));