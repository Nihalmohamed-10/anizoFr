// src/router/Router.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/home/Home';
import Footer from '../components/Footer';
// import Home from '../pages/Home'; // Add more pages as needed

function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRouter;
