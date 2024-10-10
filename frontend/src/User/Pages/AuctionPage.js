
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './AuctionPage.css'; // Ensure you have the necessary CSS

const AuctionPage = () => {
  const { carId } = useParams(); // Extract carId from URL
  const [product, setProduct] = useState(null); // Product details
  const [currentBid, setCurrentBid] = useState(10000); // Starting bid at $10,000
  const [computerBid, setComputerBid] = useState(10000); // Computer starts with the same bid as user
  const [timeRemaining, setTimeRemaining] = useState(null); // Timer state
  const [showAdminMessage, setShowAdminMessage] = useState(false); // Admin bid restriction
  const [winner, setWinner] = useState(null); // Track winner: 'user' or 'computer'
  const [error, setError] = useState(null); // Error handling
  const [loading, setLoading] = useState(true); // Loading state
  const [timerStarted, setTimerStarted] = useState(false); // Timer start state
  const [biddingClosed, setBiddingClosed] = useState(false); // Bidding closed state

  const user = useSelector((state) => state.Auth.user); // Fetch user details from Redux store
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Fetch product details
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/api/product/${carId}`);
      setProduct(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load auction details. Please try again.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [carId]);

  // Timer Logic
  useEffect(() => {
    if (timerStarted && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeRemaining === 0) {
      setBiddingClosed(true);
      determineWinner(); // Auction ended, determine winner
    }
  }, [timeRemaining, timerStarted]);

  // Continuous Computer Bidding Logic
  useEffect(() => {
    if (timerStarted && timeRemaining > 0 && !biddingClosed) {
      const computerBidInterval = setInterval(() => {
        // Computer places a random bid increase
        setComputerBid((prevBid) => prevBid + Math.floor(Math.random() * 5000) + 10000);
        setCurrentBid((prevBid) => Math.max(prevBid, computerBid)); // Ensure current bid is updated
      }, Math.random() * 3000 + 2000); // Random interval between 2-5 seconds

      return () => clearInterval(computerBidInterval);
    }
  }, [timeRemaining, timerStarted, biddingClosed, computerBid]);

  // Handle User's Bid
  const handleUserBid = () => {
    if (user.role === 'admin') {
      setShowAdminMessage(true);
      return;
    }

    if (timerStarted && !biddingClosed) {
      const newBid = currentBid + 10000; // Increase bid by $10,000
      setCurrentBid(newBid);
      setComputerBid((prevBid) => Math.max(prevBid, newBid)); // Ensure computer bid is at least as high as user bid
    }
  };

  // Determine Winner after Auction Ends
  const determineWinner = () => {
    // For simplicity, assume the last bid placed before the timer expired is the winning bid
    // For a more complex scenario, you could track bid timestamps

    if (currentBid > computerBid) { // Adjust based on the bidding logic
      setWinner('user'); // Simplified assumption: user wins if currentBid > computerBid
    } else {
      setWinner('computer');
    }
  };

  // Function to add product to cart (implement according to your cart logic)
  const addToCart = (product) => {
    // Example implementation using localStorage (replace with your actual cart logic)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    // Optionally, you can navigate to the cart page or show a confirmation
  };

  // Format Time in HH:MM:SS
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Reset Timer and Bidding State
  const resetAuction = () => {
    setTimerStarted(false);
    setTimeRemaining(null);
    setBiddingClosed(false);
    setWinner(null);
    setCurrentBid(10000); // Reset bid to starting amount
    setComputerBid(10000); // Reset computer bid to starting amount
    setShowAdminMessage(false);
  };

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen w-full'>
        <img src='/images/loading.gif' alt="Loading..." className='w-16 h-16' />
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 py-12 px-4 sm:px-6 lg:px-8'>
      {product ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden'
        >
          {/* Product Information */}
          <div className='lg:flex'>
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className='lg:w-1/2'
            >
              <img
                src={product.imageUrl}
                alt={product.make}
                className='object-cover w-full h-96 vintage-filter'
              />
            </motion.div>
            <motion.div
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className='p-8 lg:w-1/2'
            >
              <h1 className='text-4xl font-bold text-gray-800 mb-4'>{product.make} {product.model}</h1>
              <p className='text-gray-600 mb-4'>{product.description}</p>
              <div className='flex items-center mb-4'>
                <span className='text-2xl font-semibold text-gray-900 mr-4'>${product.price}</span>
                <span className='text-sm text-gray-500'>Year: {product.year}</span>
              </div>
            </motion.div>
          </div>

          {/* Start Timer Button */}
          {!timerStarted && !biddingClosed && (
            <div className="text-center mb-6">
              <button
                onClick={() => {
                  setTimerStarted(true);
                  setTimeRemaining(30); // Start the 30-second countdown
                }}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg mb-4 hover:bg-blue-600 transition-colors duration-300"
              >
                Start Timer
              </button>
            </div>
          )}

          {/* Auction Timer */}
          {timerStarted && !biddingClosed && (
            <div className="flex justify-center items-center mb-6">
              <FontAwesomeIcon icon={faClock} className="text-2xl mr-3 text-gray-600" />
              <motion.div
                className="text-2xl font-semibold"
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
              >
                Time Remaining: {formatTime(timeRemaining)}
              </motion.div>
            </div>
          )}

          {/* Bidding Closed Animation */}
          {biddingClosed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center text-2xl font-bold text-red-500 mb-6"
            >
              Bidding Closed!
            </motion.div>
          )}

          {/* Display Winner */}
          {winner && (
            <div className='text-center mb-6'>
              <div className='text-3xl font-semibold'>
                {winner === 'user' ? 'Congratulations! You Won!' : 'Computer Won! Better Luck Next Time!'}
              </div>
            </div>
          )}

          {/* User Bid Button */}
          {!biddingClosed && (
            <div className='text-center mb-6'>
              <button
                onClick={handleUserBid}
                className='bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300'
              >
                Place Bid
              </button>
            </div>
          )}

          {/* Admin Restriction Message */}
          {showAdminMessage && (
            <div className='text-center text-xl text-red-500 mb-6'>
              Admins are not allowed to bid. Please contact support.
            </div>
          )}

          {/* Auction Details */}
          <div className='text-center'>
            <div className='text-xl font-bold mb-4'>Current Bid: ${currentBid}</div>
            <div className='text-lg mb-4'>
              <FontAwesomeIcon icon={faDollarSign} className="mr-2 text-gray-600" />
              Computer's Current Bid: ${computerBid}
            </div>
          </div>

          {/* Add to Cart */}
          <div className='text-center mb-6'>
            <button
              onClick={() => addToCart(product)}
              className='bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300'
            >
              Add to Cart
            </button>
          </div>

          {/* Reset Auction Button */}
          <div className='text-center'>
            <button
              onClick={resetAuction}
              className='bg-red-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-300'
            >
              Reset Auction
            </button>
          </div>
        </motion.div>
      ) : (
        <div className='text-center text-xl text-gray-800'>
          {error || 'Product not found.'}
        </div>
      )}
    </div>
  );
};

export default AuctionPage;


