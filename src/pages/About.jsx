import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import globe from "../assets/globe.png";

const About = () => {
    const experienceRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: experienceRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const skills = {
        web: ["HTML", "CSS", "JavaScript", "React JS", "JQuery"],
        frameworks: ["Bootstrap", "Tailwind CSS", "React-Bootstrap"],
        tools: ["Git", "GitHub", "Visual Studio Code"]
    };

    const experiences = [
        {
            number: "01",
            role: "Frontend Intern",
            company: "Senscript Technology",
            location: "Kochi, India",
            period: "06/2025 – Present",
            description: [
                "Developed responsive and interactive web interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS.",
                "Integrated APIs and optimized UI for usability, performance, and cross-browser compatibility."
            ]
        },
        {
            number: "02",
            role: "Student Intern",
            company: "Techmaghi",
            location: "Kochi, India",
            period: "2024",
            description: [
                "Completed a 15-day Full Stack Development internship.",
                "Built a training-based project involving frontend and backend integration."
            ]
        },
        {
            number: "03",
            role: "Student Intern",
            company: "Quest Innovative Solutions",
            location: "Kochi, India",
            period: "2024",
            description: [
                "Completed a 14-day internship on Python with Django.",
                "Developed web modules and gained hands-on experience in backend development."
            ]
        }
    ];

    const education = [
        {
            degree: "B.Tech in Computer Science and Engineering",
            institution: "Musaliar college of Engineering , Trivandrum",
            period: "2021 – 2025",
            score: "CGPA: 7.9"
        },
        {
            degree: "Higher Secondary School",
            institution: "Mary Matha HSS , Thrikkakara",
            period: "2019 – 2021",
            score: "98%"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
                {/* Header */}
                <div className="mb-20">
                    <h1 className="text-6xl md:text-8xl font-extrabold mb-8 animate-fade-in-up">
                        About me<span className="text-purple-500">.</span>
                    </h1>

                    <div className="border-l-4 border-purple-500 pl-8 max-w-4xl animate-fade-in-up">
                        <p className="text-2xl md:text-3xl font-medium text-gray-300 leading-relaxed">
                            Aafreen Fathima N — Frontend Developer passionate about building responsive, user-focused web applications with clean UI and modern tech.
                        </p>
                    </div>
                </div>

                {/* Profile Summary */}
                <section className="mb-32 max-w-4xl animate-fade-in-up">
                    <h2 className="text-4xl font-bold mb-8 text-white">Profile</h2>
                    <p className="text-xl text-gray-400 leading-relaxed font-light">
                        Frontend Developer with hands-on experience building responsive, user-focused web applications using React, JavaScript, and Tailwind CSS. Passionate about creating clean UI, interactive features, and real-world projects. Strong interest in modern web technologies and scalable frontend development.
                    </p>
                </section>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
                    <div className="p-8 rounded-[32px] bg-[#0A0A0A] border border-white/5">
                        <h3 className="text-xl font-bold mb-6 text-purple-400">Web Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.web.map(skill => (
                                <span key={skill} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-gray-300 text-sm">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 rounded-[32px] bg-[#0A0A0A] border border-white/5">
                        <h3 className="text-xl font-bold mb-6 text-purple-400">Frameworks & UI</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.frameworks.map(skill => (
                                <span key={skill} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-gray-300 text-sm">{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 rounded-[32px] bg-[#0A0A0A] border border-white/5">
                        <h3 className="text-xl font-bold mb-6 text-purple-400">Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.tools.map(skill => (
                                <span key={skill} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-gray-300 text-sm">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* My Experience */}
                <section ref={experienceRef} className="mb-40">
                    <h2 className="text-5xl font-extrabold mb-24">Professional Experience<span className="text-purple-500">.</span></h2>

                    <div className="relative space-y-16">
                        <div className="absolute left-[39px] top-10 bottom-10 w-[2px] bg-white/5 hidden md:block">
                            <motion.div
                                style={{ height: lineHeight }}
                                className="w-full bg-gradient-to-b from-purple-500 to-purple-400 origin-top"
                            />
                        </div>

                        {experiences.map((exp) => (
                            <div key={exp.number} className="relative pl-0 md:pl-28 group">
                                <span className="absolute left-0 top-0 text-7xl md:text-8xl font-black text-white/5 group-hover:text-purple-500/10 transition-colors z-0 hidden md:block leading-none">
                                    {exp.number}
                                </span>

                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-6 gap-2">
                                        <div>
                                            <h4 className="text-purple-500 font-bold uppercase tracking-widest text-xs mb-3">{exp.role}</h4>
                                            <h3 className="text-4xl md:text-5xl font-extrabold text-white">{exp.company}</h3>
                                            <p className="text-gray-500 mt-1">{exp.location}</p>
                                        </div>
                                        <span className="text-gray-500 font-medium text-lg">{exp.period}</span>
                                    </div>

                                    <div className="border-l-2 border-white/5 pl-8 md:border-none md:pl-0">
                                        <ul className="space-y-4 max-w-3xl">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="mb-40">
                    <h2 className="text-5xl font-extrabold mb-24">Education<span className="text-purple-500">.</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {education.map((edu, index) => (
                            <div key={index} className="p-10 rounded-[40px] bg-[#0A0A0A] border border-white/5 hover:border-purple-500/30 transition-all group">
                                <h4 className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-4">{edu.period}</h4>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{edu.degree}</h3>
                                <p className="text-gray-400 mb-4">{edu.institution}</p>
                                <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 font-bold">{edu.score}</span>
                            </div>
                        ))}
                    </div>
                </section>
                

                {/* CTA Section */}
                <section className="py-24 px-12 rounded-[50px] bg-[#0A0A0A] border border-white/5 text-center relative overflow-hidden group">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-10 relative z-10"> Turning Ideas into Interactive UIs</h2>
                    <div className="flex flex-wrap justify-center gap-5 relative z-10">
                        
                        <a
                            href="/resume.pdf"
                            download="Aafreen_Resume.pdf"
                           className="px-10 py-4 rounded-full bg-purple-600 text-white font-bold text-lg hover:bg-purple-700 hover:scale-105 transition-all"
                        >
                            Download Resume
                        </a>
                    </div>
                </section>
            </div>

            {/* Simple Footer */}
            <footer className="py-12 px-6 border-t border-white/5 text-center">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500">© 2025 Aafreen Fathima N. All Rights Reserved</p>
                    
                </div>
            </footer>
        </div>
    );
};

export default About;
