const express = require('express');
const Product = require('../models/Product'); // Assure-toi que le chemin est correct
const app = express();
app.use(express.json()); // Pour que Express puisse traiter les données JSON

// Route pour ajouter un chocolat
app.post('/products', async (req, res) => {
  try {
    const { name, description, price, imageUrl, quantity } = req.body;
    const product = new Product({
      name,
      description,
      price,
      imageUrl,
      quantity,
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route pour obtenir tous les produits
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
