"use client";
import { useState, MouseEvent } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight, Sparkles, Lock, Code2, Cpu, Zap, Layout } from "lucide-react";
import Image from "next/image";

// --- 1. FEATURED PROJECTS (Premium, Links wale) ---
const featuredProjects = [
  {
    id: 1,
    title: "Estate Connect",
    category: "Real Estate Marketplace",
    description: "A full-stack real estate platform facilitating property listings for Sale and Rent. Users can search properties by type, price, and amenities. Includes secure Google OAuth login and an Admin Dashboard.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    live: "https://estate-connect-ten.vercel.app/",
    github: "https://github.com/aadi90392/Estate-connect",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop", 
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "Yoga Master",
    category: "EdTech & LMS Platform",
    description: "A comprehensive Learning Management System (LMS) with Role-Based Access Control (RBAC). Features Stripe payment integration for course purchases and progress tracking.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API"],
    live: "https://yoga-master-full.vercel.app/",
    github: "https://github.com/aadi90392/yoga-master-full",
    image: "https://themindstudios.com/blog/content/images/2023/01/IMG-4-Features-for-a-yoga-teacher-app.jpg",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    category: "Modern Shopping Platform",
    description: "A modern, responsive e-commerce frontend interface showing product listings, cart functionality, and a seamless checkout flow UI designed with modern web technologies.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    live: "https://code-alpha-ecommerce-store.vercel.app/",
    github: "https://github.com/aadi90392/CodeAlpha_Ecommerce_Store",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
    color: "from-orange-500 to-red-500",
  },
];

// --- 2. DUMMY PROJECTS (No Links, Archive feel) ---
const otherProjects = [
  {
    title: "Chat-O-Sphere",
    category: "Real-time Messaging",
    description: "A WebSocket-based chat application allowing users to create rooms and send instant messages. Optimized for low latency and high concurrency.",
    tech: ["Socket.io", "React", "Node.js"],
  },
  {
    title: "TaskFlow Pro",
    category: "Productivity Tool",
    description: "A Kanban-style task management board inspired by Trello. Features drag-and-drop functionality and local storage persistence.",
    tech: ["React", "DnD Kit", "Tailwind"],
  },
  {
    title: "Weather Lens",
    category: "Data Visualization",
    description: "A weather dashboard that visualizes global climate data using interactive charts and maps. Consumes OpenWeatherMap API.",
    tech: ["Next.js", "Chart.js", "Axios"],
  },
  {
    title: "Algo Visualizer",
    category: "Educational Tool",
    description: "An interactive platform to visualize sorting and pathfinding algorithms like Bubble Sort and Dijkstra in real-time.",
    tech: ["JavaScript", "Canvas API"],
  },
];

