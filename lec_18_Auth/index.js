const express = require("express");
const connectDB = require("./db/connectDd");
const app = express();
const PORT = 4000;
const product = require('./models/product.model');
require("dotenv").config();
const path = require("path");
const cors = require("cors");
app.use(cors({
  origin: "http://localhost:3000",
  methods:["Get","Post","Put","Delete"],
  credentials:true
}))
  
// router
const authRouter = require("./routes/auth.routes")
const userRouter = require("./routes/user.route");
const verifyUser = require("./middlewares/verify.middleware");



// routes
 app.set("view engine","ejs");
 app.set("views",path.join(__dirname,"views"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 app.get('/',verifyUser,async(req,res)=>{
  // const name = "Yashasvi Sharma"
  // const contacts = [{name:"Yashu",phone:9328469324},{name:"Ye mera dusra num h",phone:9817697241}]
  //  res.render("hello",{username:name,contacts})
   //this is same as above line
   //res.render("hello",{username:name,contacts:contacts})
try{
   const products = await product.find();
   res.render("home",{products});
}catch(error){
  res.status(400).json({message:error.message});
}
 })
//aisa lga tumse mil k
app.use("/auth",authRouter);
app.use("/user",userRouter);
app.get("/", (req, res) => {	});


connectDB().then(()=>{
  app.listen(PORT, () => console.log("Server running on port " + PORT));
}).catch((error)=>console.log(error))