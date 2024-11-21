const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        reuired: true,
        min: [1, "price should be greater than one or one"]
    },
    category: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },

},
    { timestamps: true }
);

const product = mongoose.model("product", productSchema);

module.exports = product