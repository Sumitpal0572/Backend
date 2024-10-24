const express = require("express");
const fs = require("fs");


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hey from express server");
})

//read db.json file

const readTodos = () => {
    const data = fs.readFileSync("db.json");
    return JSON.parse(data).todos;
}

// write to the db.json

const writeTodos = (todos) => {
    fs.writeFileSync("db.json", JSON.stringify({ todos }))
}

//get all the todos

app.get("/todos", (req, res) => {
    const todos = readTodos();
    res.json(todos);
});

//add new todos

app.post("/todos", (req, res) => {
    const todos = readTodos();
    const newtodo = {
        id: todos.length + 1,
        title: req.body.title,
        status: req.body.status || false,
    };
    todos.push(newtodo);
    writeTodos(todos);
    res.json(201).json({ message: "new todo created" });

})

// Update the status of all todos with even ID from false to true
app.patch("/todos/update-even", (req, res) => {
    const todos = readTodos();

    todos.forEach((todo) => {
        if (todo.id % 2 === 0 && todo.status === false) {
            todo.status = true;
        }
    });
    writeTodos(todos);
    res.json({ message: "Todo with even Ids are updated" });
});

// Delete all todos whose status is true
app.delete("/todos/delete-true", (req, res) => {
    let todos = readTodos();

    todos = todos.filter((todo) => todo.status !== true);
    writeTodos(todos);
    res.json({ message: "Todos with status true are deleted" });
});

app.listen(3000, () => {
    console.log("server is listening on port 3000");
})