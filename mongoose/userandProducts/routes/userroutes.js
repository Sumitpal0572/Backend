const express = require("express");
const User = require("../schema/user");

const router = express.Router();

//create new user 

router.post("/", async (req, res) => {
    const { name, age, email } = req.body;

    // if user already  exists

    const exitingUser = await User.findOne({ email });
    if (exitingUser) {
        return res.status(400).json({ message: `user already exits` })
    }

    try {
        const newUser = new User({ name, age, email })
        await newUser.save();
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ message: `error creating user`, error })
    }
});

//read all users 

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: `Error Updating user`, error })
    }
});

//updating user

router.put("/:id", async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updateUser)
    } catch (error) {
        res.status(500).json({ message: `Error Updating User`, error })
    }
});

//delete user

router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: `User deleted successfully` })
    } catch (error) {
        res.status(500).json({ message: `Error deleting the user`, error })
    }
})

module.exports = router;