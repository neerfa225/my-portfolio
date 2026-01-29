import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../projectsData";

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors">
                    Go back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            {/* Header Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                        <div className="max-w-3xl">
                            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                                {project.title}
                                <span className="text-purple-500">.</span>
                            </h1>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                {project.desc}
                            </p>
                        </div>
                        <a
                            href="/"
                            className="group p-4 rounded-full border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-8 h-8 group-hover:text-purple-400 group-hover:rotate-45 transition-all"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Hero Image */}
                    <div className="relative aspect-[16/9] w-full rounded-[40px] overflow-hidden bg-white/5 border border-white/10 mb-20">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left Column: Details Box (Design Restored) */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <div className="p-8 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-sm space-y-8">
                                <div>
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                                        Project Type
                                    </h4>
                                    <p className="text-lg font-medium">{project.type}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                                        Company / Org
                                    </h4>
                                    <p className="text-lg font-medium">{project.company}</p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                                        Stack
                                    </h4>
                                    <p className="text-lg font-medium">{project.techStack}</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Content */}
                        <div className="lg:col-span-8 space-y-20">
                            <section>
                                <h2 className="text-4xl font-bold mb-8">About the Project</h2>
                                <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
                                    <p>{project.about}</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-4xl font-bold mb-8">Key Accomplishments</h2>
                                <div className="space-y-4 text-lg text-gray-400 leading-relaxed">
                                    <p>{project.results}</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="aspect-video rounded-[32px] overflow-hidden bg-white/5 border border-white/10">
                            <img src={project.images[1]} alt="Gallery 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-video rounded-[32px] overflow-hidden bg-white/5 border border-white/10">
                            <img src={project.images[2]} alt="Gallery 2" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="aspect-[21/9] rounded-[32px] overflow-hidden bg-white/5 border border-white/10">
                        <img src={project.images[0]} alt="Gallery 3" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>


            {/* More Projects Section */}
            <section className="py-32 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-16">
                        Explore Other Work<span className="text-purple-500">.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {projects
                            .filter((p) => p.id !== id)
                            .map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/project/${p.id}`}
                                    className="group block space-y-6"
                                >
                                    <div className="relative aspect-video rounded-[32px] overflow-hidden bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-all duration-500">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                                                {p.title}
                                            </h3>
                                            <div className="p-2 rounded-full border border-white/10 group-hover:bg-purple-600 group-hover:border-purple-600 transition-all">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 line-clamp-2">{p.desc}</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                           Turning Ideas into Interactive UIs
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Actively seeking frontend developer opportunities
                        </p>
                    </div>
                    <div className="flex gap-4">
                       
                        <a
                            href="/resume.pdf"
                            download="Afreen_Resume.pdf"
                            className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-all inline-block"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="py-12 px-6 border-t border-white/5 text-center">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500">© 2025 Afreen. All Rights Reserved</p>
                    
                </div>
            </footer>
        </div>
    );
};

export default ProjectDetail;
