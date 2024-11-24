const express = require("express");
const app = express()

const PORT = 9090;


app.listen(PORT, () => {
    console.log(`server running on port:${PORT}`);
})