require("dotenv").config();
const express = require("express");
const connect = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
app.use(express.json());

//Routes
app.use("auth", authRoutes);
app.use("todos", authMiddleware, todoRoutes);


const PORT = 3000;

app.listen(PORT, async () => {
    await connect();
    console.log(`Server is up and running ${PORT}`);
});