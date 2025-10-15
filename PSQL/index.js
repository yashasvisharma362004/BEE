const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const commentRouter = require("./routes/comment.route");

const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");

const courseRouter = require("./routes/courses.route");
app.use("/courses",courseRouter);
app.use("/user",userRouter);
app.use("/post",postRouter);
app.use("/comment",commentRouter);

app.get("/",(req,res)=>{})

app.listen(PORT, () => console.log("Server running on port " + PORT));