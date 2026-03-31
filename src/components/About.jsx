import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDumbbell, FaUsers, FaLightbulb
} from 'react-icons/fa';
import {
  SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiVercel, SiPostman
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { GiCookingPot } from 'react-icons/gi';
import aman from '../assets/amaan.png';

const About = () => {
  const professionalSkills = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-slate-300" /> }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MongoDB (Basic)', icon: <SiMongodb className="text-[#47A248]" /> }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: 'GitHub', icon: <FaGithub className="text-white" /> },
        { name: 'Vercel', icon: <SiVercel className="text-white" /> },
        { name: 'VS Code', icon: <VscVscode className="text-[#007ACC]" /> },
        { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> }
      ]
    },
  ];

  const hobbiesAndOther = [
    {
      category: 'Hobbies',
      items: [
        { name: 'Gym & Fitness', icon: <FaDumbbell className="text-primary-400" /> },
        { name: 'Cooking', icon: <GiCookingPot className="text-orange-400" /> },
        { name: 'Self-learning', icon: <FaLightbulb className="text-yellow-400" /> }
      ]
    },
    {
      category: 'Other Skills',
      items: [
        { name: 'Teamwork & Collaboration', icon: <FaUsers className="text-blue-400" /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 lg:grid lg:grid-cols-2 lg:gap-16 items-center"
        >
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              About <span className="text-primary-500">Me</span>
            </h2>
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Hey! I'm  AmanUllah and I'm a BSCS student with hands-on experience building full-stack web applications using React.Js, Node.Js, and MongoDB. Skilled in developing responsive user interfaces and backend APIs.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              I am a quick learner and a team player. I am passionate about solving real-world problems and continuously improving my development skills. Seeking an opportunity to contribute and grow as a developer.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group cursor-default"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-dark-900 rounded-2xl p-8 border border-dark-800 h-full flex flex-col justify-center items-center text-center">
              <div className="w-32 h-32 bg-dark-800 rounded-full mb-6 border-4 border-primary-500/30 overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 opacity-20"></div>
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 10, 0],
                    scale: [1, 1.1, 1, 1.1, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-5xl select-none z-10"
                >
                  <img src={aman} alt="Aman" />
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-white">Junior Developer</h3>
              <p className="text-slate-200 mt-2"> Lifelong Learner | Builder</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-dark-900 rounded-2xl p-8 border border-dark-700 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-dark-700 pb-4 relative z-10 flex items-center gap-3">
              Professional Skills
            </h3>
            <div className="space-y-8 relative z-10">
              {professionalSkills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h4 className="text-primary-400 font-semibold mb-4 text-sm uppercase tracking-wider">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, translateY: -2 }}
                        className="flex items-center gap-2 px-4 py-2 bg-dark-800 text-slate-300 rounded-xl text-sm font-medium border border-dark-700 hover:border-primary-500/50 hover:bg-dark-700 transition-all duration-300 group shadow-lg"
                      >
                        <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="bg-dark-900 rounded-2xl p-8 border border-dark-700 shadow-xl self-start relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-dark-700 pb-4 relative z-10">
              Hobbies & Others
            </h3>
            <div className="space-y-8 relative z-10">
              {hobbiesAndOther.map((group, idx) => (
                <div key={idx}>
                  <h4 className="text-purple-400 font-semibold mb-4 text-sm uppercase tracking-wider">{group.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map((skill, i) => (
                      <motion.div
                        key={i}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, translateY: -2 }}
                        className="flex items-center gap-2 px-4 py-2 bg-dark-800 text-slate-300 rounded-xl text-sm font-medium border border-dark-700 hover:border-purple-500/50 hover:bg-dark-700 transition-all duration-300 group shadow-lg"
                      >
                        <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;

