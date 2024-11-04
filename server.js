const express = require('express');
const cors = require('cors'); // Import the cors package
require('dotenv').config();
const app = express();
const dbConfig = require('./config/dbConfig');

// Use CORS middleware
app.use(cors({
    origin: 'https://resplendent-kataifi-4c95e4.netlify.app', // Allow your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    credentials: true // Allow credentials if needed
}));

const portfolioRoute = require("./routes/portfolioRoute");
app.use(express.json());
app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});