import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';

const MainRoute = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white relative">
      {/* Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-[60] shadow-sm shadow-indigo-500/50"
      />

      <Navbar />
      
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default MainRoute;