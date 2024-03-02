const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT  || 8080;
const dbConfig = require("./config/dbConfig")


app.listen(port,()=>{
    console.log(`server is runinng sucessfully , ${port}`)
})