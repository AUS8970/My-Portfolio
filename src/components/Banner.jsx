import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import devJsonData from "../assets/Animation - 1738931216422.json";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMail, MdLocationOn } from 'react-icons/md';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { personalInfo } from '../data/portfolioData';

const Banner = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-7/12 text-center lg:text-left space-y-6"
          >

            {/* Name Heading */}
            <div className="space-y-2">
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-slate-400 text-base sm:text-lg font-medium tracking-wide"
              >
                Hello world, I'm
              </motion.p>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-200">
                  {personalInfo.name}
                </span>
              </motion.h1>

              {/* Dynamic Tagline Carousel */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden">
                <motion.div
                  key={currentTaglineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                >
                  {personalInfo.taglines[currentTaglineIndex]}
                </motion.div>
              </div>
            </div>

            {/* Location Pill */}
            {/* <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 text-sm"
            >
              <MdLocationOn className="text-indigo-400 text-lg flex-shrink-0 animate-bounce" />
              <span>{personalInfo.location}</span>
            </motion.div> */}

            {/* Bio intro */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Dedicated Software Developer building responsive, reliable, and user-friendly web applications using React.js, Tailwind CSS, FastAPI, and Node.js.
            </motion.p>

            {/* Social Icons with Hover Glow */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center lg:justify-start gap-3 pt-1"
            >
              {[
                { icon: <FaLinkedin />, href: personalInfo.socials.linkedin, label: "LinkedIn" },
                { icon: <FaGithub />, href: personalInfo.socials.github, label: "GitHub" },
                { icon: <FaFacebook />, href: personalInfo.socials.facebook, label: "Facebook" },
                { icon: <FaWhatsapp />, href: personalInfo.socials.whatsapp, label: "WhatsApp" },
                { icon: <MdOutlineMail />, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-white/[0.05] hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-purple-600 text-slate-300 hover:text-white flex items-center justify-center text-lg border border-white/10 hover:border-transparent transition-all shadow-md"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#projects"
                className="px-7 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 flex items-center gap-2 group transition"
              >
                <span>View Projects</span>
                <HiArrowNarrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-xl font-semibold text-sm bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 backdrop-blur-md transition shadow-md"
              >
                Download CV
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right Visual / Lottie & Floating Tech Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-5/12 max-w-md relative flex items-center justify-center"
          >
            {/* Ambient behind animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 rounded-3xl blur-2xl transform rotate-6 scale-95 -z-10"></div>
            
            <div className="relative w-full">
              <Lottie animationData={devJsonData} loop={true} />

              {/* Floating Tech Pill 1 */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-4 px-3.5 py-1.5 rounded-xl bg-[#0f172a]/90 border border-indigo-500/40 text-xs font-semibold text-indigo-300 shadow-xl backdrop-blur-md flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
                <span>⚛️ React & Tailwind</span>
              </motion.div>

              {/* Floating Tech Pill 2 */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -right-4 px-3.5 py-1.5 rounded-xl bg-[#0f172a]/90 border border-purple-500/40 text-xs font-semibold text-purple-300 shadow-xl backdrop-blur-md flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span>⚡ FastAPI & Node.js</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Banner;