import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for Toastify
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCalendarAlt, faDollarSign, faInfoCircle, faImage } from '@fortawesome/free-solid-svg-icons';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    description: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/product', formData);
      console.log('Product added:', response.data);
      toast.success(
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCar} className="mr-2 text-green-500" /> Car added successfully!
        </div>, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      setFormData({
        make: '',
        model: '',
        year: '',
        price: '',
        description: '',
        imageUrl: '',
      });
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error(
        <div className="flex items-center">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2 text-red-500" /> Error adding car. Please try again.
        </div>, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
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
        <h1 className="text-4xl font-serif mb-8 text-gray-800">Add Vintage Car</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex items-center border border-gray-400 rounded-lg">
            <FontAwesomeIcon icon={faCar} className="text-gray-600 mx-4" />
            <input
              type="text"
              id="make"
              name="make"
              value={formData.make}
              onChange={handleChange}
              className="w-full px-4 py-3 border-0 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the car make"
              required
            />
          </div>
          <div className="flex items-center border border-gray-400 rounded-lg">
            <FontAwesomeIcon icon={faCar} className="text-gray-600 mx-4" />
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full px-4 py-3 border-0 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the car model"
              required
            />
          </div>
          <div className="flex items-center border border-gray-400 rounded-lg">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-600 mx-4" />
            <input
              type="number"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full px-4 py-3 border-0 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the year of manufacture"
              required
            />
          </div>
          <div className="flex items-center border border-gray-400 rounded-lg">
            <FontAwesomeIcon icon={faDollarSign} className="text-gray-600 mx-4" />
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-3 border-0 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the car price"
              required
            />
          </div>
          <div className="flex items-center border border-gray-400 rounded-lg">
            <FontAwesomeIcon icon={faInfoCircle} className="text-gray-600 mx-4" />
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 border-0 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a brief description of the car"
            />
          </div>
          <div className="flex items-center border border-gray-400 rounded-lg">
            <FontAwesomeIcon icon={faImage} className="text-gray-600 mx-4" />
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 border-0 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the image URL"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Add Car
            </button>
          </div>
        </form>
      </motion.div>
      {/* Add ToastContainer for displaying notifications */}
      <ToastContainer />
    </div>
  );
};

export default AddProduct;
