import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate network request duration
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Let's Work <span className="text-primary-500">Together</span>
        </h2>
        <p className="text-xl text-slate-400 mb-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="bg-dark-900 rounded-2xl border border-dark-800 shadow-2xl text-left relative overflow-hidden min-h-[420px]">

          {status === 'success' ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-dark-900 z-20">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20 transform animate-[bounce_1s_ease-out]">
                <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-3">Message Sent!</h3>
              <p className="text-lg text-slate-400 mb-10 max-w-md mx-auto">
                Thank you for reaching out. Your message has been successfully delivered and I will get back to you shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="px-8 py-3 bg-dark-800 border border-dark-700 hover:border-slate-600 rounded-lg text-slate-300 hover:text-white transition-all shadow-lg hover:-translate-y-1 font-semibold"
              >
                Send Another Message
              </button>
            </div>
          ) : null}

          <form
            onSubmit={handleSubmit}
            className={`p-8 transition-opacity duration-300 ${status === 'submitting' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-bold text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-dark-800 border border-dark-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-bold text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-dark-800 border border-dark-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-bold text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full bg-dark-800 border border-dark-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg shadow-primary-500/30 text-lg hover:-translate-y-0.5 disabled:opacity-80 flex justify-center items-center h-12"
            >
              {status === 'submitting' ? (
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
