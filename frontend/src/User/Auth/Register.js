// import React, { useState } from 'react';
// import { post } from '../../Services/ApiEndpoint';
// import { Link } from 'react-router-dom';
// import { FaUser, FaLock, FaEnvelope, FaImage } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import {toast} from 'react-hot-toast';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [fullName, setFullName] = useState('');
//   const [profilePictureURL, setProfilePictureURL] = useState('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const request = await post('/api/auth/register', { email, password, fullName, profilePictureURL });
//       const response = request.data;
//       if (request.status == 200) {
//         toast.success(response.message);
//       }
//       console.log(response);
//       alert('Registration successful!');
//       setEmail('');
//       setPassword('');
//       setFullName('');
//       setProfilePictureURL('');
   

//     } catch (error) {
//       console.log(error);
//       setError('Registration failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <motion.div
//         className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Register</h2>
//         {error && (
//           <div className="mb-4 p-3 bg-red-200 text-red-700 border border-red-300 rounded">
//             {error}
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
//             <FaUser className="text-gray-500 mx-3" />
//             <input
//               type="text"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               placeholder="Full Name"
//               className="w-full py-2 px-3 outline-none"
//               required
//             />
//           </div>
//           <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
//             <FaEnvelope className="text-gray-500 mx-3" />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               className="w-full py-2 px-3 outline-none"
//               required
//             />
//           </div>
//           <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
//             <FaLock className="text-gray-500 mx-3" />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               className="w-full py-2 px-3 outline-none"
//               required
//             />
//           </div>
//           <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
//             <FaImage className="text-gray-500 mx-3" />
//             <input
//               type="text"
//               value={profilePictureURL}
//               onChange={(e) => setProfilePictureURL(e.target.value)}
//               placeholder="Profile Picture URL (optional)"
//               className="w-full py-2 px-3 outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className={`w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
//             disabled={loading}
//           >
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//           <p className="mt-6 text-center text-gray-600">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { post } from '../../Services/ApiEndpoint';
import { FaUser, FaLock, FaEnvelope, FaImage } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [profilePictureURL, setProfilePictureURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const request = await post('/api/auth/register', { email, password, fullName, profilePictureURL });
      const response = request.data;

      if (request.status === 200) {
        toast.success(response.message);
        // Clear form
        setEmail('');
        setPassword('');
        setFullName('');
        setProfilePictureURL('');
      } else {
        toast.error(response.message || 'Registration failed.');
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
      toast.error('An error occurred during registration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Register</h2>
        {error && (
          <div className="mb-4 p-3 bg-red-200 text-red-700 border border-red-300 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
            <FaUser className="text-gray-500 mx-3" />
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="w-full py-2 px-3 outline-none"
              required
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
            <FaEnvelope className="text-gray-500 mx-3" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full py-2 px-3 outline-none"
              required
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
            <FaLock className="text-gray-500 mx-3" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full py-2 px-3 outline-none"
              required
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded-lg">
            <FaImage className="text-gray-500 mx-3" />
            <input
              type="text"
              value={profilePictureURL}
              onChange={(e) => setProfilePictureURL(e.target.value)}
              placeholder="Profile Picture URL (optional)"
              className="w-full py-2 px-3 outline-none"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
          <p className="mt-6 text-center text-gray-600">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
