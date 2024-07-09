const express = require("express");
const {
  getProducts,
  getProductById,
  createProduct, // Import the new controller function
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts); // Route for fetching all products
router.get("/:id", getProductById); // Route for fetching a product by ID
router.post("/", createProduct); // Route for creating a new product

module.exports = router;
