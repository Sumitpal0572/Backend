const express = require("express");
const connect = require('./config/db');


const app = express()

app.listen(3000,async () => {
    await connect();
    console.log(`Server is running on port`);
})