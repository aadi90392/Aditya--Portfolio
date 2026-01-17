"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Development Engineer (SDE) Intern",
    company: "Vosyn",
    location: "Remote (Canada/US)",
    date: "Jan 2026 - Present",
    description: "Working with an AI-powered multilingual content platform. Developing scalable solutions using AI and the MERN stack.",
    skills: ["Next.js", "AI Integration", "MERN Stack"],
    current: true,
  },
  {
    role: "Web Developer",
    company: "Kodrish Innovation & Solution",
    location: "Indore, India",
    date: "June 2024 - Present",
    description: "Leading frontend and backend development. Deploying full-stack applications using Vercel/Render and managing version control.",
    skills: ["React.js", "Node.js", "System Design"],
    current: true,
  },
  {
    role: "Associate Lead Developer (Intern)",
    company: "Infotact Solutions",
    location: "Remote",
    date: "July 2025 - Sept 2025",
    description: "Managed a team of developers to build project modules. Gained hands-on experience in full-stack development under the CTO.",
    skills: ["Team Leadership", "Full Stack", "Agile"],
    current: false,
  },
  {
    role: "Full Stack Developer Intern",
    company: "Code Alpha",
    location: "Remote",
    date: "July 2025 - Aug 2025",
    description: "Built responsive web applications with React.js. Integrated RESTful APIs and practiced clean code structures.",
    skills: ["React.js", "API Integration", "JavaScript"],
    current: false,
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-10 pb-32">
      
      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-gray-400 uppercase tracking-widest text-sm mb-2">My Journey</h2>
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Professional Experience
        </h1>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto relative">
        
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-transparent opacity-30"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] top-0 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] z-10"></div>

            {/* Content Card */}
            <div className="md:w-1/2">
              <div className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all ${
                 exp.current ? "shadow-[0_0_30px_rgba(59,130,246,0.1)] border-blue-500/30" : ""
              }`}>
                
                {/* Date & Location */}
                <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-2 uppercase tracking-wide">
                  <span className="flex items-center gap-1 text-blue-400 font-bold">
                    <Calendar size={14} /> {exp.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-lg text-gray-300 mb-4 flex items-center gap-2">
                  <Briefcase size={16} className="text-purple-400" />
                  {exp.company}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
            
            {/* Empty space for alignment */}
            <div className="md:w-1/2"></div>
            
          </motion.div>
        ))}
      </div>
    </div>
  );
}