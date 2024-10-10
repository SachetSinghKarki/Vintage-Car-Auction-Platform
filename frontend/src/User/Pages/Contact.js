import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 border border-gray-300">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        
        <p className="text-lg text-gray-600 mb-8 text-center">
          Have questions or need assistance? Feel free to reach out to us!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h2>
            <p className="text-lg text-gray-600 mb-4">
              123 Classic Car Street, Vintage City, CV 45678
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Email:</strong> contact@vintagecarauctions.com
            </p>
            <p className="text-lg text-gray-600">
              <strong>Phone:</strong> +1 (234) 567-8900
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Name" 
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Email" 
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-lg font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Message" 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
