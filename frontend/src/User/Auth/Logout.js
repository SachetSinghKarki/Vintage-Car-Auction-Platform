import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { post } from '../../Services/ApiEndpoint';
import { clearUser } from '../../Redux/AuthSlice'; // Assuming clearUser is in your AuthSlice

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const request = await post('/api/auth/logout');
        const response = request.data;

        if (request.status === 200) {
          dispatch(clearUser()); // Clear user data from Redux store
          toast.success(response.message);
          navigate('/login'); // Redirect to login page
        }
      } catch (error) {
        console.error('Logout error: ', error);
        toast.error('Error logging out, please try again.');
      }
    };

    handleLogout();
  }, [dispatch, navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl">Logging you out...</p>
    </div>
  );
};

export default Logout;
