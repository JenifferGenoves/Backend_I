const express = require("express");
const bodyParser = require("body-parser");
const productsRouter = require("./src/routes/products");
const cartsRouter = require("./src/routes/carts");

const app = express();
const port = 8080;

app.use(bodyParser.json());

// Ruta raíz ("/")
app.get("/", (req, res) => {
    res.send("Welcome to the API! Use /api/products or /api/carts");
  });

// Usar el router de productos
app.use("/api/products", productsRouter);

// Usar el router de carts
app.use("/api/carts", cartsRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

