const mongoose = require("mongoose");
const mongoURI = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.3'

const connect = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("mongoDB connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;