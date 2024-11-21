const express = require("express")
const connect = require("./config/db")
const productRoutes = require("./routes/product.route")
const categoryRoutes = require("./routes/category.route")

const app = express();
const PORT = 8080;

//Middleware to parse json
app.use(express.json());

//Routes Handling
app.use("/product", productRoutes);
app.use("/category", categoryRoutes);

app.listen(PORT, async () => {
    await connect();
    console.log(`Server running on Port: ${PORT}`);
})