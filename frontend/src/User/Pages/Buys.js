import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { getUserPurchases } from '../../Services/ApiEndpoint';
 

const Buys = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();
  const auth = useSelector((state) => state.Auth.user); // Get the logged-in user from Redux

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(true), 7000);
    if (!auth) {
      toast.error('You need to be logged in to view your purchases!');
      navigate('/login');
      return;
    }

    const fetchPurchases = async () => {
      try {
        const data = await getUserPurchases();
        setPurchases(data);
      } catch (error) {
        toast.error('Error fetching your purchases');
      } finally {
        setLoading(false);
        setShowLoading(false);
        clearTimeout(timer);
      }
    };

    fetchPurchases();
  }, [auth, navigate]);

  if (loading || showLoading) return (
    <div className='flex items-center justify-center h-screen w-full bg-gray-800'>
      <img src='/images/loading.gif' alt="Loading..." className='contain' />
    </div>
  );
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-teal-600">
        Your Purchases
      </h1>
      {purchases.length === 0 ? (
        <p className="text-lg text-center text-gray-600">No purchases found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {purchases.map((purchase) => (
            <div
              key={purchase.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={purchase.image}
                alt={purchase.carModel}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{purchase.carModel}</h3>
                <p className="text-gray-600">Price: ${purchase.price}</p>
                <p className="text-gray-600">Year: {purchase.year}</p>
              </div>
              <button
                className="bg-teal-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-teal-600 w-full"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Buys;
