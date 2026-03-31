import React from 'react';

const Footer = () => {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/amaan2t3',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      hoverColor: 'hover:text-white hover:bg-slate-700 hover:border-slate-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/amaanullah-ibrahim-819335329/',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
      hoverColor: 'hover:text-white hover:bg-blue-600 hover:border-blue-400'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/Amaan2t3',
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      hoverColor: 'hover:text-white hover:bg-slate-900 hover:border-slate-600'
    }
  ];

  return (
    <footer className="relative bg-dark-900 pt-24 pb-12 overflow-hidden border-t border-dark-800">
      {/* Top ambient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-40"></div>

      {/* Giant watermark name */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none z-0 tracking-tighter">
        AMAANULLAH
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10">
          Let's build something <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-purple-500">amazing.</span>
        </h2>

        {/* Large stylized social buttons container */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-2xl bg-dark-800 text-slate-400 border border-dark-700 shadow-xl transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary-500/10 ${social.hoverColor}`}
              title={social.name}
            >
              <span className="sr-only">{social.name}</span>
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom copyright and navigation strip */}
        <div className="w-full border-t border-dark-800 flex flex-col md:flex-row justify-between items-center pt-8">
          <div>
            <a href="#home" className="flex items-center gap-3 text-xl font-extrabold text-white tracking-tight hover:text-primary-400 transition-colors">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-500/20 text-lg">👨‍💻</span>
              AmaanUllah
            </a>
          </div>

          <p className="text-slate-500 mt-6 md:mt-0 text-sm font-medium">
            &copy; {new Date().getFullYear()} AmaanUllah. All rights reserved.
          </p>

          <div className="mt-6 md:mt-0 flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="#home" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-bold text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
