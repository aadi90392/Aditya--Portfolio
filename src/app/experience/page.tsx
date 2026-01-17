"use client";
import { motion } from "framer-motion";
import { 
  Briefcase, Calendar, MapPin, Building2, Globe, Server, 
  Code2, Rocket, Cpu, ArrowRight, Layers, Users, Laptop, Zap 
} from "lucide-react";
import Link from "next/link";

// 1. FEATURED EXPERIENCE (Vosyn)
const featuredExperience = {
  company: "Vosyn",
  role: "Engineering Core Team",
  location: "North America (Remote)",
  date: "Jan 2026 - Present",
  type: "Internship",
  tagline: "Architecting Next-Gen AI Web Apps",
  description: [
    "Stepping onto the Global Stage! Joined Vosyn, a pioneering Global AI company, working alongside 500+ engineers to break language barriers.",
    "Architecting scalable, real-time translation interfaces that serve millions globally. Focusing on low-latency data transmission and high-performance UI.",
    "Collaborating directly with founders to translate the vision of 'Unified Communication' into deployable, robust code structures."
  ],
  tags: ["#GlobalEngineering", "#ArtificialIntelligence", "#MERNStack", "#NorthAmericanTech"],
  tech: ["Next.js 15", "Real-time AI", "Cloud Architecture", "Scalable Systems", "TypeScript", "Tailwind CSS", "WebSockets"]
};

// 2. TIMELINE DATA (Expanded Skills)
const pastExperiences = [
  {
    role: "Web Developer",
    company: "Kodrish Innovation",
    location: "Indore, India",
    date: "June 2024 - Present",
    description: "Spearheading the full software development lifecycle (SDLC). Responsible for deploying production-grade applications on Vercel & Render with 99.9% uptime reliability.",
    skills: [
      "React.js", "Node.js", "Redux Toolkit", "System Design", 
      "Vercel Deployment", "Render CI/CD", "Git Version Control", "RESTful APIs"
    ],
    icon: <Code2 />,
    color: "text-green-400"
  },
  {
    role: "Associate Lead Developer",
    company: "Infotact Solutions",
    location: "Remote",
    date: "July 2025 - Sept 2025",
    description: "Led a squad of developers to build modular project components. Conducted code reviews and optimized backend queries under the direct mentorship of the CTO.",
    skills: [
      "Team Leadership", "Agile & Scrum", "Full Stack Arch.", 
      "Code Review", "Jira Management", "Mentorship", "Database Optimization", "Collaboration"
    ],
    icon: <Users />,
    color: "text-purple-400"
  },
  {
    role: "Full Stack Developer Intern",
    company: "Code Alpha",
    location: "Remote",
    date: "July 2025 - Aug 2025",
    description: "Built pixel-perfect responsive web applications. Focused on writing clean, reusable components and integrating secure third-party APIs.",
    skills: [
      "React.js", "JavaScript (ES6+)", "Responsive Design", 
      "API Integration", "CSS3/HTML5", "Frontend Logic", "Debugging", "UI/UX Principles"
    ],
    icon: <Laptop />,
    color: "text-orange-400"
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white py-20 px-4 md:px-10 pb-20 relative overflow-x-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)"></div>

      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-gray-400 uppercase tracking-widest text-sm mb-2">My Professional Journey</h2>
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
          Career Timeline
        </h1>
      </motion.div>

      {/* ================= FEATURED EXPERIENCE (VOSYN) ================= */}
      <div className="max-w-6xl mx-auto mb-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-3xl p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_50px_rgba(59,130,246,0.2)]"
        >
          <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-12 h-full relative overflow-hidden">
            
            {/* Decoration */}
            <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
              <Globe size={400} />
            </div>

            {/* Badge */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-wider animate-pulse">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Current Role
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <Building2 size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">Vosyn</h2>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                    {featuredExperience.role}
                  </h3>
                  <p className="text-gray-400 font-medium mb-6 flex items-center gap-2">
                    <MapPin size={16} /> {featuredExperience.location}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredExperience.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">Duration</div>
                  <div className="text-xl font-bold text-white flex items-center gap-2">
                    <Calendar className="text-blue-500" size={20} /> {featuredExperience.date}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 border-l border-white/10 lg:pl-12 flex flex-col justify-center">
                 <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Rocket className="text-yellow-400" /> {featuredExperience.tagline}
                 </h4>
                 <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                    {featuredExperience.description.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                 </div>
                 <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-3">
                    {featuredExperience.tags.map((tag, idx) => (
                      <span key={idx} className="text-sm font-bold text-blue-400 hover:text-white transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= TIMELINE SECTION ================= */}
      <div className="max-w-4xl mx-auto relative z-10 mb-32">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-16 text-gray-500"
        >
          Previous Roles
        </motion.h3>

        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-gray-700 to-transparent opacity-30"></div>

        {pastExperiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row gap-8 mb-20 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[26px] md:left-1/2 md:-translate-x-1/2 top-8 w-4 h-4 bg-[#050505] border-4 border-gray-600 rounded-full z-20"></div>

            {/* Card */}
            <div className="ml-20 md:ml-0 md:w-1/2 px-4">
              <div className="group bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:bg-white/5 transition-all hover:border-white/20 shadow-lg">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl text-gray-400 group-hover:text-white transition-colors">
                      {exp.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h4>
                      <div className="text-sm text-gray-400 font-medium">{exp.company}</div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 bg-black/40 rounded-md border border-white/5 text-gray-500 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-gray-500 border-t border-white/5 pt-4">
                  <span className="flex items-center gap-1"><Calendar size={12}/> {exp.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={12}/> {exp.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= NEW FOOTER / CTA SECTION ================= */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <div className="p-10 rounded-3xl bg-gradient-to-b from-zinc-900 to-black border border-white/10 relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-purple-500/5 blur-3xl"></div>
          
          <div className="relative z-10">
             <div className="inline-block p-3 bg-white/5 rounded-full mb-6">
               <Zap className="text-yellow-400" size={32} />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready for the next big thing?</h2>
             <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
               I am always looking for challenging projects and teams where I can contribute my Full Stack & AI expertise.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/contact">
                  <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center gap-2">
                    Let's Connect <ArrowRight size={20} />
                  </button>
               </Link>
               <Link href="/projects">
                  <button className="px-8 py-4 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all">
                    View My Work
                  </button>
               </Link>
             </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}