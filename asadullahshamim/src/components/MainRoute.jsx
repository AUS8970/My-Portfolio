import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const MainRoute = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainRoute;