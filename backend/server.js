require('dotenv').config(); // Charger les variables d'environnement
const express = require('express');
const mongoose = require('mongoose');
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

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
