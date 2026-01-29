import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../projectsData";

export default function Projects() {
  return (
    <section className="w-full bg-black mt-20" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight">
          Featured <span className="text-purple-500">Projects.</span>
        </h2>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              desc={project.desc}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ id, title, desc, image, tags }) {
  return (
    <Link
      to={`/project/${id}`}
      className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 block"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content Section */}
      <div className="p-8 relative z-20">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <div className="p-2 rounded-full bg-white/10 text-white group-hover:bg-purple-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>

        <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags && tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
