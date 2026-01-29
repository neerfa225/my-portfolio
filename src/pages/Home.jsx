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
              Hey, I'm Aafreen <span className="inline-block animate-wave">👋🏻</span>
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
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
                Get In Touch
              </button>

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
    </>
  );
}
