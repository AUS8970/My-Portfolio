import React from 'react';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";
import aboutJsonData from "../assets/Animation - 1738939887045.json";
import { personalInfo } from '../data/portfolioData';
import { MdLocationOn, MdLanguage, MdCode, MdDoneAll } from 'react-icons/md';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Discover My Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Lottie Animation Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-6 rounded-3xl bg-[#0b1021]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
                <Lottie className="w-full" animationData={aboutJsonData} loop={true} />
              </div>
            </div>
          </motion.div>

          {/* Description & Stats Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
              {/* <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <MdCode />
                </span>
                Passion for Clean Code & Practical Software
              </h3> */}

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.about}
              </p>

              {/* <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10">
                  <MdLocationOn className="text-indigo-400 text-base flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10">
                  <MdLanguage className="text-purple-400 text-base flex-shrink-0" />
                  <span>Bengali (Native) & English (Intermediate)</span>
                </div>
              </div> */}
            </div>

            {/* Quick Stats Grid */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, borderColor: "rgba(99, 102, 241, 0.4)" }}
                  className="p-4 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 backdrop-blur-md text-center transition"
                >
                  <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div> */}

            {/* Language Proficiency Bar */}
            {/* <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <MdDoneAll className="text-indigo-400 text-base" /> Language Fluency
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.languages.map((lang, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium text-slate-300">
                      <span>{lang.name} ({lang.level})</span>
                      <span className="text-indigo-400">{lang.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;