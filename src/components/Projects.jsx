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
      case 'ejs': return <FaCode className="text-[#A91E50]" title="EJS" />;
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
      githubLink: 'https://github.com/amaan2t3/BlogApp',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2zM14 4v5h5" />
        </svg>
      )
    },
    {
      title: 'URL Shortener',
      description: 'A full-stack URL Shortener web app with real-time click tracking. Built with Node.js, Express, MongoDB & EJS, deployed on Railway.',
      tech: ['Node.js', 'Express', 'MongoDB', 'EJS'],
      color: 'from-green-500 to-emerald-600',
      liveLink: 'https://url-shortener-production-4595.up.railway.app',
      githubLink: 'https://github.com/amaan2t3/URL-Shortener',
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      title: 'Gym Web-Page',
      description: 'A modern fitness application designed to help users track their workouts, browse exercises, and stay motivated. Live on Vercel.',
      tech: ['React', 'Tailwind CSS', 'API'],
      color: 'from-purple-500 to-pink-500',
      liveLink: 'https://gym-fitness-amaan.netlify.app',
      githubLink: 'https://github.com/amaan2t3/GYM-Fitness-WebPageUI',
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-[2rem] overflow-hidden p-[1px] flex flex-col z-10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-shadow duration-500"
            >
              {/* Animated Gradient Border Layer */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]`}></div>
              
              {/* Inner Card Card */}
              <div className="relative h-full bg-dark-800/90 backdrop-blur-xl rounded-[calc(2rem-1px)] border border-white/5 group-hover:border-transparent transition-all md:p-8 p-6 duration-500 flex flex-col overflow-hidden">
                
                {/* Glowing Background blob inside card */}
                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${project.color} rounded-full blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`}></div>

                {/* Top Section */}
                <div className="flex items-start justify-between relative z-10 mb-8">
                  <div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-xl shadow-black/20 group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500 cursor-pointer`}
                    onClick={() => project.isBundle && setShowModal(true)}
                  >
                    <span className="w-8 h-8 flex items-center justify-center drop-shadow-md">
                      {project.icon}
                    </span>
                  </div>
                  
                  {project.isBundle && (
                    <div className="bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
                      <span className="relative z-10 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        Bundle
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all tracking-tight cursor-default">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed cursor-default">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <div 
                        key={t}
                        className="flex items-center gap-2 px-3 py-1.5 bg-dark-900/50 rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-help"
                      >
                         <span className="text-base">{getTechIcon(t)}</span>
                         <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wide">{t}</span>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    {project.isBundle ? (
                      <button
                        onClick={() => setShowModal(true)}
                        className="group/btn text-sm font-bold text-white hover:text-slate-300 transition-colors flex items-center gap-2 focus:outline-none"
                      >
                        View Projects 
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 group-hover/btn:bg-white/10 transition-colors">
                          <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                        </span>
                      </button>
                    ) : (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn text-sm font-bold text-white hover:text-slate-300 transition-colors flex items-center gap-2"
                      >
                        Live Demo 
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 group-hover/btn:bg-white/10 transition-colors">
                          <span className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform block rotate-[-45deg]">→</span>
                        </span>
                      </a>
                    )}
                    <a
                      href={project.githubLink || "https://github.com/amaan2t3"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group-hover:rotate-12 group-hover:scale-110"
                      title="View GitHub Repository"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                    </a>
                  </div>
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

