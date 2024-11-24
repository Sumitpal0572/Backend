const mongoose = require('mongoose');

// Transaction Schema
const transactionSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book', // Assuming 'Book' is the name of the Book model
        required: true, // A transaction must involve a book
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming 'User' is the name of the User model
        required: true, // A transaction must involve a user
    },
    borrow_date: {
        type: Date,
        default: Date.now, // Defaults to the current date
    },
    return_date: {
        type: Date, // Nullable
        default: null, // Explicitly set as null initially
    },
});


const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
