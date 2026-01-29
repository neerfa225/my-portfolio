import React from "react";

const skills = [
    { name: "Frontend", items: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"] },
    { name: "Tools", items: ["Git", "VS Code",  "GitHub"] },
];

export default function Skills() {
    return (
        <section className="py-20 bg-black relative">
            {/* Decorative gradient */}
            <div className="absolute left-0 top-1/2 w-48 h-48 bg-purple-900/20 rounded-full blur-[80px] -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
                    My <span className="text-purple-500">Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skills.map((category) => (
                        <div
                            key={category.name}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm group"
                        >
                            <h3 className="text-2xl font-bold text-gray-200 mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></span>
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-gray-300 text-sm font-medium hover:border-purple-500/50 hover:text-purple-400 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
