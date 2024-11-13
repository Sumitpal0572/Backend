const express = require("express");
const connect = require("./config/db");
const userRoutes = require("./routes/userroutes")
const productRoutes = require("./routes/productroute");

const app = express();
const PORT = 3000;

app.use(express.json())

app.use("/users", userRoutes)
app.use("/products", productRoutes);

app.listen(PORT, async () => {
    await connect();
    console.log(`Hey listening on port :${PORT}`);
});