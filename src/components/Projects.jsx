import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { LuExternalLink, LuLayers, LuSparkles } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { projectsData, personalInfo } from '../data/portfolioData';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Full Stack"];

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
            Proof of Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mt-4">
            A showcase of full-stack web applications featuring role-based access, automated evaluation, payroll tracking, and interactive dashboards.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group flex flex-col justify-between rounded-3xl bg-gradient-to-b from-white/[0.06] via-[#0d142c]/90 to-[#070b19] border border-white/10 hover:border-indigo-500/50 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Thumbnail Banner with Tech Tag */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b19] via-[#070b19]/20 to-transparent"></div>
                    
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#070b19]/80 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
                      {project.techStack[0]}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-xs font-semibold text-indigo-400 mb-1 flex items-center gap-1.5">
                      <LuSparkles /> {project.tagline}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="pt-2">
                      <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        <LuLayers className="text-indigo-400" /> Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center gap-2">
                  <Link 
                    to={`/project/${project.id}`} 
                    className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold text-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-600/20 transition duration-200"
                  >
                    View Details
                  </Link>

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition"
                    title="Source Code"
                  >
                    <FaGithub className="text-base" />
                  </a>

                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition"
                    title="Live Preview"
                  >
                    <LuExternalLink className="text-base" />
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-white border border-white/15 backdrop-blur-md font-semibold text-sm transition shadow-lg"
          >
            <FaGithub className="text-lg text-indigo-400" />
            <span>Discover More Repositories on GitHub</span>
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default Projects;