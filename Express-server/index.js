const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Express.js server")
});



app.listen(3000, () => {
    console.log("Server up to running on port 3000");
});