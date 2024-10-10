// // import React from 'react';
// // import { Route, Routes, Navigate } from 'react-router-dom';
// // import AdminLogin from './AdminLogin';
// // import AdminDashboard from '../AdminDashboard';
// // import UpdateProduct from '../../User/Components/Forms/Product/UpdateProduct';
// // import AddProduct from '../../User/Components/Forms/Product/AddProduct';
// // import { useAdminAuth } from '../Context/AdminAuthContext';

// // const AdminRoutes = () => {
// //   const { isAdmin } = useAdminAuth();

// //   return (
// //     <Routes>
// //       {/* Admin login route */}
// //       <Route path="/admin" element={isAdmin ? <Navigate to="/admin/dashboard" /> : <AdminLogin />} />
      
// //       {/* Protected admin routes */}
// //       {isAdmin && (
// //         <>
// //           <Route path="/admin/dashboard" element={<AdminDashboard />} />
// //           <Route path="/admin/add-product" element={<AddProduct />} />
// //           <Route path="/admin/update-product/:id" element={<UpdateProduct />} />
// //         </>
// //       )}

// //       {/* Redirect unknown routes to admin login */}
// //       <Route path="*" element={<Navigate to="/admin" />} />
// //     </Routes>
// //   );
// // };

// // export default AdminRoutes;
// import React from 'react';
// import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
// import Admin from './Admin';
// import AdminDashboard from '../AdminDashboard';
// import UpdateProduct from '../../User/Components/Forms/Product/UpdateProduct';
// import AddProduct from '../../User/Components/Forms/Product/AddProduct';
// import { useAdminAuth } from '../Context/AdminAuthContext';
// import {Toaster} from 'react-hot-toast'

// const AdminRoutes = () => {
//   const { isAuthenticated } = useAdminAuth();

//   return (
//     <BrowserRouter>
//     <Toaster>
//     <Routes>
//       <Route path="/admin" element={<Admin />} />
//       {isAuthenticated ? (
//         <>
//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
//           <Route path="/add-product" element={<AddProduct />} />
//           <Route path="/update-product/:id" element={<UpdateProduct />} />
//         </>
//       ) : (
//         <Route path="*" element={<Navigate to="/admin" />} />
//       )}
//     </Routes>
//     </Toaster>
//     </BrowserRouter>
//   );
// };

// export default AdminRoutes;
// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import Admin from './Admin';
// import AdminDashboard from '../AdminDashboard';
// import UpdateProduct from '../../User/Components/Forms/Product/UpdateProduct';
// import AddProduct from '../../User/Components/Forms/Product/AddProduct';
// import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management

// const AdminRoutes = () => {
//   const { user } = useSelector((state) => state.auth); // Modify this according to your Redux store

//   return (
//     <Routes>
//       {/* Admin login route */}
//       <Route path="/admin" element={user?.isAdmin ? <Navigate to="/admin/dashboard" /> : <Admin />} />

//       {/* Protected admin routes */}
//       {user?.isAdmin ? (
//         <>
//           <Route path="/admin/dashboard" element={<AdminDashboard />} />
//           <Route path="/admin/add-product" element={<AddProduct />} />
//           <Route path="/admin/update-product/:id" element={<UpdateProduct />} />
//         </>
//       ) : (
//         <Route path="*" element={<Navigate to="/admin" />} />
//       )}
//     </Routes>
//   );
// };

// export default AdminRoutes;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from '../AdminDashboard';
import Admin from './Admin';
import AddProduct from '../../User/Components/Forms/Product/AddProduct';
import UpdateProduct from '../../User/Components/Forms/Product/UpdateProduct';
import DeleteProduct from '../../User/Components/Forms/Product/DeleteProduct';
import ViewUsers from '../ViewUser';
import Security from '../Security';
import Analytics from '../Analytics';
import Settings from '../Settings';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />}>
        {/* Nested routes within /admin */}
        <Route index element={<Admin />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="update-product/:id" element={<UpdateProduct />} />
        <Route path="delete-product/:id" element={<DeleteProduct />} />
        <Route path="view-users" element={<ViewUsers />} />
        <Route path = "security" element={<Security/>} />
        <Route path = "analytics" element={<Analytics/>} />
        <Route path = "settings" element={<Settings/>} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
