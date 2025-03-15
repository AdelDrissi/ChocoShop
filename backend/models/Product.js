const mongoose = require('mongoose');

// Définir le schéma pour un chocolat
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String, // URL de l'image du chocolat
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
});

// Créer un modèle à partir du schéma
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
