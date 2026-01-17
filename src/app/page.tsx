"use client";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, ArrowRight, Download, Layout, Server, Database, Zap, Globe, Cpu, Terminal, Code2, BrainCircuit } from "lucide-react";
import { useRef, MouseEvent } from "react";

// --- SPOTLIGHT CARD COMPONENT (For Expertise) ---
function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-zinc-900/50 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(120, 40, 200, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Skills for Infinite Scroll
  const skills = [
    "React.js", "Next.js", "Node.js", "MongoDB", "Express", "TypeScript", 
    "Tailwind CSS", "Redux", "Docker", "AWS", "AI Integration", "System Design"
  ];

  // The "Tech DNA" Tags (Your requested details)
  const profileTags = [
    { icon: <BrainCircuit size={14}/>, text: "Engineering Core Team @ Vosyn", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { icon: <Cpu size={14}/>, text: "Architecting Next-Gen AI Web Apps", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
    { icon: <Database size={14}/>, text: "MERN Stack Specialist", color: "bg-green-500/10 text-green-400 border-green-500/20" },
    { icon: <Globe size={14}/>, text: "Open Source Contributor", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
    { icon: <Terminal size={14}/>, text: "Final Year CSE '26", color: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20" },
  ];

  return (
    <div className="bg-[#050505] text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* ================= HERO SECTION (THE TANASHAHI START) ================= */}
      <section ref={targetRef} className="min-h-screen w-full flex flex-col justify-center items-center relative">
        
        {/* Background Grid & Ambience */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

        <motion.div style={{ opacity, scale }} className="z-10 text-center px-4 max-w-6xl mx-auto mt-[-50px]">
          
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-xs font-bold mb-8 uppercase tracking-widest shadow-[0_0_10px_rgba(34,197,94,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for Hire
          </motion.div>

          {/* Name */}
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 drop-shadow-2xl">
              Aditya
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-400 via-gray-600 to-gray-800">
              Upadhyay
            </span>
          </motion.h1>

          {/* New Advanced Bio (The Upgrade) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-10"
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light mb-8 leading-relaxed">
              Full Stack Engineer specializing in <span className="text-white font-medium">Scalable Web Apps</span> & <span className="text-white font-medium">AI Integration</span>.
            </p>

            {/* Tech DNA Tags */}
            <div className="flex flex-wrap justify-center gap-3">
              {profileTags.map((tag, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs md:text-sm font-semibold backdrop-blur-sm ${tag.color} hover:scale-105 transition-transform cursor-default`}
                >
                  {tag.icon} {tag.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link href="/projects">
              <button className="group px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full text-lg hover:bg-white/10 backdrop-blur-sm transition-all">
                Let's Talk
              </button>
            </Link>
            <Link href="/resume.pdf" target="_blank">
               <button className="p-4 border border-white/10 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all group" title="Download Resume">
                 <Download size={20} className="group-hover:animate-bounce" />
               </button>
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
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
          <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
        </motion.div>
      </section>


      {/* ================= INFINITE MARQUEE ================= */}
      <section className="py-10 bg-[#050505] border-y border-white/5 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
        <div className="flex gap-10 animate-infinite-scroll min-w-max">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-2 text-xl font-bold text-gray-600 uppercase tracking-widest whitespace-nowrap">
              <Zap size={18} className="text-purple-500" /> {skill}
            </div>
          ))}
        </div>
      </section>


      {/* ================= WHAT I DO (SPOTLIGHT CARDS) ================= */}
      <section className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-2">My Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white">Engineering Excellence</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Frontend */}
            <SpotlightCard className="rounded-3xl p-8">
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20">
                <Layout size={30} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Frontend Architecture</h4>
              <p className="text-gray-400 leading-relaxed mb-4">
                Creating pixel-perfect, responsive interfaces using <strong>React.js</strong> and <strong>Next.js</strong>. I focus on micro-interactions and performance optimization.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Framer Motion Animations</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Server Side Rendering (SSR)</li>
              </ul>
            </SpotlightCard>

            {/* Card 2: Backend */}
            <SpotlightCard className="rounded-3xl p-8">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/20">
                <Server size={30} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Scalable Backend</h4>
              <p className="text-gray-400 leading-relaxed mb-4">
                Architecting robust APIs with <strong>Node.js</strong> and <strong>Express</strong>. Designing efficient database schemas with <strong>MongoDB</strong> for high availability.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> RESTful API Design</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Authentication & Security</li>
              </ul>
            </SpotlightCard>

            {/* Card 3: Full Stack */}
            <SpotlightCard className="rounded-3xl p-8">
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 text-green-400 border border-green-500/20">
                <Globe size={30} />
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white">Full Stack & AI</h4>
              <p className="text-gray-400 leading-relaxed mb-4">
                Integrating AI models into web apps and managing end-to-end deployment pipelines on <strong>AWS</strong> and <strong>Vercel</strong>.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> AI/LLM Integration</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> CI/CD Pipelines</li>
              </ul>
            </SpotlightCard>

          </div>
        </div>
      </section>


      {/* ================= ENGINEERING MINDSET (THEORY UPGRADE) ================= */}
      <section className="py-24 bg-zinc-900/20 border-y border-white/5 relative">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block p-10 md:p-14 border border-white/10 rounded-[3rem] bg-[#0a0a0a] relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-600/20 transition-all duration-700"></div>
              
              <Code2 size={56} className="mx-auto text-white mb-8" />
              
              <h3 className="text-3xl md:text-6xl font-bold mb-8 leading-tight">
                "I don't just write code.<br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">I engineer solutions.</span>"
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12 border-t border-white/10 pt-10">
                 <div>
                    <h5 className="text-white font-bold mb-2 flex items-center gap-2"><Zap size={16} className="text-yellow-400"/> Speed</h5>
                    <p className="text-gray-500 text-sm">Optimizing load times and server response for instant interactions.</p>
                 </div>
                 <div>
                    <h5 className="text-white font-bold mb-2 flex items-center gap-2"><Database size={16} className="text-blue-400"/> Scalability</h5>
                    <p className="text-gray-500 text-sm">Designing systems that grow with user demand without breaking.</p>
                 </div>
                 <div>
                    <h5 className="text-white font-bold mb-2 flex items-center gap-2"><Layout size={16} className="text-purple-400"/> Experience</h5>
                    <p className="text-gray-500 text-sm">Crafting intuitive journeys that keep users engaged.</p>
                 </div>
              </div>
            </motion.div>
        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight">Let's Build the Future.</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            Ready to bring your ideas to life? I am currently available for new opportunities.
          </p>
          
          <Link href="/contact">
            <button className="px-12 py-6 bg-white text-black font-bold text-xl rounded-full hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.4)]">
              Start a Project
            </button>
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-700 text-sm border-t border-white/5">
        <p>© 2026 Aditya Upadhyay. Engineering Excellence.</p>
      </footer>

      {/* CSS Animation */}
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