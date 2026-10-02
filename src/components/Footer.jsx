import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#050814] text-slate-400 py-12 px-6">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-extrabold text-xs flex items-center justify-center">
              AUS
            </span>
            <span className="text-lg font-bold text-white tracking-tight">
              {personalInfo.name}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {personalInfo.title} • {personalInfo.location}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#educations" className="hover:text-white transition">Education</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center text-sm transition"
            >
              <FaLinkedin />
            </a>
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center text-sm transition"
            >
              <FaGithub />
            </a>
            <a 
              href={personalInfo.socials.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center text-sm transition"
            >
              <FaFacebook />
            </a>
            <a 
              href={personalInfo.socials.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center text-sm transition"
            >
              <FaWhatsapp />
            </a>
          </div>

          <p className="text-[11px] text-slate-500 flex items-center gap-1">
            Crafted with <FaHeart className="text-rose-500 text-[10px]" /> by {personalInfo.name} © {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;