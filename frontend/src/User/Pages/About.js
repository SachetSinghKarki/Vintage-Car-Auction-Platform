import React from 'react';
import { FaBuilding, FaUsers, FaBullhorn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className='bg-gray-50 min-h-screen p-8'>
      {/* Hero Section */}
      <section className='text-center mb-16'>
        <motion.h1 
          className='text-5xl font-extrabold text-gray-800 mb-6'
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          About Antiquity Auto Auctions
        </motion.h1>
        <motion.p 
          className='text-lg text-gray-600 max-w-2xl mx-auto'
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover our journey, mission, and the dedicated team behind your favorite classic car auctions. 
          At Antiquity Auto Auctions, we are committed to offering a premier platform where vintage car enthusiasts 
          and collectors can connect and indulge in their passion for timeless automobiles.
        </motion.p>
      </section>

      {/* Company Overview Section */}
      <section className='mb-16'>
        <div className='container mx-auto px-4'>
          <motion.h2 
            className='text-4xl font-semibold text-gray-800 mb-8'
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.h2>
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <motion.p 
              className='text-gray-700 text-lg leading-relaxed'
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At Antiquity Auto Auctions, we celebrate the art of classic automobiles. Our platform 
              was founded with a vision to bridge the gap between classic car enthusiasts and those 
              seeking to own a piece of automotive history. We curate a selection of vintage vehicles 
              that are not only beautiful but also rich in history. Each auction is designed to be a 
              seamless, transparent, and delightful experience, ensuring that every transaction is 
              handled with the utmost care and professionalism.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className='bg-gray-200 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <motion.h2 
            className='text-4xl font-semibold text-gray-800 mb-8'
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Our Mission
          </motion.h2>
          <motion.p 
            className='text-lg text-gray-600 max-w-3xl mx-auto'
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our mission is to preserve and celebrate the rich history of classic automobiles by 
            offering a platform where these cherished vehicles can find new homes. We are dedicated 
            to providing an exceptional auction experience characterized by transparency, integrity, 
            and enthusiasm. Our goal is to connect passionate collectors with iconic cars that tell a 
            story of automotive excellence and innovation.
          </motion.p>
        </div>
      </section>

      {/* Team Section */}
      <section className='mb-16'>
        <div className='container mx-auto px-4'>
          <motion.h2 
            className='text-4xl font-semibold text-gray-800 mb-8'
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Meet the Team
          </motion.h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <motion.div 
              className='bg-white p-8 rounded-lg shadow-lg text-center'
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FaBuilding className='text-5xl text-blue-700 mb-4 mx-auto' />
              <h3 className='text-2xl font-semibold text-gray-800 mb-2'>
                Sachet Singh Karki
              </h3>
              <p className='text-gray-600'>
                Founder & CEO
              </p>
            </motion.div>
            <motion.div 
              className='bg-white p-8 rounded-lg shadow-lg text-center'
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FaUsers className='text-5xl text-blue-700 mb-4 mx-auto' />
              <h3 className='text-2xl font-semibold text-gray-800 mb-2'>
                Elon Musk
              </h3>
              <p className='text-gray-600'>
                Chief Operations Officer
              </p>
            </motion.div>
            <motion.div 
              className='bg-white p-8 rounded-lg shadow-lg text-center'
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <FaBullhorn className='text-5xl text-blue-700 mb-4 mx-auto' />
              <h3 className='text-2xl font-semibold text-gray-800 mb-2'>
                Bill Gates
              </h3>
              <p className='text-gray-600'>
                Head of Marketing
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='bg-gray-900 py-16 text-white'>
        <div className='container mx-auto px-4'>
          <motion.h2 
            className='text-4xl font-semibold mb-8 text-center'
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className='text-lg mb-8 max-w-2xl mx-auto text-center'
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are here to assist you with any questions or inquiries you may have. Feel free to reach out 
            to us for more information about our services, or if you have any specific questions about 
            classic cars or the auction process. We look forward to hearing from you!
          </motion.p>
          <div className='flex justify-center'>
            <a 
              href='mailto:info@antiquityautoauctions.com' 
              className='bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors duration-300 flex items-center'
            >
              <span className='mr-3'>📧</span> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
