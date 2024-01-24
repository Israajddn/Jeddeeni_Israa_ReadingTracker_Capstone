const ReadingTracker = require('../models/readingTrackerModel');
const mongoose = require('mongoose');

// GET all books
const getBooks = async (req, res) => {
    const books = await ReadingTracker.find({}).sort({ createdAt: -1 });

    res.status(200).json(books);
};

// GET a single book
const getBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such book' });
    }

    const book = await ReadingTracker.findById(id);

    if (!book) {
        return res.status(400).json({ error: 'No such book' });
    }

    res.status(200).json(book);
};

// POST a new book
const createBook = async (req, res) => {

    const { title, author, dateStarted, dateFinished } = req.body;

    let emptyFields = []

    console.log(title)

    if (!title) {
        emptyFields.push('title')
    }
    if (!author) {
        emptyFields.push('author')
    }
    if (!dateStarted) {
        emptyFields.push('date Started')
    }
    if (!dateFinished) {
        emptyFields.push('date Finished')
    }
    if (emptyFields.length > 0) {
        console.log(emptyFields)
        return res.status(400).json({ error: `Please fill in the highlighted fields ${emptyFields}`, emptyFields })
    }
    
    // add doc to db
    try {
        const book = await ReadingTracker.create({ title, author, dateStarted, dateFinished });
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE a book
const deleteBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such book' });
    }

    const book = await ReadingTracker.findOneAndDelete({ _id: id });

    if (!book) {
        return res.status(400).json({ error: 'No such book' });
    }

    res.status(200).json(book);
};

// UPDATE a book
const updateBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such book' });
    }

    const book = await ReadingTracker.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!book) {
        return res.status(400).json({ error: 'No such book' });
    }

    res.status(200).json(book);
};

module.exports = {
    createBook,
    getBooks,
    getBook,
    deleteBook,
    updateBook,
}