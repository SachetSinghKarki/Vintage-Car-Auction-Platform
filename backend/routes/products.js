const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// GET all products
router.get('/', productController.getAllProducts);

// GET a single product
router.get('/:id', productController.getProductsById);

// Create a new product
router.post('/', productController.createNewProduct);

// DELETE a product
router.delete('/:id', productController.deleteProduct);

// UPDATE a product
router.put('/:id', productController.updateProduct);

module.exports = router;
