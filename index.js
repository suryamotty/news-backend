const express = require('express')
const cors= require('cors')
const dataService = require('./dataService')

const server=express()

server.use(cors({
    origin:'http://localhost:4200'
}))

server.use(express.json())

server.listen(3000,()=>{
    console.log("server started at port 3000");
})


//register api call
server.post('/register', (req,res)=>{
    console.log("inside register api");
    console.log(req.body);
    dataService.register(req.body.email,req.body.pswd)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
   
})
//login api call
server.post('/login', (req,res)=>{
    console.log("inside login api");
    console.log(req.body);
    dataService.login(req.body.email,req.body.pswd)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
   
})