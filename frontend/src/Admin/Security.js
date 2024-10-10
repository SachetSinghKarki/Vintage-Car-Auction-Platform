import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLock, faEye, faFingerprint } from '@fortawesome/free-solid-svg-icons';

const Security = () => {
  const [status, setStatus] = useState({
    firewall: 'Active',
    encryption: 'Secure',
    monitoring: 'Enabled',
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8">
      {/* Header Section */}
      <motion.h1
        className="text-4xl font-bold text-center text-gray-200 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Security Management Panel
      </motion.h1>

      {/* Security Panels */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Firewall Status */}
        <motion.div
          className="bg-gray-700 text-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform"
          whileHover={{ rotate: [0, 2, -2, 0] }}
        >
          <FontAwesomeIcon icon={faShieldAlt} className="text-5xl text-green-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Firewall Status</h2>
          <p className="text-lg">{status.firewall}</p>
        </motion.div>

        {/* Encryption Status */}
        <motion.div
          className="bg-gray-700 text-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform"
          whileHover={{ rotate: [0, 2, -2, 0] }}
        >
          <FontAwesomeIcon icon={faLock} className="text-5xl text-yellow-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Encryption Level</h2>
          <p className="text-lg">{status.encryption}</p>
        </motion.div>

        {/* Monitoring Status */}
        <motion.div
          className="bg-gray-700 text-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform"
          whileHover={{ rotate: [0, 2, -2, 0] }}
        >
          <FontAwesomeIcon icon={faEye} className="text-5xl text-blue-400 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Monitoring</h2>
          <p className="text-lg">{status.monitoring}</p>
        </motion.div>
      </motion.div>

      {/* Animation Element */}
      <motion.div
        className="mt-16 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.div
          className="bg-gray-800 text-white rounded-full p-6 shadow-2xl flex items-center justify-center relative"
          style={{ width: '300px', height: '300px' }}
          animate={{ rotate: [0, 360], transition: { repeat: Infinity, duration: 6, ease: 'linear' } }}
        >
          <motion.div
            className="absolute w-full h-full rounded-full border-2 border-gray-500"
            animate={{ rotate: [0, -360], transition: { repeat: Infinity, duration: 10, ease: 'linear' } }}
          />
          <motion.div className="text-xl">Security AI System</motion.div>
        </motion.div>
      </motion.div>

      {/* AI Robot Interaction */}
      <motion.div
        className="mt-10 bg-gray-600 text-gray-200 p-8 rounded-lg shadow-lg text-center max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.h3 className="text-2xl font-bold mb-4">Security Assistant Bot</motion.h3>
        <p className="text-lg mb-6">
          "Welcome Mr. Sachet, the security system is fully operational. All essential protections are in place, including
          firewall, encryption, and real-time monitoring."
        </p>
        <button
          className="bg-green-500 px-6 py-2 rounded-full font-semibold text-white hover:bg-green-600"
          onClick={() => alert('Security Assistant Activated!')}
        >
          Okay
        </button>
      </motion.div>
    </div>
  );
};

export default Security;
