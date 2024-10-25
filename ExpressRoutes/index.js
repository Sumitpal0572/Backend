const express = require("express");
const app = express();


const userRouter = require("./routes/user.routes");
const todoRouter = require("./routes/todo.routes");

app.use("/user", userRouter)
app.use("/todos", todoRouter)

app.get("/", (Req, res) => {
    res.send("Hello World!")
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})