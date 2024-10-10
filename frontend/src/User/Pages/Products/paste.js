// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom'; // Import useParams for URL params
// import NotFound from '../NotFound'

// const SingleProduct = () => {
//   const { id } = useParams(); // Get the product ID from the URL
//   const [product, setProduct] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`/api/product/${id}`); 
//         console.log('Response data:', response);
//         setProduct(response.data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (error) return <NotFound/>;
//   if (!product) return <div><NotFound/></div>;
//   if (loading) return <div><img src='/logo192.png' alt="Loading..." /></div>;

//   return (
//     <div className='text-blue-300 bg-gray-600 h-full p-4'>
//       <h1 className='text-4xl font-bold mb-6 text-white'>Product Details</h1>
//       <div className='bg-white p-4 rounded-lg shadow-md flex items-center space-x-4'>
//         <img
//           src={product.imageUrl}
//           alt={product.make}
//           className='w-48 h-48 object-cover rounded-lg'
//         />
//         <div>
//           <h2 className='text-2xl font-semibold text-gray-800'>{product.make} - {product.model}</h2>
//           <p className='text-gray-600'>{product.description}</p>
//           <p className='text-lg font-bold text-gray-900'>${product.price}</p>
//           <p className='text-sm text-gray-500'>Year: {product.year}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;
<div className="flex space-x-4 items-center">
{user ? (
  <>
    {/* Show user initials if logged in */}
    <span className="text-lg font-semibold">
{user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1)}!
</span>

    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-transform transform hover:scale-105 shadow-lg"
    >
      Logout
    </button>
  </>
) : (
  <>
    <Link
      to="/login"
      className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md font-medium transition-transform transform hover:scale-105 shadow-lg"
    >
      Login
    </Link>
    <Link
      to="/register"
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-transform transform hover:scale-105 shadow-lg"
    >
      Register
    </Link>
  </>
)}
</div>