const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const portfolioRoute = require("./routes/portfolioRoute");
const port = process.env.PORT || 8000;
const dbConfig = require("./config/dbConfig");

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Ensure JSON parsing middleware is included
app.use("/api/portfolio", portfolioRoute);
const path = require("path")
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"client/build")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"client/build/index.html"))
    })
}
app.listen(port, () => {
    console.log(`Server is running successfully on port ${port}`);
});
