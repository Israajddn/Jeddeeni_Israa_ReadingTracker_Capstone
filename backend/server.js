require('dotenv').config();
const cors = require('cors')
const port = process.env.PORT;

const express = require('express');

// express app
const app = express();

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.get('/', (req, res) => {
    res.json({ mssg: 'Weclome to the app' });
});;

app.use(cors());

// listen for requests
app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})
;