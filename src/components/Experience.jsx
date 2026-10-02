import React from 'react';
import { motion } from 'framer-motion';
import { MdWorkOutline, MdCalendarToday, MdCheckCircleOutline } from "react-icons/md";
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 sm:px-8 max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Hands-on software development through real-world projects, modern web stacks, and continuous self-driven learning.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Pulsing Glowing Marker */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center text-lg shadow-lg shadow-indigo-500/30 ring-4 ring-[#070b19]">
                <MdWorkOutline />
              </div>

              {/* Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] via-[#0d142c]/90 to-[#070b19] border border-white/10 hover:border-indigo-500/40 backdrop-blur-xl shadow-xl transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 inline-block mt-1">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-white/5 border border-white/10 text-slate-300 rounded-full w-fit">
                    <MdCalendarToday className="text-indigo-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {exp.highlights && (
                  <ul className="space-y-2 pt-3 border-t border-white/10">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <MdCheckCircleOutline className="text-emerald-400 text-base mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;