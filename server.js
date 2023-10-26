const http=require("http")
const data=[{"What is node1" :"Node is an opensourse crossplatform javascript frontend environment that execute the Javascript code web browser"}]

const app=http.createServer((req,res)=>{
  if(req.url==="/"){
    res.write("Home Page")
    res.end();
  }
   else if(req.url==="/htmldata")
   {
    res.write("<h1>What is Node</h1>");
   
    res.write("<p> Node is an opensourse crossplatform javascript frontend environment that execute the Javascript code web browser</p>")
     res.end()
   }
   else if(req.url==="/jsondata"){
   const data1=JSON.stringify(data)
   res.write(data1);
   res.end()
   }
})
 
  
app.listen(4000,()=>{
    console.log("Running at port 4000")
})