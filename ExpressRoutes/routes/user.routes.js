const express = require("express");
const router = express.Router();

// to get user profile

router.get("/profile", (req, res) => {
    res.send("User Profile")
});

//update user by using id

router.put("/:id", (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;
    res.send(`User with ID ${userId} updated with data ${updateData}`)
});

//delete user by using id 

router.delete("/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User with ID ${userId} deleted`)
})

module.exports = router