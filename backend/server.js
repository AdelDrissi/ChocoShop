require('dotenv').config(); // Charger les variables d'environnement
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product'); // Importer le modèle de produit

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json()); // Pour analyser les requêtes JSON

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connecté à MongoDB'))
  .catch((err) => console.error('Erreur de connexion à MongoDB:', err));

// Route d'accueil
app.get('/', (req, res) => {
  res.send("Bienvenue dans l'application e-commerce de chocolat!");
});

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

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
