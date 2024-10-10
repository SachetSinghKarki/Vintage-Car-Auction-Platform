import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Importing an icon from react-icons

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform transform ${isVisible ? 'translate-y-0' : 'translate-y-full'} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 animate-bounce`}
      style={{ transition: 'transform 0.3s ease-in-out' }}
    >
      <FaArrowUp className='text-2xl' />
    </button>
  );
};

export default ScrollToTopButton;
