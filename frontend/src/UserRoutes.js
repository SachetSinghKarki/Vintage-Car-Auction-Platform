// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './User/Pages/Home';
// import NotFound from './User/Pages/NotFound';
// import About from './User/Pages/About';
// // import AddProduct from './User/Components/Forms/Product/AddProduct';
// import SingleProduct from './User/Pages/Products/SingleProduct';
// // import UpdateProduct from './User/Components/Forms/Product/UpdateProduct';
// import Contact from './User/Pages/Contact';
// import AuctionPage from './User/Pages/AuctionPage';
// import Login from './User/Auth/Login';
// import Register from './User/Auth/Register';

// const UserRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/auction/:carId" element={<AuctionPage />} />
//       <Route path="/about" element={<About />} />
//       {/* <Route path="/add-product" element={<AddProduct />} /> */}
//       <Route path="/product/:id" element={<SingleProduct />} />
//       {/* <Route path="/update-product/:id" element={<UpdateProduct />} /> */}
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default UserRoutes;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './User/Pages/Home';
import NotFound from './User/Pages/NotFound';
import About from './User/Pages/About';
import SingleProduct from './User/Pages/Products/SingleProduct';
import Contact from './User/Pages/Contact';
import AuctionPage from './User/Pages/AuctionPage';
import Login from './User/Auth/Login';
import Register from './User/Auth/Register';
import Buys from './User/Pages/Buys';
const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auction/:carId" element={<AuctionPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/buys" element={<Buys />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default UserRoutes;
