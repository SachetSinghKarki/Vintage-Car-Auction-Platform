import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa'; // Font Awesome icon for error

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-6">
      <motion.div
        className="flex items-center justify-center mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FaExclamationTriangle className="text-8xl text-red-500" />
      </motion.div>
      <h1 className="text-6xl font-extrabold mb-4 animate-fade-in-up">404</h1>
      <h2 className="text-3xl font-semibold mb-6 animate-fade-in-up animate-delay-200">Page Not Found</h2>
      <p className="text-lg mb-8 animate-fade-in-up animate-delay-400">Sorry, the page you’re looking for doesn’t exist.</p>
      <a 
        href="/" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
      >
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
