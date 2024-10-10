const Product = require('../models/productModel');
const mongoose = require('mongoose') 

// Get all car models
const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

//get products by id
const getProductsById = async (req, res) => {
    const  {id} =req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({msg: 'Invalid ID'})
    }

   const product = await Product.findById(id)

   if (!product) {
       return res.status(404).json({error: 'product not found'})
   }
   res.status(200).json(product)
};

// Create a new car model
const createNewProduct = async (req, res) => {
  const { make, model, year, description, imageUrl, price } = req.body ;

  let emptyFields = [];

  if (!make) {
    emptyFields.push('make');
  }
  if (!model) {
    emptyFields.push('model');
  }
  if (!year) {
    emptyFields.push('year');
  }
  if (!description) {
    emptyFields.push('description');
  }
  if (!imageUrl) {
    emptyFields.push('imageUrl');
  }
  if (!price) {
    emptyFields.push('price');
  }

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all required fields', emptyFields });
  }

  try {
    const newProduct = await Product.create({ make, model, year, description, imageUrl, price });
    res.status(200).json({ success: "Product created successfully", newProduct });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//Delete a Product
const deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ msg: 'Invalid ID' });
    }
  
    const product = await Product.findByIdAndDelete(id);
  
    if (!product) {
      return res.status(400).json({ error: 'Product not found' });
    }
  
    res.status(200).json(product);
  }
  

//update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ msg: 'Invalid ID' });
    }

    const product = await Product.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true } // Return the updated document
    );

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




module.exports = {
  getAllProducts,
  createNewProduct,
  getProductsById,
  deleteProduct,
  updateProduct
 }  

