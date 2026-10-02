import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { MdLocationOn, MdDateRange } from 'react-icons/md';
import { educationData } from '../data/portfolioData';

const Educations = () => {
  return (
    <section id="educations" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 sm:px-8 max-w-5xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0d142c]/90 to-[#070b19] border border-white/10 hover:border-indigo-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    <FaGraduationCap />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {edu.degree}
                </h3>

                <p className="text-indigo-400 font-medium text-sm mb-6">
                  {edu.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Educations;