const http=require("http");
const express=require("express");

const app=express();

app.use((req,res,next)=>{
    console.log("In the Middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("In another Middleware");
    res.send({Name:"Amit"});
});

const server=http.createServer(app);
server.listen(3000,()=>{
    console.log("Server started");
});