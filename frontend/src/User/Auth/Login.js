// import React, { useState } from 'react';
// import { post } from '../../Services/ApiEndpoint';
// import { FaLock, FaEnvelope } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import { Link, useNavigate, useNavigation } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../Redux/AuthSlice';

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(email, password);
//     try {
//       const request = await post('/api/auth/login', { email, password });
//       const response = request.data;
//       console.log(response);
//       setEmail('');
//       setPassword('');
//       if (request.status === 200) {
//         if(response.user.role == 'admin') {
//           navigate('/admin');
//         } else if (response.user.role =='user') {
//           navigate('/');
//         }
//         toast.success(response.message);
//         dispatch(setUser(response.user)); // Corrected to setUser
//       }
//     } catch (error) {
//       console.log(error);
//       alert('Error logging in');
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
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
//         <form onSubmit={handleSubmit}>
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
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Log In
//           </button>
//           <p className="mt-6 text-center text-gray-600">
//             Not registered? <Link to={'/register'}>Register here</Link>
//           </p>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { post } from '../../Services/ApiEndpoint';
import { FaLock, FaEnvelope } from 'react-icons/fa';  
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Redux/AuthSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const request = await post('/api/auth/login', { email, password });
      const response = request.data;

      if (request.status === 200) {
        setEmail('');
        setPassword('');

        dispatch(setUser(response.user)); // Dispatch user data to Redux
        toast.success(response.message);

        // Navigate based on user role
        if (response.user.role === 'admin') {
          navigate('/admin');
        } else if (response.user.role === 'user') {
          navigate('/');
        }
      }
    } catch (error) {
      console.error(error);
      toast.error('Error logging in, please try again.');
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
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
        <form onSubmit={handleSubmit}>
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
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Log In
          </button>
          <p className="mt-6 text-center text-gray-600">
            Not registered? <Link to={'/register'}>Register here</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
