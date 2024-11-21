const mongoose = require("mongoose");
const mongoURI =
    // 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.3'
    "mongodb://localhost:27017/product-management";

const connect = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connect;