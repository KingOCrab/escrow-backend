// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

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
        id: req.body.id, // CRITICAL: Now using the true blockchain ID
        name: req.body.name,
        description: req.body.description,
        priceEth: req.body.priceEth
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Remove an item from the database after a successful transaction
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    // Filter out the product that matches the ID
    products = products.filter(p => p.id !== productId);
    res.status(200).send({ message: "Product removed successfully" });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});