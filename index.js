const express = require('express');
const cors = require('cors');
const cookiesParser = require('cookie-parser');
const connectDB = require('./config/connectDB');
const router = require('./routes/index');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookiesParser());

const PORT = process.env.PORT || 8080;

app.get('/', (request, response) => {
    response.json({
        message: "Server running at " + PORT
    });
});

// API endpoints
app.use('/api', router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server running at " + PORT);
    });
});
