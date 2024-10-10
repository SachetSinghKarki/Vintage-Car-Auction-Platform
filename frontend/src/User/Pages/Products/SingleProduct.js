
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom'; // Import useParams for URL params
// import NotFound from '../NotFound';
// import AIBidButton from '../../Components/AIBidButton';

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

//   // if (loading) return (
//   //   <div className='flex items-center justify-center h-screen w-full bg-gray-200'>
//   //     <img src='/images/loading.gif' alt="Loading..." className='w-16 h-16' />
//   //   </div>
//   // );
//   if (loading) return    <div className='flex items-center justify-center h-screen w-full'>
//    <img src='/images/loading.gif' alt="Loading..." className='contain' />
//   </div>
  


//   return (
//     <>
//       {error ? (
//         <NotFound />
//       ) : product ? (
//         <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
//           <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
//             <div className='lg:flex'>
//               <div className='lg:w-1/2'>
//                 <img
//                   src={product.imageUrl}
//                   alt={product.make}
//                   className='object-cover w-full h-96'
//                 />
//               </div>
//               <div className='p-8 lg:w-1/2'>
//                 <h1 className='text-4xl font-bold text-gray-800 mb-4'>{product.make} {product.model}</h1>
//                 <p className='text-gray-600 mb-4'>{product.description}</p>
//                 <div className='flex items-center mb-4'>
//                   <span className='text-2xl font-semibold text-gray-900 mr-4'>${product.price}</span>
//                   <span className='text-sm text-gray-500'>Year: {product.year}</span>
//                 </div>
//                 <button
//                   onClick={() => window.history.back()}
//                   className='bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
//                 >
//                   Back to Listings
//                 </button>
//               </div>
//             </div>
//           </div>
//           <AIBidButton/>
//         </div>
//       ) : (
//         <div className='flex items-center justify-center h-screen w-full'>
//           <img src='/images/loading.gif' alt="Loading..." className='w-16 h-16' />
//         </div>
//       )}
//     </>
//   );
// };

// export default SingleProduct;

// SingleProduct.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NotFound from '../NotFound';
import AIBidButton from '../../Components/AIBidButton';

const SingleProduct = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return (
    <div className='flex items-center justify-center h-screen w-full'>
      <img src='/images/loading.gif' alt="Loading..." className='contain' />
    </div>
  );

  return (
    <>
      {error ? (
        <NotFound />
      ) : product ? (
        <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
            <div className='lg:flex'>
              <div className='lg:w-1/2'>
                <img
                  src={product.imageUrl}
                  alt={product.make}
                  className='object-cover w-full h-96'
                />
              </div>
              <div className='p-8 lg:w-1/2'>
                <h1 className='text-4xl font-bold text-gray-800 mb-4'>{product.make} {product.model}</h1>
                <p className='text-gray-600 mb-4'>{product.description}</p>
                <div className='flex items-center mb-4'>
                  <span className='text-2xl font-semibold text-gray-900 mr-4'>${product.price}</span>
                  <span className='text-sm text-gray-500'>Year: {product.year}</span>
                </div>
                <button
                  onClick={() => window.history.back()}
                  className='bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300'
                >
                  Back to Listings
                </button>
              </div>
            </div>
          </div>
          <AIBidButton carId={id} />
        </div>
      ) : (
        <div className='flex items-center justify-center h-screen w-full'>
          <img src='/images/loading.gif' alt="Loading..." className='w-16 h-16' />
        </div>
      )}
    </>
  );
};

export default SingleProduct;
