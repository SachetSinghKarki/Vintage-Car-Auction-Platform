// // routes/bidRoutes.js
// const express = require('express');
// const router = express.Router();
// const bidController = require('../controllers/bidController');

// router.post('/bids', bidController.placeBid); // Handle bid placement
// router.get('/bids/:productId', bidController.getBidsForProduct); // Get all bids for a product
// router.get('/bids/highest/:productId', bidController.getHighestBidForProduct); // Get the highest bid for a product

// module.exports = router;

const express = require('express');
const router = express.Router();
const bidController = require('../controllers/bidController');
const { isAdmin } = require('../middleware/verifyToken'); // Import the middleware

// Route to place a bid
router.post('/placeBid', bidController.placeBid);

// Route to get all bids (Admin only)
router.get('/allBids', isAdmin, bidController.getAllBids);

module.exports = router;
