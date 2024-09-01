const express = require("express");
const fs = require("fs/promises");
const router = express.Router();

// Ruta para obtener todos los productos
router.get("/", async (req, res) => {
    const products = await fs.readFile(`${process.cwd()}/src/data/products.json`, {
        encoding: "utf-8",
    });
    res.status(200).send(products);
});

// Ruta para obtener un producto por ID
router.get("/:pid", async (req, res) => {
    const products = await fs.readFile(`${process.cwd()}/src/data/products.json`, {
        encoding: "utf-8",
    });

    const parsedProducts = JSON.parse(products);
    const { pid } = req.params;

    const product = parsedProducts.find((product) => product.id === Number(pid));

    if (product) {
        res.status(200).send(product);
    } else {
        res.status(404).send({ error: "Product not found" });
    }
});

// POST

// Leer el archivo de productos
async function readProductsFile() {
    const data = await fs.readFile(`${process.cwd()}/src/data/products.json`, {
        encoding: "utf-8",
    });
    return JSON.parse(data);
}

// Escribir en el archivo de productos
async function writeProductsFile(products) {
    await fs.writeFile(`${process.cwd()}/src/data/products.json`, JSON.stringify(products, null, 2), {
        encoding: "utf-8",
    });
}

// Generar un nuevo ID único
function generateUniqueId(products) {
    return products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
}

// Ruta para agregar un nuevo producto
router.post("/", async (req, res) => {
    const { title, description, code, price, status = true, stock, category, thumbnails = [] } = req.body;

    // Verificar que todos los campos obligatorios estén presentes
    if (!title || !description || !code || !price || stock === undefined || !category) {
        return res.status(400).send({ error: "All fields except thumbnails are required" });
    }

    try {
        const products = await readProductsFile();
        const newProduct = {
            id: generateUniqueId(products),
            title,
            description,
            code,
            price,
            status,
            stock,
            category,
            thumbnails,
        };

        products.push(newProduct);
        await writeProductsFile(products);

        res.status(201).send(newProduct);
    } catch (error) {
        res.status(500).send({ error: "Error creating product" });
    }
});


// PUT: Ruta para actualizar un producto por ID
router.put("/:pid", async (req, res) => {
    const { pid } = req.params;
    const updates = req.body;

    try {
        const products = await readProductsFile();
        const productIndex = products.findIndex((product) => product.id === Number(pid));

        if (productIndex === -1) {
            return res.status(404).send({ error: "Product not found" });
        }

        // No permitir la actualización del campo "id"
        if (updates.id) {
            return res.status(400).send({ error: "Cannot update product ID" });
        }

        // Actualizar los campos del producto
        const updatedProduct = { ...products[productIndex], ...updates };

        products[productIndex] = updatedProduct;

        await writeProductsFile(products);

        res.status(200).send(updatedProduct);
    } catch (error) {
        res.status(500).send({ error: "Error updating product" });
    }
});

// DELETE: Ruta para eliminar un producto por ID
router.delete("/:pid", async (req, res) => {
    const { pid } = req.params;

    try {
        const products = await readProductsFile();
        const productIndex = products.findIndex((product) => product.id === Number(pid));

        if (productIndex === -1) {
            return res.status(404).send({ error: "Product not found" });
        }

        // Eliminar el producto del array
        products.splice(productIndex, 1);

        await writeProductsFile(products);

        res.status(200).send({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).send({ error: "Error deleting product" });
    }
});

module.exports = router;


