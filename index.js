const express=require("express");
const { validate, validateall } = require("./Router/middleware/auth");
const data=[{"What is Node":"Node is an opensourse crossplatform javascript frontend environment that execute the Javascript code web browser"}]
const app = express();
app.use(validateall)
app.get("/",(req,res)=>{
    res.send(data)
})
app.get("/about/:age",validate,(req,res)=>{
    res.send("<h1>What is Node</h1>")
    
})
app.listen(3005,()=>{
    console.log("Server Live on 3005")
})