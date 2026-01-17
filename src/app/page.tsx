"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, ArrowRight, Download, Code2, Database, Layout, Server, Zap, Globe } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Skills for Infinite Scroll
  const skills = [
    "React.js", "Next.js", "Node.js", "MongoDB", "Express", "TypeScript", 
    "Tailwind CSS", "Redux", "Framer Motion", "Git", "Docker", "AWS"
  ];

  return (
    <div className="bg-[#050505] text-white selection:bg-purple-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section ref={targetRef} className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)"></div>

        {/* Glow Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>

        {/* Main Hero Content */}
        <motion.div style={{ opacity, scale }} className="z-10 text-center px-4 max-w-5xl mx-auto mt-[-50px]">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-medium mb-8 uppercase tracking-wider"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for Projects
          </motion.div>

          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
              Aditya
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-gray-600 to-gray-800">
              Upadhyay
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Full Stack Developer specializing in <span className="text-white font-medium">MERN & Next.js</span>. 
            I build scalable, high-performance web applications with stunning UI/UX.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link href="/projects">
              <button className="group px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                View Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 backdrop-blur-sm transition-all">
                Contact Me
              </button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
               <button className="p-4 border border-white/10 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all">
                 <Download size={20} />
               </button>
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex gap-6 justify-center"
          >
             <Link href="https://github.com/aadi90392" target="_blank" className="text-gray-500 hover:text-white hover:scale-110 transition-all"><Github size={28} /></Link>
             <Link href="https://www.linkedin.com/in/adityaupadhyay-tech/" target="_blank" className="text-gray-500 hover:text-blue-400 hover:scale-110 transition-all"><Linkedin size={28} /></Link>
          </motion.div>

        </motion.div>

        {/* Scroll Hint */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll Down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>


      {/* ================= INFINITE MARQUEE SECTION ================= */}
      <section className="py-10 bg-black border-y border-white/5 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
        
        <div className="flex gap-10 animate-infinite-scroll min-w-max">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-2 text-2xl font-bold text-gray-500/40 uppercase tracking-widest whitespace-nowrap">
              <Zap size={20} className="text-purple-500" /> {skill}
            </div>
          ))}
        </div>
      </section>


      {/* ================= WHAT I DO SECTION ================= */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2">My Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">What I Bring to the Table</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <Layout size={30} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Frontend Development</h4>
              <p className="text-gray-400 leading-relaxed">
                Crafting responsive, interactive, and aesthetic user interfaces using React.js, Next.js, and Tailwind CSS.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                <Server size={30} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Backend Architecture</h4>
              <p className="text-gray-400 leading-relaxed">
                Building robust and scalable APIs using Node.js, Express, and managing databases like MongoDB & PostgreSQL.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 text-green-400 group-hover:scale-110 transition-transform">
                <Globe size={30} />
              </div>
              <h4 className="text-2xl font-bold mb-4">Full Stack Solutions</h4>
              <p className="text-gray-400 leading-relaxed">
                End-to-end development from database design to deployment on cloud platforms like Vercel and AWS.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ================= STATS / BIO SECTION ================= */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block p-10 border border-white/10 rounded-3xl bg-black/50 backdrop-blur-md"
            >
              <Code2 size={48} className="mx-auto text-gray-500 mb-6" />
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                "I don't just write code.<br/> I solve real-world problems."
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Whether it's optimizing performance, ensuring scalability, or creating pixel-perfect designs, 
                I focus on delivering value through technology.
              </p>
            </motion.div>
        </div>
      </section>


      {/* ================= FINAL CTA SECTION ================= */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to start?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            I am currently available for freelance work and internship opportunities. Let's build something amazing together.
          </p>
          
          <Link href="/contact">
            <button className="px-10 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Let's Talk
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/10">
        <p>© 2026 Aditya Upadhyay. Built with Next.js & Tailwind.</p>
      </footer>

      {/* Add Animation for Marquee in global css if needed, or use inline style */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}