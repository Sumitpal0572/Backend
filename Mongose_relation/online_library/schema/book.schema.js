const mongoose = require('mongoose');

// Book Schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true, // Ensures no duplicate titles
    },
    published_year: {
        type: Number,
    },
    genre: {
        type: String,
        default: 'Unknown', // Optional default value
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author', // Assuming 'Author' is the name of the Author model
        required: true, // Ensures a book always has an associated author
    },
});


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
