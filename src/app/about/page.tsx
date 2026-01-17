"use client";
import { motion } from "framer-motion";
import { 
  GraduationCap, Code2, Database, Wrench, Award, User, 
  Download, Globe, Cpu, Server, CheckCircle, Terminal 
} from "lucide-react";
import Link from "next/link";

export default function About() {
  
  // Fake Certifications Data (Jo tumne manga tha)
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
      color: "from-orange-400 to-yellow-500",
      icon: <Globe />
    },
    {
      title: "Meta Front-End Developer",
      issuer: "Meta (Facebook)",
      date: "2024",
      color: "from-blue-400 to-blue-600",
      icon: <Code2 />
    },
    {
      title: "MongoDB Associate Developer",
      issuer: "MongoDB Inc.",
      date: "2024",
      color: "from-green-400 to-green-600",
      icon: <Database />
    },
    {
      title: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      date: "2023",
      color: "from-red-400 to-yellow-400",
      icon: <Server />
    },
    {
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "2023",
      color: "from-green-500 to-emerald-500",
      icon: <Terminal />
    },
    {
      title: "Microsoft Copilot & AI",
      issuer: "Microsoft",
      date: "2024",
      color: "from-blue-500 to-cyan-500",
      icon: <Cpu />
    }
  ];

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
    <div className="min-h-screen bg-[#050505] text-white py-20 px-4 md:px-10 pb-32 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)"></div>

      {/* 1. Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-gray-400 uppercase tracking-widest text-sm mb-2">My Journey & Credentials</h2>
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
          About Me
        </h1>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        
        {/* ================= LEFT COLUMN (Bio & Education) ================= */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-1 space-y-6"
        >
          {/* Bio Card */}
          <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-md h-full flex flex-col hover:border-white/20 transition-all shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white shadow-lg">
                <User size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Who I Am</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Developer & Engineer</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-base">
              I am <span className="text-white font-semibold">Aditya Upadhyay</span>, a B.Tech CSE finalist specializing in <span className="text-blue-400">Full Stack Engineering</span>.
              <br /><br />
              Beyond just coding, I focus on <span className="text-purple-400">System Architecture</span> and performance. I bridge the gap between complex backend logic and smooth frontend experiences.
            </p>
            <div className="mt-auto pt-6 border-t border-white/10">
               <Link href="/resume.pdf" target="_blank">
                <button className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-all shadow-lg hover:shadow-white/20">
                  <Download size={20} /> Download Resume
                </button>
               </Link>
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:border-white/20 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl text-white shadow-lg">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Education</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Academic Background</p>
              </div>
            </div>
            <div className="relative border-l-2 border-white/10 pl-6 ml-2 space-y-4">
              
              {/* College */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-green-500 border-4 border-[#050505]"></div>
                <div className="text-xl font-bold text-white">B.Tech in CSE</div>
                <div className="text-sm text-gray-300">IPS Academy, Indore</div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-gray-500">2022 - 2026</span>
                  <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded">CGPA: 7.5</span>
                </div>
              </div>

              {/* High School (Optional filler) */}
              <div className="relative pt-4">
                <div className="absolute -left-[31px] top-5 w-4 h-4 rounded-full bg-gray-600 border-4 border-[#050505]"></div>
                <div className="text-lg font-bold text-gray-400">Higher Secondary</div>
                <div className="text-sm text-gray-500">MP Board</div>
              </div>

            </div>
          </div>
        </motion.div>


        {/* ================= RIGHT COLUMN (Skills & Certs) ================= */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-2 space-y-8"
        >
          
          {/* 1. Skills Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Frontend", icon: <Code2 />, skills: ["React.js", "Next.js 16", "Tailwind", "Framer Motion"], color: "text-cyan-400", bg: "bg-cyan-500/10" },
              { title: "Backend", icon: <Database />, skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"], color: "text-green-400", bg: "bg-green-500/10" },
              { title: "DevOps & Tools", icon: <Wrench />, skills: ["Git/GitHub", "Docker", "AWS", "Vercel"], color: "text-orange-400", bg: "bg-orange-500/10" },
              { title: "Core Concepts", icon: <Cpu />, skills: ["DSA", "OOPs", "System Design", "DBMS"], color: "text-pink-400", bg: "bg-pink-500/10" },
            ].map((cat, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl hover:bg-white/5 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${cat.color} ${cat.bg} p-2 rounded-lg`}>{cat.icon}</span>
                  <h4 className="font-bold text-lg">{cat.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className="text-xs font-medium px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-gray-300">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. CERTIFICATIONS SECTION (The "Jayda Acha" Part) */}
          <motion.div variants={itemVariants} className="pt-4">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-yellow-400" size={28} />
              <h3 className="text-2xl font-bold">Certifications & Badges</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="group relative bg-zinc-900/80 border border-white/10 p-5 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300"
                >
                  {/* Hover Gradient Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} bg-opacity-10 text-white shadow-inner`}>
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                        <span>{cert.issuer}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    {/* Verification Checkmark */}
                    <CheckCircle size={16} className="text-green-500 ml-auto opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}