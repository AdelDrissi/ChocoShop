const express = require('express');
const Product = require('../models/Product'); // Assure-toi que le chemin est correct
const app = express();
app.use(express.json()); // Pour que Express puisse traiter les données JSON

// Route pour ajouter un produit
app.post('/products', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  const product = new Product({
    name,
    description,
    price,
    imageUrl,
  });

  try {
    await product.save();
    res.status(201).json({ message: 'Produit ajouté avec succès' });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Erreur lors de l'ajout du produit", error: err });
  }
});
