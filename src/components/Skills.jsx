import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaCode
} from "react-icons/fa";
import {
  SiPython,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiDaisyui,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiFigma,
  SiPostman,
  SiFirebase
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { skillsData } from '../data/portfolioData';

// Category icon map
const categoryIcons = {
  "Programming Languages": <FaCode className="text-xl text-blue-400" />,
  "Frontend": <FaLaptopCode className="text-xl text-emerald-400" />,
  "Backend": <FaServer className="text-xl text-amber-400" />,
  "Database": <FaDatabase className="text-xl text-purple-400" />,
  "Tools": <FaTools className="text-xl text-rose-400" />,
};

// Technology-specific brand icons and accent hover styles
const techIconMap = {
  Python: {
    icon: <SiPython className="text-[#3776AB]" />,
    hoverBorder: "hover:border-[#3776AB]/50",
    hoverBg: "hover:bg-[#3776AB]/10"
  },
  JavaScript: {
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    hoverBorder: "hover:border-[#F7DF1E]/50",
    hoverBg: "hover:bg-[#F7DF1E]/10"
  },
  C: {
    icon: <SiC className="text-[#A8B9CC]" />,
    hoverBorder: "hover:border-[#A8B9CC]/50",
    hoverBg: "hover:bg-[#A8B9CC]/10"
  },
  "C++": {
    icon: <SiCplusplus className="text-[#00599C]" />,
    hoverBorder: "hover:border-[#00599C]/50",
    hoverBg: "hover:bg-[#00599C]/10"
  },
  "React.js": {
    icon: <SiReact className="text-[#61DAFB]" />,
    hoverBorder: "hover:border-[#61DAFB]/50",
    hoverBg: "hover:bg-[#61DAFB]/10"
  },
  "Tailwind CSS": {
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    hoverBorder: "hover:border-[#06B6D4]/50",
    hoverBg: "hover:bg-[#06B6D4]/10"
  },
  Bootstrap: {
    icon: <SiBootstrap className="text-[#7952B3]" />,
    hoverBorder: "hover:border-[#7952B3]/50",
    hoverBg: "hover:bg-[#7952B3]/10"
  },
  "Material UI": {
    icon: <SiMui className="text-[#007FFF]" />,
    hoverBorder: "hover:border-[#007FFF]/50",
    hoverBg: "hover:bg-[#007FFF]/10"
  },
  DaisyUI: {
    icon: <SiDaisyui className="text-[#1AD1A5]" />,
    hoverBorder: "hover:border-[#1AD1A5]/50",
    hoverBg: "hover:bg-[#1AD1A5]/10"
  },
  FastAPI: {
    icon: <SiFastapi className="text-[#009688]" />,
    hoverBorder: "hover:border-[#009688]/50",
    hoverBg: "hover:bg-[#009688]/10"
  },
  "Node.js": {
    icon: <SiNodedotjs className="text-[#5FA04E]" />,
    hoverBorder: "hover:border-[#5FA04E]/50",
    hoverBg: "hover:bg-[#5FA04E]/10"
  },
  "Express.js": {
    icon: <SiExpress className="text-[#F1F5F9]" />,
    hoverBorder: "hover:border-white/50",
    hoverBg: "hover:bg-white/10"
  },
  MySQL: {
    icon: <SiMysql className="text-[#4479A1]" />,
    hoverBorder: "hover:border-[#4479A1]/50",
    hoverBg: "hover:bg-[#4479A1]/10"
  },
  PostgreSQL: {
    icon: <SiPostgresql className="text-[#4169E1]" />,
    hoverBorder: "hover:border-[#4169E1]/50",
    hoverBg: "hover:bg-[#4169E1]/10"
  },
  MongoDB: {
    icon: <SiMongodb className="text-[#47A248]" />,
    hoverBorder: "hover:border-[#47A248]/50",
    hoverBg: "hover:bg-[#47A248]/10"
  },
  "VS Code": {
    icon: <VscVscode className="text-[#007ACC]" />,
    hoverBorder: "hover:border-[#007ACC]/50",
    hoverBg: "hover:bg-[#007ACC]/10"
  },
  GitHub: {
    icon: <SiGithub className="text-[#F0F6FC]" />,
    hoverBorder: "hover:border-white/50",
    hoverBg: "hover:bg-white/10"
  },
  Figma: {
    icon: <SiFigma className="text-[#F24E1E]" />,
    hoverBorder: "hover:border-[#F24E1E]/50",
    hoverBg: "hover:bg-[#F24E1E]/10"
  },
  Postman: {
    icon: <SiPostman className="text-[#FF6C37]" />,
    hoverBorder: "hover:border-[#FF6C37]/50",
    hoverBg: "hover:bg-[#FF6C37]/10"
  },
  Firebase: {
    icon: <SiFirebase className="text-[#FFCA28]" />,
    hoverBorder: "hover:border-[#FFCA28]/50",
    hoverBg: "hover:bg-[#FFCA28]/10"
  }
};

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterTabs = ["All", ...skillsData.map(c => c.category)];

  const filteredCategories = selectedFilter === "All"
    ? skillsData
    : skillsData.filter(c => c.category === selectedFilter);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-4">
            Programming languages, libraries, databases, and development tools I work with to build modern web solutions.
          </p>
        </motion.div>
        
        {/* Skills Cards Grid */}
        <motion.div 
          layout 
          className="flex flex-col gap-4"
        >
          <AnimatePresence>
            {filteredCategories.map((categoryItem) => (
              <motion.div
                key={categoryItem.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-3xl p-4 bg-gradient-to-b from-white/[0.05] via-[#0d142c]/90 to-[#070b19] border border-white/10 hover:border-indigo-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-row justify-between"
              >
                {/* Glow border gradient on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10"></div>

                <div className='flex gap-5'>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                        {categoryIcons[categoryItem.category] || <FaCode className="text-xl text-blue-400" />}
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {categoryItem.category}:
                      </h3>
                    </div>
                  </div>

                  {/* Technology Items with Official Icons & Names (NO LINE GRAPHS) */}
                  <div className="flex flex-wrap gap-4">
                    {categoryItem.skills.map((skill, sIdx) => {
                      const tech = techIconMap[skill.name] || {
                        icon: <FaCode className="text-indigo-400" />,
                        hoverBorder: "hover:border-indigo-500/50",
                        hoverBg: "hover:bg-indigo-500/10"
                      };

                      return (
                        <motion.div
                          key={sIdx}
                          whileHover={{ scale: 1.04, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className={`flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10 ${tech.hoverBorder} ${tech.hoverBg} backdrop-blur-md transition-all shadow-sm cursor-default group/item`}
                        >
                          <div className="text-2xl p-1.5 rounded-xl bg-white/[0.05] border border-white/10 group-hover/item:scale-110 transition-transform flex-shrink-0">
                            {tech.icon}
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover/item:text-white transition-colors truncate">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;