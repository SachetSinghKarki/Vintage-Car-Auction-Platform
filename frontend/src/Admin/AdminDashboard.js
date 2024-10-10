// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion'; // For animations
// import { Outlet } from 'react-router-dom';
// const AdminDashboard = () => {
//     return (
//         <div className="flex h-screen bg-gray-100">
//           {/* Sidebar */}
//           <aside className="w-64 bg-gray-800 text-white shadow-md">
//             <div className="p-6">
//               <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
//               <ul className="space-y-4">
//                 <li>
//                   <Link
//                     to="/admin/add-product"
//                     className="block p-3 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition-transform transform hover:scale-105"
//                     aria-label="Add Product"
//                   >
//                     Add Product
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/admin/update-product"
//                     className="block p-3 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition-transform transform hover:scale-105"
//                     aria-label="Update Product"
//                   >
//                     Update Product
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </aside>
    
//           {/* Main Content */}
//           <main className="flex-grow p-8">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white rounded-lg shadow-lg p-6"
//             >
//               <h2 className="text-3xl font-bold mb-4">Welcome, Admin!</h2>
//               <p className="text-gray-600 mb-6">Manage your products efficiently using the options below.</p>
    
//               {/* Add Product Section */}
//               <div className="bg-teal-500 text-white rounded-lg p-6 mb-6 shadow-lg">
//                 <h3 className="text-2xl font-semibold mb-4">Add New Product</h3>
//                 <p>Click the button below to add a new product to the inventory.</p>
//                 <Link
//                   to="/admin/add-product"
//                   className="mt-4 inline-block bg-teal-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-700 transition-transform transform hover:scale-105"
//                   aria-label="Add New Product"
//                 >
//                   Add Product
//                 </Link>
//               </div>
    
//               {/* Update Product Section */}
//               <div className="bg-blue-500 text-white rounded-lg p-6 shadow-lg">
//                 <h3 className="text-2xl font-semibold mb-4">Update Existing Product</h3>
//                 <p>Click the button below to update details of an existing product.</p>
//                 <Link
//                   to="/admin/update-product"
//                   className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
//                   aria-label="Update Existing Product"
//                 >
//                   Update Product
//                 </Link>
//               </div>
//             </motion.div>
//           </main>
//         </div>
//       );
// };

// export default AdminDashboard;

// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { Outlet, useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const user = useSelector((state)=> state.Auth.user)
//   const navigate = useNavigate()

//   console.log(user)
//   console.log('AdminDashboard rendered');

//   useEffect (()=> {
//     if(!user || user.role !== 'admin') {
//       navigate('/login')
//     }
//   },[user])
//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <Outlet />
//     </div>
//   );
// };



// export default AdminDashboard;

// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { Outlet, useNavigate, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faEdit, faTrash, faUsers } from '@fortawesome/free-solid-svg-icons';

// const AdminDashboard = () => {
//   const user = useSelector((state) => state.Auth.user);
//   const navigate = useNavigate();

//   // Check if the user is an admin, if not, redirect to login
//   useEffect(() => {
//     if (!user || user.role !== 'admin') {
//       navigate('/login');
//     }
//   }, [user, navigate]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <motion.div
//         className="bg-white shadow-md rounded-lg p-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-3xl font-serif text-center mb-6 text-gray-800">Admin Dashboard</h1>

//         {/* Admin Options */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           {/* Add Product */}
//           <Link to="/admin/add-product">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-500 text-white px-6 py-4 rounded-lg shadow hover:bg-blue-600 transition-all cursor-pointer"
//             >
//               <FontAwesomeIcon icon={faPlus} className="mr-3" />
//               Add Product
//             </motion.div>
//           </Link>

//           {/* Update Product */}
//           <Link to="/admin/update-product/:id">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-yellow-500 text-white px-6 py-4 rounded-lg shadow hover:bg-yellow-600 transition-all cursor-pointer"
//             >
//               <FontAwesomeIcon icon={faEdit} className="mr-3" />
//               Update Product
//             </motion.div>
//           </Link>

//           {/* Delete Product */}
//           <Link to="/admin/delete-product/:id">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-red-500 text-white px-6 py-4 rounded-lg shadow hover:bg-red-600 transition-all cursor-pointer"
//             >
//               <FontAwesomeIcon icon={faTrash} className="mr-3" />
//               Delete Product
//             </motion.div>
//           </Link>

//           {/* View Users */}
//           <Link to="/admin/view-users">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-green-500 text-white px-6 py-4 rounded-lg shadow hover:bg-green-600 transition-all cursor-pointer"
//             >
//               <FontAwesomeIcon icon={faUsers} className="mr-3" />
//               View Users
//             </motion.div>
//           </Link>

//           {/* Delete Users */}
//           <Link to="/admin/delete-user">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-indigo-500 text-white px-6 py-4 rounded-lg shadow hover:bg-indigo-600 transition-all cursor-pointer"
//             >
//               <FontAwesomeIcon icon={faTrash} className="mr-3" />
//               Delete User
//             </motion.div>
//           </Link>
//         </motion.div>

//         {/* This is where nested routes will be rendered */}
//         <div className="mt-10">
//           <Outlet />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faUsers } from '@fortawesome/free-solid-svg-icons';
// import robotImage from '../Images/Carrobo.jpg'; // Adjust the path and image name accordingly
import robotImage from '../Images/Car robo.jpg'

const AdminDashboard = () => {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(true);

  // Check if the user is an admin, if not, redirect to login
  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 p-8 relative">
      {/* Welcome Message Pop-up */}
      {showWelcome && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={robotImage}
              alt="Welcome Robot"
              className="w-24 h-24 mb-4 object-cover rounded-full"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Welcome to the Admin Dashboard, Mr. Sachet!
            </h2>
            <button
              onClick={() => setShowWelcome(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-all"
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}

      <motion.div
        className="bg-white shadow-xl border border-gray-300 rounded-lg p-8 relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{
          background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)', // Soft vintage background
        }}
      >
        <h1 className="text-4xl font-serif text-center mb-8 text-gray-800">
          Admin Dashboard
        </h1>

        {/* Admin Options */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Add Product */}
          <Link to="/admin/add-product">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-yellow-600 transition-all transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-3" />
              Add Product
            </motion.div>
          </Link>

          {/* Update Product */}
          <Link to="/admin/update-product/:id">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-teal-600 transition-all transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faEdit} className="mr-3" />
              Update Product
            </motion.div>
          </Link>

          {/* Delete Product */}
          <Link to="/admin/delete-product/:id">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-red-600 transition-all transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faTrash} className="mr-3" />
              Delete Product
            </motion.div>
          </Link>

          {/* View Users */}
          <Link to="/admin/view-users">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-green-600 transition-all transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-3" />
              View Users
            </motion.div>
          </Link>

          {/* Delete Users */}
          {/* <Link to="/admin/delete-user">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-500 text-white px-6 py-4 rounded-lg shadow-lg hover:bg-indigo-600 transition-all transform hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={faTrash} className="mr-3" />
              Delete User
            </motion.div>
          </Link> */}
        </motion.div>

        {/* This is where nested routes will be rendered */}
        <div className="mt-10">
          <Outlet />
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
;
