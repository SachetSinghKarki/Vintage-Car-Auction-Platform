import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import ScrollToTopButton from '../Components/ScrollToTopButton';
import { toast } from 'react-hot-toast';
import { post } from '../../Services/ApiEndpoint';
import { useDispatch } from 'react-redux';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [showLoading, setShowLoading] = useState(false);

  // // const handleLogout =async() => {
  // //   try {
  // //     const request = await post('/api/auth/logout')
  // //     const response = request.data

  // //     if (request.status==200) {
  // //       toast.success(response.message);
  // //       navigate('/login')
  // //     }
  // //   }
  // //     catch (error) {
  // //       console.error(error);
  // //       alert('Error logging out');
  // //     }
  //   }

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(true), 7000);
    
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/product');
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        setShowLoading(false);
        clearTimeout(timer);
      }
    };

    fetchData();

    return () => clearTimeout(timer);
  }, []);

  if (loading || showLoading) return (
    <div className='flex items-center justify-center h-screen w-full bg-gray-800'>
      <img src='/images/loading.gif' alt="Loading..." className='contain' />
    </div>
  );

  if (error) return <div className='text-red-500 text-center'>Error: {error}</div>;

  return (
    <div className='bg-gray-800 text-gray-100 p-6'>
      {/* <button className='logout-button' onClick={handleLogout}>Logout</button> */}
      <h1 className='text-4xl font-bold mb-8 text-center'>
        <span className='block'>Welcome to the epitome of classic car auctions.</span>
        <span className='block mt-2 text-yellow-400'>Welcome to Antiquity Auto Auctions.</span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {data.map((item) => (
          <Link to={`/product/${item._id}`} key={item._id} className='block'>
            <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
              <img
                src={item.imageUrl}
                alt={item.make}
                className='w-full h-48 object-cover rounded-lg mb-4'
              />
              <div>
                <h2 className='text-xl font-semibold text-gray-800'>{item.make} - {item.model}</h2>
                <p className='text-gray-600 mb-2'>
                  {item.description.length > 100
                    ? `${item.description.substring(0, 100)}...`
                    : item.description}
                </p>
                {item.description.length > 100 && (
                  <button className='text-blue-600 hover:underline'>
                    Read More
                  </button>
                )}
                <p className='text-lg font-bold text-gray-900 mt-2'>${item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex justify-center mt-8'>
        {/* Optionally, add more content here */}
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
