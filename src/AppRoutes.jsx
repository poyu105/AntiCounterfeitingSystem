import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AddProduct from './pages/AddProduct';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/addproduct" element={<AddProduct/>}/>
    </Routes>
  );
}

export default AppRoutes;
