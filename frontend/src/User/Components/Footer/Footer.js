import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bold mb-4">VintageAuction</h2>
          <p className="text-sm mb-4">Your premier destination for classic cars.</p>
          <p className="text-sm">© 2024 VintageAuction. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12 mt-6 md:mt-0">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <a href="/" className="text-gray-400 hover:text-white mb-2 transition duration-300">Home</a>
            <a href="/auctions" className="text-gray-400 hover:text-white mb-2 transition duration-300">Auctions</a>
            <a href="/about" className="text-gray-400 hover:text-white mb-2 transition duration-300">About</a>
            <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
          </div>
          <div className="flex flex-col items-center md:items-start mt-6 md:mt-0">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2a6 6 0 00-6 6v1H8v2h4v6h4v-6h4l1-2h-5V8a2 2 0 012-2h2V4h-2a6 6 0 00-6-6z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 01-12 0 6 6 0 0112 0zM5.29 14.29a7.5 7.5 0 0113.42 0L12 21.42l-6.71-7.13z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2a10 10 0 00-10 10v6a10 10 0 0010 10h6a10 10 0 0010-10v-6a10 10 0 00-10-10h-6z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
