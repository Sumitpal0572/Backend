const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensures usernames are unique
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures emails are unique
    },
    borrowed_books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction', // Assuming 'Transaction' is the name of the Transaction model
    }],
});

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
