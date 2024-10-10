// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGavel, faClock } from '@fortawesome/free-solid-svg-icons';
// import './AuctionPage.css'; // Add necessary CSS here

// const AuctionPage = () => {
//   const { carId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [currentBid, setCurrentBid] = useState(1000); // Example starting bid
//   const [newBid, setNewBid] = useState('');
//   const [timeRemaining, setTimeRemaining] = useState(3600); // Example: 1 hour in seconds
//   const [showAdminMessage, setShowAdminMessage] = useState(false);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [showLoading, setShowLoading] = useState(false);

//   const user = useSelector((state) => state.Auth.user); // Fetch user details from Redux store
//   const navigate = useNavigate();

//   // Redirect to login if not authenticated
//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//     }
//   }, [user, navigate]);

//   // Fetch product by carId
//   const fetchProductAndBids = async () => {
//     try {
//       const productResponse = await axios.get(`/api/product/${carId}`);
//       setProduct(productResponse.data);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     } finally {
//       setLoading(false);
//         setShowLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProductAndBids();
//   }, [carId]);

//   // Timer logic for the auction countdown
//   useEffect(() => {
//     if (timeRemaining > 0) {
//       const timer = setInterval(() => {
//         setTimeRemaining((prevTime) => prevTime - 1);
//       }, 1000);
//       return () => clearInterval(timer);
//     }
//   }, [timeRemaining]);

//   const handleBid = () => {
//     // Admins cannot place bids
//     if (user.role === 'admin') {
//       setShowAdminMessage(true);
//       return;
//     }

//     // Check if new bid is higher than the current bid
//     if (newBid > currentBid) {
//       setCurrentBid(newBid);
//       setNewBid('');
//     } else {
//       alert('Please enter a bid higher than the current bid.');
//     }
//   };

//   // Format the time in HH:MM:SS
//   const formatTime = (seconds) => {
//     const h = Math.floor(seconds / 3600);
//     const m = Math.floor((seconds % 3600) / 60);
//     const s = seconds % 60;
//     return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
//   };

//   if (loading || showLoading) return (
//     <div className='flex items-center justify-center h-screen w-full bg-gray-800'>
//       <img src='/images/loading.gif' alt="Loading..." className='contain' />
//     </div>
//   );

//   if (error) return <div className='text-red-500 text-center'>Error: {error}</div>;

//   return (
//     <div className='min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 py-12 px-4 sm:px-6 lg:px-8'>
//       {product ? (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className='max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden'
//         >
//           <div className='lg:flex'>
//             <motion.div
//               initial={{ x: -50 }}
//               animate={{ x: 0 }}
//               transition={{ duration: 0.5 }}
//               className='lg:w-1/2'
//             >
//               <img
//                 src={product.imageUrl}
//                 alt={product.make}
//                 className='object-cover w-full h-96 vintage-filter'
//               />
//             </motion.div>
//             <motion.div
//               initial={{ x: 50 }}
//               animate={{ x: 0 }}
//               transition={{ duration: 0.5 }}
//               className='p-8 lg:w-1/2'
//             >
//               <h1 className='text-4xl font-bold text-gray-800 mb-4'>{product.make} {product.model}</h1>
//               <p className='text-gray-600 mb-4'>{product.description}</p>
//               <div className='flex items-center mb-4'>
//                 <span className='text-2xl font-semibold text-gray-900 mr-4'>${product.price}</span>
//                 <span className='text-sm text-gray-500'>Year: {product.year}</span>
//               </div>
//             </motion.div>
//           </div>

//           {/* Auction Timer */}
//           <div className="flex justify-center items-center mb-6">
//             <FontAwesomeIcon icon={faClock} className="text-2xl mr-3 text-gray-600" />
//             <motion.div
//               className="text-2xl font-semibold"
//               animate={{ opacity: [0, 1] }}
//               transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
//             >
//               Time Remaining: {formatTime(timeRemaining)}
//             </motion.div>
//           </div>

//           {/* Current Bid */}
//           <div className="text-center mb-6">
//             <h2 className="text-xl font-semibold mb-2">Current Bid: ${product.price}</h2>
//             {user && user.role !== 'admin' ? (
//               <>
//                 <input
//                   type="number"
//                   value={newBid}
//                   onChange={(e) => setNewBid(e.target.value)}
//                   className="border-2 border-gray-300 p-2 rounded-lg mb-4"
//                   placeholder="Enter your bid"
//                 />
//                 <motion.button
//                   onClick={handleBid}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg"
//                 >
//                   Place Bid
//                 </motion.button>
//               </>
//             ) : (
//               <p className="text-red-600 font-semibold">Admins cannot place bids.</p>
//             )}
//           </div>

//           {/* Show a pop-up message if the admin tries to bid */}
//           {showAdminMessage && (
//             <motion.div
//               className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <motion.div
//                 className="bg-white p-6 rounded-lg shadow-lg text-center"
//                 initial={{ y: -50 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <p className="text-xl font-semibold text-red-600">Admins cannot place bids!</p>
//                 <button
//                   onClick={() => setShowAdminMessage(false)}
//                   className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
//                 >
//                   Close
//                 </button>
//               </motion.div>
//             </motion.div>
//           )}
//         </motion.div>
//       ) : (
//         <p className="text-white text-center">Product not found.</p>
//       )}
//     </div>
//   );
// };

// export default AuctionPage;