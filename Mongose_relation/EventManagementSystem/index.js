const express = require("express")
const connect = require("./config/db");
const app = express()
const eventRoute = require("./routes/eventRoutes");

const PORT = 5000
app.use(express.json());


//Routes
app.use("/", eventRoute);

app.listen(PORT,async () => {
    connect()
    console.log(`Server running on Port:${PORT}`);
}) 