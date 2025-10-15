const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
    const result = {
        name: "any",
        work: null
    };
    res.json({ result });
});
app.get('/login',(req,res)=>{
    res.send("Welcome to login page")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
