// const express = require('express');
// const cors = require('cors');
// const productRoutes = require('./routes/products');
// const adminRoutes = require('./routes/adminRoutes');
// const authRoutes = require('./routes/auth');
// const bidRoutes = require('./routes/bidRoutes');
// const connectDB = require('./utils/db');
// const cookieParser = require('cookie-parser');

// const app = express();
// // app.use(cors({
// //   credentials:true,
// //   origin:"http://localhost:3001"
// // }));
// app.use(cors({
//   origin: [""],
//   methods: ["POST", "GET"],
//   credentials: true
// }));
// app.use(cookieParser()); // You can pass a secret for signing cookies
// app.use(express.json());

// // Routes
// app.use('/api/product', productRoutes);
// app.use('/api/bid', bidRoutes); 
// app.use('/api/admin', adminRoutes);
// app.use('/api/auth',authRoutes); 

// // Middleware for handling 404 errors
// // app.use((req, res, next) => {
// //   res.status(404).json({ message: 'Not Found' });
// // });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack); // Log the error details
//   res.status(500).json({ message: 'Something went wrong!' }); // Send a user-friendly error message
// });

// app.get ('/' , (req,res) => {
//   res.send('Hello, this is the backend server for an online auction application.')  // Replace with your own server message.
// })

// // Connect to the database and start the server
// connectDB().then(() => {
//   app.listen(process.env.PORT, () => {
//     console.log('Server is running on port', process.env.PORT);
//   });
// });

const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/products');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/auth');
const bidRoutes = require('./routes/bidRoutes');
const connectDB = require('./utils/db');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors({
  origin: [""], // Update this to the origin you want to allows
  methods: ["POST", "GET"],
  credentials: true
}));

app.use(cookieParser()); // You can pass a secret for signing cookies
app.use(express.json());

// Routes
app.use('/api/product', productRoutes);
app.use('/api/bid', bidRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);

// Middleware for handling 404 errors
// app.use((req, res, next) => {
//   res.status(404).json({ message: 'Not Found' });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack); // Log the error details
//   res.status(500).json({ message: 'Something went wrong!' }); // Send a user-friendly error message
// });
app.use('/favicon.png', express.static('./favicon.png'));
app.get("/",(req,res)=>{
  res.send('Hello, this is the backend server for an online auction application.')  // Replace with your own server message.
})
app.get('/favicon.png', (req, res) => {
  res.status(204).end();  // No Content response
});


// Connect to the database and export the app for Vercel
connectDB().then(() => {
  console.log('Database connected');
   // Start the server when the database connection is successful or fails. This ensures that the server starts only when the database is ready.  // Replace process.env.PORT with the actual port number you want to use.  // This is the recommended way to start the server in production.  // You can also use environment variables to store your

}).catch(err => {
  console.error('Database connection error:', err);
});

module.exports = app; // Export the app