// --- 3D TILT CARD COMPONENT (For Featured) ---
function TiltCard({ project, onClick }: { project: any; onClick: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]); 
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]); 

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className="relative group cursor-pointer h-[420px] w-full rounded-[2rem] bg-zinc-900/40 border border-white/10 backdrop-blur-md perspective-1000 shadow-2xl"
    >
      {/* Spotlight Effect */}
      <motion.div
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([newX, newY]) =>
              `radial-gradient(600px circle at ${newX + 150}px ${newY + 200}px, rgba(255,255,255,0.08), transparent 40%)`
          ),
        }}
        className="absolute inset-0 rounded-[2rem] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative h-full flex flex-col z-10 p-5 transform-gpu" style={{ transform: "translateZ(30px)" }}>
        <div className="relative h-52 w-full rounded-2xl overflow-hidden shadow-lg">
           <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
          <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white shadow-xl">
            {project.category}
          </div>
        </div>

        <div className="mt-6 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 drop-shadow-md">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mt-3 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
            <div className="flex gap-2">
                {project.tech.slice(0, 3).map((t: string, i: number) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-purple-500 transition-colors duration-500 delay-75" />
                ))}
            </div>
            <div className="flex items-center gap-1 text-sm font-bold text-gray-500 group-hover:text-white transition-colors">
                View Project <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#050505] text-white py-24 px-4 md:px-10 pb-20 relative overflow-hidden perspective-1000">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>

      {/* --- HEADER --- */}
      <div className="relative z-10 max-w-7xl mx-auto mb-20 text-center">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-300 mb-6"
        >
            <Sparkles size={16} /> Selected Work
        </motion.div>
        <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-600 tracking-tight"
        >
            Featured <br className="md:hidden"/> Projects
        </motion.h1>
      </div>

      {/* --- SECTION 1: FEATURED (3D Cards) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10 px-2 mb-32">
        {featuredProjects.map((project) => (
          <TiltCard key={project.id} project={project} onClick={() => setSelectedId(project.id)} />
        ))}
      </div>


      {/* --- SECTION 2: ARCHIVE (Dummy Projects) --- */}
      <div className="max-w-7xl mx-auto relative z-10 px-2 mb-32">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent flex-grow"></div>
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">More Projects</h2>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: index * 0.1 }}
               viewport={{ once: true }}
               className="group p-8 rounded-3xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-300"
             >
               <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white/5 rounded-xl text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all">
                    <Code2 size={24} />
                  </div>
                  <div className="flex gap-2">
                    {/* Lock Icon showing no link */}
                    <div className="p-2 text-gray-600 group-hover:text-gray-400 transition-colors" title="Source Private">
                      <Lock size={18} />
                    </div>
                  </div>
               </div>
               
               <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
               <p className="text-sm text-gray-500 mb-6">{project.description}</p>
               
               <div className="flex flex-wrap gap-2">
                 {project.tech.map((t, i) => (
                   <span key={i} className="text-xs font-mono text-gray-400 px-2 py-1 bg-black/30 rounded-md border border-white/5">
                     {t}
                   </span>
                 ))}
               </div>
             </motion.div>
          ))}
        </div>
      </div>


      {/* --- SECTION 3: THEORY / PHILOSOPHY (Footer Area) --- */}
      <div className="max-w-5xl mx-auto relative z-10 px-4">
        <div className="bg-gradient-to-b from-zinc-900/40 to-black border border-white/10 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
           
           {/* Decorative Background */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>

           <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">My Development Philosophy</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-2">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Performance First</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I prioritize optimized algorithms and efficient code structures to ensure applications run smoothly even under heavy loads.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-2">
                  <Layout size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Pixel Perfect</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                   Aesthetics matter. I strive for clean, responsive, and accessible UI/UX that provides a seamless experience across all devices.
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-2">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Scalable Architecture</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Building with growth in mind. I write modular and maintainable code that allows easy feature expansion and team collaboration.
                </p>
              </div>
           </div>

           <div className="mt-12 pt-10 border-t border-white/10">
              <p className="text-gray-500 italic">"Code is like humor. When you have to explain it, it’s bad."</p>
           </div>
        </div>
      </div>


      {/* --- POPUP MODAL (Only for Featured) --- */}
      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50"
            />

            <div className="fixed inset-0 flex items-center justify-center z-[51] p-4 pointer-events-none">
              {featuredProjects.map((project) => (
                project.id === selectedId && (
                  <motion.div
                    key={project.id}
                    layoutId={`card-${project.id}`}
                    className="bg-[#0a0a0a] w-full max-w-4xl rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl pointer-events-auto flex flex-col md:flex-row max-h-[85vh] md:h-[600px]"
                  >
                    <div className="w-full md:w-1/2 h-64 md:h-full relative">
                        <Image src={project.image} alt={project.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent to-transparent" />
                        <button onClick={(e) => { e.stopPropagation(); setSelectedId(null); }} className="absolute top-6 left-6 p-3 bg-black/50 backdrop-blur-md rounded-full text-white md:hidden">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto bg-[#0a0a0a] relative">
                        <button onClick={(e) => { e.stopPropagation(); setSelectedId(null); }} className="absolute top-8 right-8 p-2 bg-white/5 hover:bg-white/20 rounded-full text-gray-400 hover:text-white transition-colors hidden md:block">
                            <X size={24} />
                        </button>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent border border-white/10`}>
                                {project.category}
                            </span>
                            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">{project.title}</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">{project.description}</p>
                            <div className="mb-10">
                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-gray-300 font-medium">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-4 mt-auto">
                                <a href={project.live} target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-bold py-4 rounded-xl hover:scale-105 transition-transform">
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                                <a href={project.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-white font-bold py-4 rounded-xl hover:bg-zinc-700 hover:scale-105 transition-transform">
                                    <Github size={20} /> Code
                                </a>
                            </div>
                        </motion.div>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}