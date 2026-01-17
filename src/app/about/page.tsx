"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code, Database, Wrench, Award, User } from "lucide-react";

export default function About() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-10 pb-32">
      
      {/* 1. Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-gray-400 uppercase tracking-widest text-sm mb-2">Get to know me</h2>
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          About Me
        </h1>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 2. Left Column: Personal Bio & Education */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-1 space-y-8"
        >
          {/* Bio Card */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <User className="text-blue-400" />
              <h3 className="text-xl font-bold">Who I Am</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              I am <span className="text-white font-semibold">Aditya Upadhyay</span>, a Final Year B.Tech CSE student from <span className="text-white">Indore, MP</span>.
              <br /><br />
              Passionate about building scalable MERN stack applications. I love turning complex problems into simple, beautiful, and intuitive interface designs.
            </p>
          </div>

          {/* Education Card */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-purple-400" />
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="relative border-l border-white/20 pl-4 ml-2">
              <div className="mb-1 text-lg font-semibold text-white">B.Tech in CSE</div>
              <div className="text-sm text-gray-300">IPS Academy, Indore</div>
              <div className="text-xs text-gray-500 mb-2">2022 - 2026</div>
              <div className="inline-block px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded font-bold">
                CGPA: 7.5
              </div>
            </div>
          </div>
        </motion.div>


        {/* 3. Right Column: Skills & Certifications */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-2 space-y-8"
        >
          
          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Frontend Skills */}
            <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-cyan-400" />
                <h3 className="text-lg font-bold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js 16", "Tailwind CSS", "HTML5", "JavaScript (ES6+)", "Framer Motion"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-green-400" />
                <h3 className="text-lg font-bold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="text-orange-400" />
                <h3 className="text-lg font-bold">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Git & GitHub", "VS Code", "Postman", "Vercel", "Figma"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills (Added from your resume) */}
            <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-pink-400" />
                <h3 className="text-lg font-bold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Team Leadership", "Communication", "Adaptability"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-yellow-400" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1024px-Google_Cloud_logo.svg.png" alt="Google" className="w-8 h-8" />
                <div>
                  <div className="font-bold text-sm">Google Cloud</div>
                  <div className="text-xs text-gray-400">Digital Transformation</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-black/40 p-4 rounded-xl border border-white/5">
                 {/* Using Microsoft Logo placeholder */}
                 <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-xs font-bold">MS</div>
                <div>
                  <div className="font-bold text-sm">Microsoft Copilot</div>
                  <div className="text-xs text-gray-400">Productivity & AI</div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}