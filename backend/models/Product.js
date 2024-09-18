const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Product = mongoose.model(
  "Product",
  new Schema(
    {
      nome: {
        type: String,
        required: true,
      },

      categoria: {
        type: String,
        required: true,
      },

      preco: {
        type: Number,
        required: true,
      },

      nota: {
        type: Number,
        required: false,
      },

      image: {
        type: String,
        required: false,
      },

      marca: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Product;
