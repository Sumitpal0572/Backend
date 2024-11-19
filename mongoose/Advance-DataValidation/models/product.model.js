const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {
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
        match: / 0*[1-9][0-9]*(\.[0-9]+)?/,
        validate: {
            validator: Number.isInteger,
            message: "Stock must be an integer",
        },
    },

    SKU: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                const parts = value.split("-");
                return (
                    parts.length === 2 && parts[0] === "PROD" && parts[1].length === 4
                );
            },
            message:
                "SKU must follow the pattern PROD-XXXX where XXXX is numeric value",
        },
    },
    tags: {
        type: [String],
    },
},
    { timestamps: true }
);




const product = mongoose.model("product", productSchema);

module.exports = product