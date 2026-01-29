import React, { useState } from "react";

const experiences = [
    {
        id: 1,
        company: "Sencript Technologies",
        role: "Frontend Developer (Intern)",

        period: "June 2025 - Present",
        description: [
            "Designed and developed responsive web interfaces using HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS, and jQuery.",
            "Built interactive and dynamic UI components to enhance overall website functionality and engagement.",
            "Focused on delivering a smooth, user-friendly experience with modern design principles and responsive layouts.",
        ],
    },
    {
        id: 2,
        company: "Techmaghi",
        role: "Student intern",
        at: "Microsoft",
        period: "",
        description: [
            "Completed Fullstack Development internship (15 days)",
            "Built a Project based on training.",
        ],
    },
    {
        id: 3,
        company: "Quest Innovative Solutions",
        role: "student intern ",

        description: [

            "Completed Python with Django internship (14days)",
            "Gained hands-on experience in web development using Django framework.",
        ],
    },

];

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="w-full bg-black mb-23 mt-2 px-16">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-16 animate-fade-in-up">
                    Experience<span className="text-purple-500">.</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-12 items-start h-[200px]">
                    {/* Tabs List */}
                    <div className="flex md:flex-col overflow-x-auto md:overflow-visible w-full md:w-48 border-l border-gray-800 relative no-scrollbar">
                        {/* Active Indicator (Vertical) */}
                        <div
                            className="absolute left-0 w-[2px] bg-purple-500 transition-all duration-300 hidden md:block"
                            style={{
                                height: "64px",
                                transform: `translateY(${activeTab * 64}px)`,
                            }}
                        />

                        {experiences.map((exp, index) => (
                            <button
                                key={exp.id}
                                onClick={() => setActiveTab(index)}
                                className={`flex-shrink-0 h-16 px-6 text-left text-lg font-medium transition-all duration-300 outline-none border-b-2 md:border-b-0 md:border-l-2 border-transparent ${activeTab === index
                                    ? "text-purple-400 md:bg-white/5 bg-white/5 border-purple-500"
                                    : "text-gray-500 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {exp.company}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="flex-1 min-h-[400px]">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`transition-all duration-500 transform ${activeTab === index
                                    ? "opacity-100 translate-y-0 relative z-10"
                                    : "opacity-0 translate-y-4 absolute -z-10 invisible"
                                    }`}
                            >
                                <div className="mb-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
                                        {exp.role}
                                    </h3>
                                    <p className="text-gray-400 font-medium tracking-wide">
                                        {exp.period}
                                    </p>
                                </div>

                                <ul className="space-y-6">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <span className="mt-1 flex-shrink-0">
                                                <svg
                                                    className="w-5 h-5 text-purple-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2.5"
                                                        d="M5 13l4 4L19 7"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p className="text-gray-300 text-lg leading-relaxed">
                                                {item}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
