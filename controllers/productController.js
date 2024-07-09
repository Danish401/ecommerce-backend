const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

// Fetch all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Fetch single product by ID
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product); // Corrected to send the product as response
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// Create new product
const createProduct = asyncHandler(async (req, res) => {
  const { name, description, price, countInStock, imageUrl } = req.body;

  const product = new Product({
    name,
    description,
    price,
    countInStock,
    imageUrl,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

module.exports = { getProducts, getProductById, createProduct };
