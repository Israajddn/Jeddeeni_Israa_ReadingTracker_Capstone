const express = require('express');
const ReadingTracker = require('../models/readingTrackerModel');

const router = express.Router();

// GET all books
router.get('/', (req, res) => {
    res.json({mssg: 'Get all books'});
});

// GET a single book
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single book'});
});

// POST a new book
router.post('/', async (req, res) => {
    const {title, author, dateStarted, dateFinished} = req.body;
    // add doc to db
    try {
        const readingTracker = await ReadingTracker.create({title, author, dateStarted, dateFinished});
        res.status(200).json(readingTracker);
    } catch (error){
        res.status(400).json({error: error.message});
    }
});

// DELETE a book
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a book'});
});

// UPDATE a book
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a book'});
});

module.exports = router;