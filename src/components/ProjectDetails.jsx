import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuCircleArrowOutUpRight } from 'react-icons/lu';
import { FaGithub, FaCheckCircle, FaArrowLeft, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-28 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
        <Link 
          to="/"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-24 px-5 sm:px-8 max-w-6xl mx-auto">
      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold mb-8 text-sm transition group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Projects
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">
          Case Study
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-1">
          {project.title}
        </h1>
        <p className="text-slate-400 text-base sm:text-lg mt-2 font-medium">
          {project.tagline}
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Image & Direct Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 group">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b19]/80 via-transparent to-transparent"></div>
          </div>

          <div className="flex gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1"
            >
              <button className="w-full py-3.5 px-6 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white font-semibold text-sm flex items-center justify-center gap-2 transition shadow-lg">
                <FaGithub className="text-base" /> Source Code
              </button>
            </a>
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1"
            >
              <button className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition shadow-lg shadow-indigo-600/30">
                <LuCircleArrowOutUpRight className="text-base" /> Live Preview
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right Column: In-depth details */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-6 space-y-6"
        >
          {/* Overview */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FaLaptopCode className="text-indigo-400" /> Project Overview
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Features */}
          {project.features && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-white">
                Key Features
              </h3>
              <ul className="space-y-2.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0 text-xs" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl space-y-3">
            <h3 className="text-lg font-bold text-white">
              Tech Stack Used
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Enhancements */}
          {project.developmentChallenges && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl space-y-3">
              <h3 className="text-lg font-bold text-white">
                Engineering Challenges
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.developmentChallenges}
              </p>
            </div>
          )}

          {project.futureEnhancements && (
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl space-y-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FaRocket className="text-purple-400 text-sm" /> Future Enhancements
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.futureEnhancements}
              </p>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default ProjectDetails;