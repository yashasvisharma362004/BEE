const express = require("express");
const connectDB = require("./db/connectDd");
const app = express();
const PORT = 3000;
require("dotenv").config();
// router
const authRouter = require("./routes/auth.routes")
const userRouter = require("./routes/user.route")



// routes
// app.use("view engine","ejs");
// app.use("views",Path.join(__dirname,"views"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/',(req,res)=>{
//   res.render("hello")
// })

app.use("/auth",authRouter);
app.use("/user",userRouter);
app.get("/", (req, res) => {	});


connectDB().then(()=>{
  app.listen(PORT, () => console.log("Server running on port " + PORT));
}).catch((error)=>console.log(error))