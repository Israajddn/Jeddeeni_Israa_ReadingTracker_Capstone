const express = require('express');

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
router.post('/', (req, res) => {
    res.json({mssg: 'Post a book'});
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