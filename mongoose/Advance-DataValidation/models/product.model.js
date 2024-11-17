const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: [50, 'Name not more than 50  got {VALUE}']
    },

    price: {
        type: Number,
        reuired: true,
        match: /^\d{ 0, 8}(\.\d{ 1, 4}) ? $/
    },
    category: {
        type: String,
        enum: {
            values: ['Electronics', 'Clothing', 'Books', 'Home appliances'],
            message: '{VALUE} is not supported'
        }
    },
    stock: {
        type: Number,
        required: true,
        match: / 0*[1-9][0-9]*(\.[0-9]+)?/
    },

})

const product = mongoose.model("product", productSchema);

module.exports = product