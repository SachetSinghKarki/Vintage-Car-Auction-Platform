
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// const ViewUser = () => {
//   const [users, setUsers] = useState([]);

//   // Fetch users from the API
//   const getUsers = async () => {
//     try {
//       const response = await axios.get('/api/admin/users'); // Ensure the API endpoint matches your backend route
//       if (response.status === 200) {
//         setUsers(response.data.users);
//       }
//     } catch (err) {
//       console.error('Error fetching users:', err);
//       toast.error('Failed to fetch users.');
//     }
//   };

//   useEffect(() => {
//     getUsers(); // Fetch users when the component mounts
//   }, []);

//   // Handle user deletion
//   const handleDelete = async (userId) => {
//     if (window.confirm('Are you sure you want to delete this user?')) {
//       try {
//         const response = await axios.delete(`/api/admin/users/${userId}`);
//         if (response.status === 200) {
//           toast.success('User deleted successfully.');
//           getUsers(); // Refresh user list after deletion
//         }
//       } catch (error) {
//         console.error('Error deleting user:', error);
//         toast.error('Failed to delete user. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <motion.div
//         className="bg-white shadow-md rounded-lg p-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-3xl font-serif text-center mb-6 text-gray-800">Users</h1>
//         <motion.div
//           className="overflow-x-auto"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           {users.length > 0 ? (
//             <table className="table-auto w-full">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="px-4 py-2">Name</th>
//                   <th className="px-4 py-2">Email</th>
//                   <th className="px-4 py-2">Role</th>
//                   <th className="px-4 py-2">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user) => (
//                   <motion.tr
//                     key={user._id}
//                     className="bg-white border-b hover:bg-gray-100"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <td className="px-4 py-2">{user.name}</td>
//                     <td className="px-4 py-2">{user.email}</td>
//                     <td className="px-4 py-2">{user.role}</td>
//                     <td className="px-4 py-2">
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="bg-red-500 text-white px-4 py-2 rounded-full shadow hover:bg-red-600 focus:outline-none"
//                         onClick={() => handleDelete(user._id)}
//                       >
//                         <FontAwesomeIcon icon={faTrashAlt} /> Delete
//                       </motion.button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p className="text-center text-gray-500">No users found.</p>
//           )}
//         </motion.div>
//       </motion.div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ViewUser;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ViewUser = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from the API
  const getUsers = async () => {
    try {
      const response = await axios.get('/api/admin/users'); // Ensure the API endpoint matches your backend route
      if (response.status === 200) {
        setUsers(response.data.users);
      }
    } catch (err) {
      console.error('Error fetching users:', err);
      toast.error('Failed to fetch users.');
    }
  };

  useEffect(() => {
    getUsers(); // Fetch users when the component mounts
  }, []);

  // Handle user deletion
  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        const response = await axios.delete(`/api/admin/users/${userId}`);
        if (response.status === 200) {
          toast.success('User deleted successfully.');
          getUsers(); // Refresh user list after deletion
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        toast.error('Failed to delete user. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 p-8">
      <motion.div
        className="bg-white shadow-xl rounded-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl font-serif text-center mb-8 text-gray-800"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          User Management
        </motion.h1>
        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {users.length > 0 ? (
            <table className="table-auto w-full border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Email</th>
                  <th className="px-6 py-4 text-left">Role</th>
                  <th className="px-6 py-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <motion.tr
                    key={user._id}
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-800">{user.name}</td>
                    <td className="px-6 py-4 text-gray-600">{user.email}</td>
                    <td className="px-6 py-4 text-gray-600">{user.role}</td>
                    <td className="px-6 py-4">
                      <motion.button
                        whileHover={{ scale: 1.1, boxShadow: "0 4px 15px rgba(255, 0, 0, 0.4)" }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 transition duration-200 focus:outline-none"
                        onClick={() => handleDelete(user._id)}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} className="mr-1" /> Delete
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500 mt-4">No users found.</p>
          )}
        </motion.div>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default ViewUser;
