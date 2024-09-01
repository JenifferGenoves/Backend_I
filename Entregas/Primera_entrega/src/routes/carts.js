const express = require('express');
const fs = require('fs');
const router = express.Router();
const cartsFilePath = './data/carts.json';

// Helper function to read carts from file
const readCarts = () => {
    const data = fs.readFileSync(cartsFilePath);
    return JSON.parse(data);
};

// Helper function to write carts to file
const writeCarts = (carts) => {
    fs.writeFileSync(cartsFilePath, JSON.stringify(carts, null, 2));
};

// POST /api/carts
router.post('/', (req, res) => {
    const carts = readCarts();
    const newCart = {
        id: (carts.length + 1).toString(),
        products: []
    };
    carts.push(newCart);
    writeCarts(carts);
    res.status(201).json(newCart);
});

// GET /api/carts/:cid
router.get('/:cid', (req, res) => {
    const carts = readCarts();
    const cart = carts.find(c => c.id === req.params.cid);
    if (cart) {
        res.json(cart);
    } else {
        res.status(404).send('Cart not found');
    }
});

// POST /api/carts/:cid/product/:pid
router.post('/:cid/product/:pid', (req, res) => {
    const carts = readCarts();
    const cart = carts.find(c => c.id === req.params.cid);
    if (cart) {
        const productIndex = cart.products.findIndex(p => p.product === req.params.pid);
        if (productIndex !== -1) {
            cart.products[productIndex].quantity += 1;
        } else {
            cart.products.push({ product: req.params.pid, quantity: 1 });
        }
        writeCarts(carts);
        res.status(201).json(cart);
    } else {
        res.status(404).send('Cart not found');
    }
});

module.exports = router;