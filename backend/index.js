const http = require('http');
const express = require('express')
const cors = require('cors');

const app=express();
const port = process.env.PORT || 4004;
app.use(cors());

 
app.get("/",(req,res) => {
    res.send("working");
})

server.listen(port,()=>{
    console.log(`run on the ${port}`);
})
