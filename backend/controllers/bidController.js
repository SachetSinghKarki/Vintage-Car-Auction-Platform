// const Bid = require('../models/bidModel');
// const Product = require('../models/productModel');
// const mongoose = require('mongoose');

// // Place a new bid
// // const placeBid = async (req, res) => {
// //   const { productId, amount } = req.body;

// //   if (!mongoose.Types.ObjectId.isValid(productId)) {
// //     return res.status(400).json({ msg: 'Invalid product ID' });
// //   }

// //   try {
// //     const product = await Product.findById(productId);
// //     if (!product) {
// //       return res.status(404).json({ error: 'Product not found' });
// //     }

// //     // Check if bid amount is higher than the current highest bid
// //     const highestBid = await Bid.findOne({ productId }).sort({ amount: -1 });
// //     if (highestBid && amount <= highestBid.amount) {
// //       return res.status(400).json({ error: 'Bid amount must be higher than the current highest bid' });
// //     }

// //     const newBid = await Bid.create({ amount, productId });
// //     res.status(201).json({ success: 'Bid placed successfully', newBid });
// //   } catch (err) {
// //     console.error('Error placing bid:', err);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // };
// const placeBid = async (req, res) => {
//     const { productId, amount } = req.body;
  
//     if (!productId || !amount) {
//       return res.status(400).json({ error: 'Product ID and amount are required' });
//     }
  
//     if (!mongoose.Types.ObjectId.isValid(productId)) {
//       return res.status(400).json({ msg: 'Invalid product ID' });
//     }
  
//     if (amount <= 0) {
//       return res.status(400).json({ error: 'Bid amount must be greater than zero' });
//     }
  
//     try {
//       const product = await Product.findById(productId);
//       if (!product) {
//         return res.status(404).json({ error: 'Product not found' });
//       }
  
//       const highestBid = await Bid.findOne({ productId }).sort({ amount: -1 });
//       if (highestBid && amount <= highestBid.amount) {
//         return res.status(400).json({ error: 'Bid amount must be higher than the current highest bid' });
//       }
  
//       const newBid = await Bid.create({ amount, productId, userId: req.user._id }); // Ensure userId is included
//       res.status(201).json({ success: 'Bid placed successfully', newBid });
//     } catch (err) {
//       console.error('Error placing bid:', err.message);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };

// // Get all bids for a product
// const getBidsForProduct = async (req, res) => {
//   const { productId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(productId)) {
//     return res.status(400).json({ msg: 'Invalid product ID' });
//   }

//   try {
//     const bids = await Bid.find({ productId }).populate('userId', 'name'); // If you have a user model
//     res.status(200).json(bids);
//   } catch (err) {
//     console.error('Error fetching bids:', err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// // Get the highest bid for a product
// const getHighestBidForProduct = async (req, res) => {
//   const { productId } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(productId)) {
//     return res.status(400).json({ msg: 'Invalid product ID' });
//   }

//   try {
//     const highestBid = await Bid.findOne({ productId }).sort({ amount: -1 });
//     if (!highestBid) {
//       return res.status(404).json({ error: 'No bids found for this product' });
//     }
//     res.status(200).json(highestBid);
//   } catch (err) {
//     console.error('Error fetching highest bid:', err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// module.exports = {
//   placeBid,
//   getBidsForProduct,
//   getHighestBidForProduct
// };

// const Bid = require('../models/bidModel');
// const Product = require('../models/productModel'); // Assuming you have a Product model

// // Place a bid
// const placeBid = async (req, res) => {
//     try {
//         const { userId, productId, amount } = req.body;

//         // Check if the product exists
//         const product = await Product.findById(productId);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }

//         // Create a new bid
//         const newBid = new Bid({
//             user: userId,
//             product: productId,
//             amount
//         });

//         await newBid.save();

//         res.status(201).json({ message: 'Bid placed successfully', newBid });
//     } catch (err) {
//         res.status(500).json({ message: 'Internal Server Error' });
//         console.log(err);
//     }
// };

// // Get all bids (Admin only)
// const getAllBids = async (req, res) => {
//     try {
//         const bids = await Bid.find().populate('user').populate('product');
//         res.status(200).json({ bids });
//     } catch (err) {
//         res.status(500).json({ message: 'Internal Server Error' });
//         console.log(err);
//     }
// };

// module.exports = {
//     placeBid,
//     getAllBids
// };

const Bid = require('../models/bidModel');
const Product = require('../models/productModel');
const User = require('../models/userModel');

// const placeBid = async (req, res) => {
//     try {
//         const { userId, productId, amount } = req.body;

//         // Check if the product exists
//         const product = await Product.findById(productId);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }

//         // Check if the user exists
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Create a new bid
//         const newBid = new Bid({
//             userId,
//             productId,
//             amount
//         });

//         await newBid.save();
//         res.status(201).json({ message: 'Bid placed successfully', newBid });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };

// const placeBid = async (req, res) => {
//     try {
//         const { userId, productId, amount } = req.body;

//         console.log('Bid Request:', { userId, productId, amount });

//         // Check if the product exists
//         const product = await Product.findById(productId);
//         if (!product) {
//             console.log('Product not found');
//             return res.status(404).json({ message: 'Product not found' });
//         }

//         // Check if the user exists
//         const user = await User.findById(userId);
//         if (!user) {
//             console.log('User not found');
//             return res.status(404).json({ message: 'User not found' });
//         }

//         console.log('User and product found. Proceeding to create bid.');

//         // Create a new bid
//         const newBid = new Bid({
//             userId,
//             productId,
//             amount
//         });

//         await newBid.save();
//         res.status(201).json({ message: 'Bid placed successfully', newBid });
//     } catch (err) {
//         console.error('Error during bid placement:', err);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };
const placeBid = async (req, res) => {
    try {
        const { userId, productId, amount } = req.body;

        console.log('Bid Request:', { userId, productId, amount });

        // Check if the product exists
        const product = await Product.findById(productId);
        if (!product) {
            console.log('Product not found');
            return res.status(404).json({ message: 'Product not found' });
        }

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('User and product found. Proceeding to create bid.');

        // Create a new bid
        const newBid = new Bid({
            user: userId,  // Assign userId to the 'user' field
            product: productId,  // Assign productId to the 'product' field
            amount
        });

        await newBid.save();
        console.log('Bid successfully saved:', newBid);
        res.status(201).json({ message: 'Bid placed successfully', newBid });
    } catch (err) {
        console.error('Error during bid placement:', err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};


// Get all bids (Admin only)
// const getAllBids = async (req, res) => {
//     try {
//         const bids = await Bid.find().populate('user').populate('product');
//         res.status(200).json({ bids });
//     } catch (err) {
//         res.status(500).json({ message: 'Internal Server Error' });
//         console.log(err);
//     }
// };
const getAllBids = async (req, res) => {
    try {
        const bids = await Bid.find().populate('user').populate('product');
        res.status(200).json({ bids });
    } catch (err) {
        res.status(500).json({ message: 'Internal Server Error' });
        console.log(err);
    }
};

module.exports = {
    placeBid,
    getAllBids
};
