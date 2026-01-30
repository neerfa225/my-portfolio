import React from "react";
import profile from "../assets/profile.jpeg";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <>
      <section className="w-full min-h-screen bg-black flex items-center pt-20 relative overflow-hidden">
        {/* Background Gradients/Glows */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* LEFT CONTENT */}
          <div className="text-white order-2 lg:order-1 animate-fade-in-up">
            <h4 className="text-xl mb-4 text-purple-400 font-medium tracking-wide">
              Hey, I'm Aafreen
            </h4>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              <span className="text-white">Frontend</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Developer
              </span>
            </h1>

            <p className="mt-4 text-gray-400 max-w-xl text-lg leading-relaxed mb-8">
              I create stunning, responsive, and user-friendly web experiences. Based in India, I turn complex problems into beautiful, simple interfaces.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
                Get In Touch
              </a>

              <button className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <a href="/#projects">Browse Projects</a>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end relative order-1 lg:order-2 animate-slide-in-right">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex items-center justify-center">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/30 scale-105 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-0 rounded-full border border-blue-500/20 scale-110 animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* Profile Image container with shape */}
              <div className="w-full h-full relative z-10 animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20"></div>
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full object-cover rounded-full border-4 border-black/50 shadow-2xl relative z-20 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <Experience />
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            Turning Ideas <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">into Interactive UIs </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Actively seeking frontend developer opportunities
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:neerfa225@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
            >
              <span className="p-2 rounded-full bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </span>
              <span className="text-white font-medium">neerfa225@gmail.com</span>
            </a>

            <a
             
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300"
            >
              <span className="p-2 rounded-full bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </span>
              <span className="text-white font-medium">+91 98957 23779</span>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 Aafreen Fathima N. All Rights Reserved</p>
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/aafreen-fathima-n-032a99256/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://github.com/neerfa225" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
