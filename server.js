const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
const portfolioRoute = require("./routes/portfolioRoute");
const port = process.env.PORT || 8000;
const dbConfig = require("./config/dbConfig");

app.use(cors()); // Enable CORS for all routes
app.use("/api/portfolio", portfolioRoute);

// Console.log is already in place for server startup
app.listen(port, () => {
    console.log(`Server is running successfully on port ${port}`);
});
