// // import React, { useEffect } from 'react'
// // import { get } from '../../Services/ApiEndpoint'
// // import { Link } from 'react-router-dom';
// // import { motion } from 'framer-motion'; // For animations

// // const Admin = () => {

// //   useEffect(()=> {
// //     const GetUsers = async () => {
// //       try {
// //         const request = await get('/api/admin/getuser')
// //         const response = request.data
// //         console.log(response)
// //       } catch (err) {
// //          console.log(err)
// //       }
// //     }
// //     GetUsers()
    
// //   },[])

// //  return (
// //   <div>Adminetertrt</div>
// //  )
// // }

// // export default Admin

// // const Admin = () => {
// //   useEffect(() => {
// //     const GetUsers = async () => {
// //       try {
// //         const request = await get('/api/admin/getuser');
// //         const response = request.data;
// //         console.log(response);
// //       } catch (err) {
// //         console.log(err);
// //       }
// //     };
// //     GetUsers();
// //   }, []);
 
    
// //   return <div>Admin Content Loaded</div>; // Add more content here to check if it renders
// // };

// // export default Admin;

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCog, faUsers, faChartLine, faUserShield } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// // import Security from '../Security';

// const Admin = () => {
//   const [loading, setLoading] = useState(false);

//   // Simulating data fetch with a timeout
//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 p-8">
//       <motion.div
//         className="bg-white shadow-xl border border-gray-300 rounded-lg p-8"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7, ease: 'easeOut' }}
//         style={{
//           background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)', // Soft vintage background
//         }}
//       >
//         <motion.h1
//           className="text-4xl font-serif text-center mb-8 text-gray-800"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Admin Privileges
//         </motion.h1>

//         {/* Admin Features Section */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Settings */}
//           <motion.div
//             className="bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-gray-700 transition-all transform hover:-translate-y-1"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FontAwesomeIcon icon={faCog} className="text-3xl mb-2" />
//             <h2 className="text-xl font-semibold">Settings</h2>
//             <p className="mt-2">Manage system settings and preferences.</p>
//           </motion.div>

//           {/* Users */}
//           <motion.div
//             className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-green-400 transition-all transform hover:-translate-y-1"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FontAwesomeIcon icon={faUsers} className="text-3xl mb-2" />
//             <h2 className="text-xl font-semibold">Users</h2>
//             <p className="mt-2">View and manage all users.</p>
//           </motion.div>

//           {/* Analytics */}
//           <Link to="/admin/analytics"></Link>
//           <motion.div
//             className="bg-blue-500 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-blue-400 transition-all transform hover:-translate-y-1"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FontAwesomeIcon icon={faChartLine} className="text-3xl mb-2" />
//             <h2 className="text-xl font-semibold">Analytics</h2>
//             <p className="mt-2">View detailed analytics and reports.</p>
//           </motion.div>

//           {/* Security */}
//           <Link to="/admin/security">
//             <motion.div
//               className="bg-purple-500 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-purple-400 transition-all transform hover:-translate-y-1"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <FontAwesomeIcon icon={faUserShield} className="text-3xl mb-2" />
//               <h2 className="text-xl font-semibold">Security</h2>
//               <p className="mt-2">Manage and enhance security settings.</p>
//             </motion.div>
//           </Link>
//         </motion.div>

//         {loading && (
//           <motion.p
//             className="text-center text-lg font-semibold mt-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Loading features...
//           </motion.p>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default Admin;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUsers, faChartLine, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [loading, setLoading] = useState(false);

  // Simulating data fetch with a timeout
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 p-8">
      <motion.div
        className="bg-white shadow-xl border border-gray-300 rounded-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{
          background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)', // Soft vintage background
        }}
      >
        <motion.h1
          className="text-4xl font-serif text-center mb-8 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Admin Privileges
        </motion.h1>

        {/* Admin Features Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Settings */}
          <Link to="/admin/settings">
            <motion.div
              className="bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-gray-700 transition-all transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faCog} className="text-3xl mb-2" />
              <h2 className="text-xl font-semibold">Settings</h2>
              <p className="mt-2">Manage system settings and preferences.</p>
            </motion.div>
          </Link>

          {/* Users */}
          <Link to="/admin/users">
            <motion.div
              className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-green-400 transition-all transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faUsers} className="text-3xl mb-2" />
              <h2 className="text-xl font-semibold">Users</h2>
              <p className="mt-2">View and manage all users.</p>
            </motion.div>
          </Link>

          {/* Analytics */}
          <Link to="/admin/analytics">
            <motion.div
              className="bg-blue-500 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-blue-400 transition-all transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faChartLine} className="text-3xl mb-2" />
              <h2 className="text-xl font-semibold">Analytics</h2>
              <p className="mt-2">View detailed analytics and reports.</p>
            </motion.div>
          </Link>

          {/* Security */}
          <Link to="/admin/security">
            <motion.div
              className="bg-purple-500 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-purple-400 transition-all transform hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faUserShield} className="text-3xl mb-2" />
              <h2 className="text-xl font-semibold">Security</h2>
              <p className="mt-2">Manage and enhance security settings.</p>
            </motion.div>
          </Link>
        </motion.div>

        {loading && (
          <motion.p
            className="text-center text-lg font-semibold mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Loading features...
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Admin;
