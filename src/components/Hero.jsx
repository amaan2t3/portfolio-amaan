import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const auroraVariants = {
    animate: (i) => ({
      x: [0, 40, -40, 0],
      y: [0, -60, 60, 0],
      scale: [1, 1.2, 0.8, 1],
      transition: {
        duration: 15 + i * 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section id="home" className=" relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">

      {/* Aurora Mesh Background Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* Layered Aurora Colors */}
        <motion.div
          custom={0}
          variants={auroraVariants}
          animate="animate"
          className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          custom={1}
          variants={auroraVariants}
          animate="animate"
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] mix-blend-screen"
        />
        <motion.div
          custom={2}
          variants={auroraVariants}
          animate="animate"
          className="absolute top-[40%] right-[25%] w-[450px] h-[450px] bg-blue-500/15 rounded-full blur-[100px] mix-blend-screen"
        />

        {/* Subtle Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] contrast-150 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/40 to-slate-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">

        {/* Subtle Glassmorphism Content Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative px-8 py-12 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-2xl"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="block text-slate-100">Hey, I'm AmaanUllah</span>
            <span className="block text-slate-100 italic font-light text-4xl text-center">
              a BSCS Student </span>


            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-purple-500 mt-2">
              Learning and building web applications
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto mb-10"
          >
            I build premium, responsive, and blazingly fast web applications. Welcome to my digital playground where design meets code.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 block sm:inline-block"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full border border-dark-800 hover:border-slate-600 bg-dark-900/50 backdrop-blur-md text-slate-300 hover:text-white font-semibold transition-all hover:-translate-y-1 block sm:inline-block"
            >
              Let's Talk
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

