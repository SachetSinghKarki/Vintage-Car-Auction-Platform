// const express = require('express');
// const router = express.Router();
// const adminController = require('../controllers/adminController');
// const {isAdmin} = require('../middleware/verifyToken'); // Import the middleware


// // Route to get all users
// router.get('/users', getUser);

// // Route to delete a user
// router.delete('/users/:id', deleteUser);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { getUser, deleteUser } = require('../controllers/adminController'); // Import controller functions
const { isAdmin } = require('../middleware/verifyToken'); // Import the middleware

// Route to get all users (Protected by isAdmin middleware)
router.get('/users', isAdmin, getUser);

// Route to delete a user (Protected by isAdmin middleware)
router.delete('/users/:id', isAdmin, deleteUser);

module.exports = router;
