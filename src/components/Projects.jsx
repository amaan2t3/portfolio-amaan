import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaCode, FaDatabase, FaClock, FaKeyboard
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiPostman
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  // Helper to map tech name to icon component
  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case 'react': return <FaReact className="text-[#61DAFB]" title="React" />;
      case 'node.js': return <FaNodeJs className="text-[#339933]" title="Node.js" />;
      case 'express': return <SiExpress className="text-slate-300" title="Express" />;
      case 'mongodb': return <SiMongodb className="text-[#47A248]" title="MongoDB" />;
      case 'tailwind css': return <SiTailwindcss className="text-[#06B6D4]" title="Tailwind CSS" />;
      case 'api': return <TbApi className="text-[#FF6C37]" title="API Integration" />;
      case 'html': return <FaHtml5 className="text-[#E34F26]" title="HTML5" />;
      case 'css': return <FaCss3Alt className="text-[#1572B6]" title="CSS3" />;
      case 'javascript': return <SiJavascript className="text-[#F7DF1E]" title="JavaScript" />;
      case 'dom manipulation': return <FaCode className="text-yellow-400" title="DOM Manipulation" />;
      case 'local storage': return <FaDatabase className="text-blue-400" title="Local Storage" />;
      case 'date/time api': return <FaClock className="text-purple-400" title="Date/Time API" />;
      case 'event listeners': return <FaKeyboard className="text-emerald-400" title="Event Listeners" />;
      case 'math & strings': return <FaCode className="text-rose-400" title="Logic & Strings" />;
      default: return null;
    }
  };

  const projects = [
    {
      title: 'Full Stack Blog App',
      description: 'A complete full-stack blogging platform with user authentication, rich text editing, and real-time database updates. Live on Vercel.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      color: 'from-blue-500 to-cyan-500',
      liveLink: 'https://blog-app-five-psi-40.vercel.app',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2zM14 4v5h5" />
        </svg>
      )
    },
    {
      title: 'Gym Web-Page',
      description: 'A modern fitness application designed to help users track their workouts, browse exercises, and stay motivated. Live on Vercel.',
      tech: ['React', 'Tailwind CSS', 'API'],
      color: 'from-purple-500 to-pink-500',
      liveLink: 'https://gym-fitness-amaan.netlify.app',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Currency Converter',
      description: 'A dynamic currency rate converter featuring live API integration for real-time exchange rate updates. Live on Netlify.',
      tech: ['React', 'Tailwind CSS', 'API'],
      color: 'from-emerald-500 to-teal-500',
      liveLink: 'https://currency-converter-amaan.netlify.app',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'JS Mini Projects Bundle',
      description: 'A curated bundle of vanilla JavaScript projects including a Background Changer, Password Generator, Todo List, Smartwatch UI, and a Keyboard Event checker.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      color: 'from-orange-500 to-rose-500',
      liveLink: '#',
      isBundle: true,
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
  ];

  const miniProjects = [
    { name: 'Background Changer', tech: 'DOM Manipulation', icon: '🎨', liveLink: 'https://bg-changer-amaan.netlify.app' },
    { name: 'Password Generator', tech: 'Math & Strings', icon: '🔐', liveLink: 'https://password-generator-amaan.netlify.app' },
    { name: 'Todo List', tech: 'Local Storage', icon: '📝', liveLink: 'https://manage-daily-todos.netlify.app' },
    { name: 'Smartwatch UI', tech: 'Date/Time API', icon: '⌚', liveLink: 'https://smartwatch-ui-amaan.netlify.app' },
    { name: 'Keyboard Event Checker', tech: 'Event Listeners', icon: '⌨️', liveLink: 'https://keyboard-event-checker-amaan.netlify.app' }
  ];

  return (
    <section id="projects" className="py-24 bg-dark-900 relative min-h-screen overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-purple-500">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Interactive applications and modern web solutions I've built using the latest technology stacks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-dark-800/40 rounded-3xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col backdrop-blur-sm"
            >
              <div 
                className={`h-40 bg-gradient-to-br ${project.color} opacity-70 group-hover:opacity-100 transition-opacity flex items-center justify-center shrink-0 cursor-pointer relative overflow-hidden`} 
                onClick={() => project.isBundle && setShowModal(true)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <span className="text-white group-hover:scale-110 transition-transform duration-500 relative z-10 drop-shadow-lg">
                  {project.icon}
                </span>
                {project.isBundle && (
                  <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-bold text-white uppercase tracking-wider">
                    Bundle
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow relative">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Logos Only */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {project.tech.map((t) => (
                    <div 
                      key={t}
                      className="text-2xl hover:scale-120 transition-transform cursor-help transition-all duration-300"
                    >
                      {getTechIcon(t)}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  {project.isBundle ? (
                    <button
                      onClick={() => setShowModal(true)}
                      className="group/btn text-sm font-bold text-primary-500 hover:text-primary-400 transition-colors flex items-center gap-2 focus:outline-none"
                    >
                      View Projects <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                  ) : (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn text-sm font-bold text-primary-500 hover:text-primary-400 transition-colors flex items-center gap-2"
                    >
                      Live Demo <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                  <a
                    href="https://github.com/amaan2t3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-wider"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mini Projects Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-dark-950/90 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          ></motion.div>

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-dark-900 border border-white/10 rounded-3xl shadow-3xl w-full max-w-2xl overflow-hidden z-20"
          >
            <div className="flex items-center justify-between p-8 border-b border-white/5">
              <h3 className="text-2xl font-black text-white flex items-center gap-3 tracking-tight">
                 JS Mini Projects
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all focus:outline-none"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-4">
                {miniProjects.map((mini, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 5 }}
                    className="group bg-dark-800/50 rounded-2xl p-5 border border-white/5 hover:border-primary-500/30 transition-all flex items-center gap-5"
                  >
                    <div className="text-3xl bg-dark-900 w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform">
                      {mini.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-primary-400 transition-colors uppercase text-xs tracking-[0.2em]">{mini.name}</h4>
                      <div className="text-xl">
                        {getTechIcon(mini.tech)}
                      </div>
                    </div>
                    <a
                      href={mini.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-primary-500/10 text-primary-500 hover:bg-primary-500 hover:text-white rounded-full transition-all duration-300"
                      title="View Live"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-8 border-t border-white/5 bg-dark-900/50 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;

