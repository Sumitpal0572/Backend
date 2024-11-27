const express = require("express");
const Todo = require("../schema/todo.model");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

//Create new todo
router.post("/", async (req, res) => {
    try {
        const { title, description, isPublic } = req.body;
        const todo = new Todo({
            title,
            description,
            isPublic,
            userId: req.user._id, // From authMiddleware
        });
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

//Get all todos
router.get("/", async (req, res) => {
    try {
        const todos = await Todo.find({ userId: req.user._id });
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


//Update a todo
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedTodo = await Todo.findOneAndUpdate(
            { _id: id, userId: req.user._id },
            updates,
            { new: true }
        );

        if (!updatedTodo)
            return res.status(404).json({ message: "Todo not found" });

        res.json(updatedTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


//Delete a todo
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTodo = await Todo.findOneAndDelete({
            _id: id,
            userId: req.user._id,
        });

        if (!deletedTodo)
            return res.status(404).json({ message: "Todo not found" });

        res.json({ message: "Todo deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;