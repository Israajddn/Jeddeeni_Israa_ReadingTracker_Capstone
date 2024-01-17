//.env
require('dotenv').config();

// Connect/Express middleware 
const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const readingTrackerRoutes = require('./routes/readingTracker');

// express app
const app = express();

app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/readingTracker', readingTrackerRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('coonected to db & listening on port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    });