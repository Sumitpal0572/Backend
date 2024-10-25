const express = require("express");
const router = express.Router();
// To Get Todo

router.get("/todo", (req, res) => {
    res.send("Todo Page")
});

module.exports = router