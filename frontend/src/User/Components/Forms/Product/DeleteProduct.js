import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCar, faIdCard } from '@fortawesome/free-solid-svg-icons';

const DeleteProduct = () => {
  const [productId, setProductId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!productId) {
      toast.error(
        <div className="flex items-center">
          <FontAwesomeIcon icon={faIdCard} className="mr-2 text-red-500" /> Please enter a product ID!
        </div>,
        {
          position: 'top-center',
          autoClose: 3000,
        }
      );
      return;
    }

    try {
      // Assuming your backend accepts DELETE requests to /api/product/:id
      const response = await axios.delete(`/api/product/${productId}`);
      console.log('Product deleted:', response.data);

      toast.success(
        <div className="flex items-center">
          <FontAwesomeIcon icon={faTrashAlt} className="mr-2 text-green-500" /> Product deleted successfully!
        </div>,
        {
          position: 'top-center',
          autoClose: 3000,
        }
      );

      setProductId(''); // Clear the input after successful deletion
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error(
        <div className="flex items-center">
          <FontAwesomeIcon icon={faTrashAlt} className="mr-2 text-red-500" /> Error deleting product. Try again!
        </div>,
        {
          position: 'top-center',
          autoClose: 3000,
        }
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg border border-gray-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-serif mb-8 text-gray-800">Delete Car</h1>
        <form className="space-y-6" onSubmit={handleDelete}>
          <div className="flex items-center border border-gray-400 rounded-lg">
            <FontAwesomeIcon icon={faCar} className="text-gray-600 mx-4" />
            <input
              type="text"
              id="productId"
              name="productId"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
              className="w-full px-4 py-3 border-0 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter the Product ID or Name"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
            >
              Delete Car
            </button>
          </div>
        </form>
      </motion.div>
      {/* Add ToastContainer for displaying notifications */}
      <ToastContainer />
    </div>
  );
};

export default DeleteProduct;
