

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
  origin: ["http://localhost:3001"], // Replace with your client origin
  methods: ["POST", "GET"],
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/api/product', productRoutes);
app.use('/api/bid', bidRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);

// Home Route
app.get('/', (req, res) => {
  res.send('Hello, this is the backend server for an online auction application.');
});

// 404 Middleware
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Database Connection and Server Start
connectDB().then(() => {
  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Database connection error:', err);
});

module.exports = app;
