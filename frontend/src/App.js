// // import React from 'react';
// // import Navbar from './User/Components/Navbar/Navbar';
// // import Footer from './User/Components/Footer/Footer';
// // import UserRoutes from './UserRoutes';
// // import AdminRoutes from './Admin/AdminAuth/AdminRoutes';
// // // import { AdminAuthProvider, useAdminAuth } from './Admin/Context/AdminAuthContext';
// // import Admin from './Admin/AdminAuth/Admin';


// // const AppContent = () => {
// //   const { isAdmin } = useAdminAuth();

// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <Navbar />
// //       <main className="flex-grow">
// //         {isAdmin ? <AdminRoutes /> : <UserRoutes />}
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // const App = () => {
// //   return (
// //     <AdminAuthProvider>
// //       <AppContent />
// //     </AdminAuthProvider>
// //   );
// // };

// // export default App;

// import React, { useState, useEffect } from 'react';
// import Navbar from './User/Components/Navbar/Navbar';
// import Footer from './User/Components/Footer/Footer';
// import UserRoutes from './UserRoutes';
// import AdminRoutes from './Admin/AdminAuth/AdminRoutes';
// import Admin from './Admin/AdminAuth/Admin';

// const AppContent = () => {
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     // Check if the user is an admin based on localStorage or any other logic
//     const adminStatus = localStorage.getItem('isAdmin'); // Example: You can change this based on your logic
//     setIsAdmin(adminStatus === 'true');
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow">
//         {isAdmin ? <AdminRoutes /> : <UserRoutes />}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <AppContent />
//   );
// };

// export default App;

// import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import UserRoutes from './UserRoutes'; // Import UserRoutes
// import AdminRoutes from './Admin/AdminAuth/AdminRoutes';
// // import ProtectedRoute from './User/Components/ProtectedRoute'; // If needed for protected routes
// import NotFound from './User/Pages/NotFound';
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Toaster /> {/* Toast notifications */}
//       <Routes>
//         {/* User routes */}
//         <Route path="/*" element={<UserRoutes />} />
        
//         {/* Admin routes */}
//         <Route path="/admin/*" element={<AdminRoutes />} />

//         {/* Handle unknown routes */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import UserRoutes from './UserRoutes';
// import AdminRoutes from './Admin/AdminAuth/AdminRoutes';
// import NotFound from './User/Pages/NotFound'; // Ensure this import is correct

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Toaster /> {/* Toast notifications */}
//       <Routes>
//         {/* User routes */}
//         <Route path="/*" element={<UserRoutes />} />
        
//         {/* Admin routes */}
//         <Route path="/admin/*" element={<AdminRoutes />} />

//         {/* Handle unknown routes */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import UserRoutes from './UserRoutes';
// import AdminRoutes from './Admin/AdminAuth/AdminRoutes';
// import NotFound from './User/Pages/NotFound'; // Ensure this import is correct

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Toaster /> {/* Toast notifications */}
//       <Routes>
//         {/* User routes */}
//         <Route path="/*" element={<UserRoutes />} />
        
//         {/* Admin routes */}
//         <Route path="/admin/*" element={<AdminRoutes />} />

//         {/* Handle unknown routes */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import UserRoutes from './UserRoutes';
// import AdminRoutes from './Admin/AdminAuth/AdminRoutes';
// import NotFound from './User/Pages/NotFound'; // Ensure this import is correct

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Toaster /> {/* Toast notifications */}
//       <Routes>
//         {/* User routes */}
//         <Route path="/*" element={<UserRoutes />} />
        
//         {/* Admin routes */}
//         <Route path="/admin/*" element={<AdminRoutes />} />

//         {/* Handle unknown routes */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
// import React from 'react';
// import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import UserRoutes from './UserRoutes';
// import AdminRoutes from './Admin/AdminAuth/AdminRoutes';
// import NotFound from './User/Pages/NotFound';
// import Navbar from './User/Components/Navbar/Navbar'; // Import your Navbar component

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Navbar /> {/* Add Navbar here */}
//       <Toaster />
//       <Routes>
//         <Route path="/*" element={<UserRoutes />} />
//         <Route path="/admin" element={<AdminRoutes />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import UserRoutes from './UserRoutes';
import AdminRoutes from './Admin/AdminAuth/AdminRoutes';
import NotFound from './User/Pages/NotFound';
import Navbar from './User/Components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster />
      <Routes>
        {/* User routes */}
        <Route path="/*" element={<UserRoutes />} />

        {/* Admin routes */}
        {/* Ensure that the admin route path includes the '/*' to allow nested routing */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* 404 Not Found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
