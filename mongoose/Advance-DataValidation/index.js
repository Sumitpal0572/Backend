const express = require('express')
const connect = require("./config/db");
const productRoutes = require("./routes/products.route");


const app = express();
const PORT = 5000

//Middleware to parse JSON
app.use(express.json());

//Routes
app.use("/product", productRoutes);

app.get("/", (req, res) => {
    res.send("ok!")
})

app.listen(PORT, async () => {
    await connect()
    console.log(`Port listening on port: ${PORT}`);
})