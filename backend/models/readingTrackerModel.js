const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const readingTrackerSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    dateStarted: {
        type: Date,
        required: true
    },
    dateFinished: {
        type: Date,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('ReadingTracker', readingTrackerSchema);