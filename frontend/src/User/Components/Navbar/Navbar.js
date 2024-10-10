// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-900 text-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <div className="flex items-center">
//           <img
//             src="/logo192.png"
//             alt="Logo"
//             className="h-8 mr-4 animate-spin" // Apply Tailwind's animate-spin class
//           />
//           <Link to="/" className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text shadow-lg transition-transform transform hover:scale-105 hover:underline">
//             Antiquity Auto Auctions
//           </Link>
//         </div>
//         <div className="hidden md:flex space-x-4">
//           <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
//           <Link to="/auction" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Auctions</Link>
//           <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
//           <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
//         </div>
//         <div className="md:hidden flex items-center">
//           <button className="text-white focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>
//         <div className="flex space-x-4">
//           <Link to="/login" className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-transform transform hover:scale-105 shadow-lg">Login</Link>
//           <Link to="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-transform transform hover:scale-105 shadow-lg">Register</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';
// import { post } from '../../../Services/ApiEndpoint';
// import { jwtDecode } from 'jwt-decode';


// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Local state to track login status
//   const [userInitial, setUserInitial] = useState(''); // To store user's initial for welcome message
//   const navigate = useNavigate();
//   const dispatch = useDispatch(); // Redux for global state management
  
//   // Check login status and decode token to get user info
//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const token = localStorage.getItem('authToken');
//       if (token) {
//         setIsLoggedIn(true);
//         const decodedToken = jwtDecode(token); // Decoding JWT token
//         if (decodedToken && decodedToken.email) {
//           const initial = decodedToken.email.charAt(0).toUpperCase(); // Get the first letter of the email for initials
//           setUserInitial(initial);
//         }
//       } else {
//         setIsLoggedIn(false);
//       }
//     };
    
//     checkLoginStatus(); // Check when the component mounts
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const request = await post('/api/auth/logout'); // Adjust to your logout API endpoint
//       const response = request.data;

//       if (request.status === 200) {
//         toast.success('Logout successful');
//         localStorage.removeItem('authToken'); // Remove token on logout
//         setIsLoggedIn(false); // Update state to reflect logout
//         navigate('/login'); // Redirect to login page
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error('Error logging out');
//     }
//   };

//   return (
//     <nav className="bg-gray-900 text-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <div className="flex items-center">
//           <img
//             src="/logo192.png"
//             alt="Logo"
//             className="h-8 mr-4 animate-spin" // Apply Tailwind's animate-spin class
//           />
//           <Link
//             to="/"
//             className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text shadow-lg transition-transform transform hover:scale-105 hover:underline"
//           >
//             Antiquity Auto Auctions
//           </Link>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex space-x-4">
//           <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//             Home
//           </Link>
//           <Link to="/auction" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//             Auctions
//           </Link>
//           <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//             About
//           </Link>
//           <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//             Contact
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button className="text-white focus:outline-none">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>

//         {/* Welcome Message and Login/Register or Logout Button */}
//         <div className="flex space-x-4 items-center">
//           {isLoggedIn ? (
//             <>
//               {/* Welcome message with user initial */}
//               <span className="text-lg font-semibold">
//                 Welcome, {userInitial}!
//               </span>
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-transform transform hover:scale-105 shadow-lg"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-transform transform hover:scale-105 shadow-lg"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-transform transform hover:scale-105 shadow-lg"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { post } from '../../../Services/ApiEndpoint'; // Adjust the path if needed
import {clearUser} from '../../../Redux/AuthSlice' // Adjust the path if needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const user = useSelector((state) => state.Auth.user); // Retrieve user from Redux state
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = async () => {
    try {
      const request = await post('/api/auth/logout'); // Adjust API endpoint if needed

      if (request.status === 200) {
        toast.success('Logout successful');
        dispatch(clearUser()); // Clear the user from Redux store
        localStorage.removeItem('authToken'); // Remove auth token from localStorage
        navigate('/login'); // Redirect to login page
      }
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Error logging out');
    }
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo192.png"
            alt="Logo"
            className="h-8 mr-4 animate-spin"
          />
          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text shadow-lg transition-transform transform hover:scale-105 hover:underline"
          >
            Antiquity Auto Auctions
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link to="/auction" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Auctions
          </Link>
          <Link to="/buys" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
           Buys
          </Link>
          <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            About
          </Link>
          <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* User Actions (Login/Logout) */}
        <div className="flex items-center">
  {user ? (
    <>
      {/* Animated User Profile */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg animate-bounce cursor-pointer">
          {user.email.split('@')[0].charAt(0).toUpperCase()}
        </div>
        <span className="text-lg font-semibold transition-transform transform hover:scale-105 cursor-pointer">
          {user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1)}!
        </span>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-transform transform hover:scale-105 shadow-lg ml-10"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link
        to="/login"
        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-transform transform hover:scale-105 shadow-lg mr-10"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-transform transform hover:scale-105 shadow-lg"
      >
        Register
      </Link>
    </>
  )}
</div>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4">
          <Link
            to="/"
            className="block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/auction"
            className="block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={toggleMenu}
          >
            Auctions
          </Link>
          <Link
            to="/about"
            className="block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
