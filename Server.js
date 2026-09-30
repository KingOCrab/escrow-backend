// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let products = [];

// Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Add a new product (metadata)
app.post('/api/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        description: req.body.description,
        priceEth: req.body.priceEth
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});