const mongoose = require('mongoose');

// Author Schema
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    birth_year: {
        type: Number,
        required: true,
    },
    nationality: {
        type: String,
        default: 'Unknown',
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book', // Assuming 'Book' is the name of the Book model
    }],
});

// Create the model
const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
