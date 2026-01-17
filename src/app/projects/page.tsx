"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, X, ChevronRight } from "lucide-react";
import Image from "next/image";

// --- Project Data (Updated with GitHub Links & Images) ---
const projects = [
  {
    id: 1,
    title: "Estate Connect",
    category: "Real Estate Marketplace",
    description: "A full-stack real estate platform facilitating property listings for Sale and Rent. Users can search properties by type, price, and amenities. Includes secure Google OAuth login and an Admin Dashboard.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Cloudinary"],
    live: "https://estate-connect-ten.vercel.app/",
    github: "https://github.com/aadi90392/Estate-connect",
    // New Real Estate Image
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop", 
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    title: "Yoga Master",
    category: "EdTech & E-commerce",
    description: "A comprehensive Learning Management System (LMS) with Role-Based Access Control (RBAC) for Admins, Instructors, and Students. Features Stripe payment integration for course purchases.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API"],
    live: "https://yoga-master-full.vercel.app/",
    github: "https://github.com/aadi90392/yoga-master-full",
    // New Yoga Image (Fixed Link)
   image: "https://themindstudios.com/blog/content/images/2023/01/IMG-4-Features-for-a-yoga-teacher-app.jpg",
    color: "from-purple-600 to-pink-500",
  },
  {
    id: 3,
    title: "E-Commerce Store",
    category: "Shopping Platform",
    description: "A modern, responsive e-commerce frontend interface showing product listings, cart functionality, and a seamless checkout flow UI designed with modern web technologies.",
    tech: ["React.js", "Redux Toolkit", "Tailwind CSS"],
    live: "https://code-alpha-ecommerce-store.vercel.app/",
    github: "https://github.com/aadi90392/CodeAlpha_Ecommerce_Store",
    // New Shopping Image
    image:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
    color: "from-orange-500 to-red-500",
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-10 pb-32">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-gray-400 uppercase tracking-widest text-sm mb-2">Portfolio</h2>
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Featured Projects
        </h1>
        <p className="text-gray-500 mt-4 text-sm">Tap on a card to view details</p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            whileHover={{ y: -8 }}
            className="group relative cursor-pointer bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all shadow-lg"
          >
            {/* Card Image */}
            <div className="h-48 w-full relative overflow-hidden">
                <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            </div>

            {/* Card Content */}
            <div className="p-6 relative z-10">
              <h3 className="text-xl font-bold mb-1 text-white">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{project.category}</p>
              
              <div className="flex items-center text-sm text-blue-400 font-medium group-hover:underline gap-1">
                View Details <ChevronRight size={16} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            <div className="fixed inset-0 flex items-center justify-center z-[51] p-4 pointer-events-none">
              {projects.map((project) => (
                project.id === selectedId && (
                  <motion.div
                    key={project.id}
                    layoutId={`card-${project.id}`}
                    className="bg-[#0f0f0f] w-full max-w-2xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl pointer-events-auto relative flex flex-col max-h-[90vh]"
                  >
                    {/* Close Button */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                      className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-white/20 text-white z-20 transition-colors"
                    >
                      <X size={20} />
                    </button>

                    {/* Modal Image Header */}
                    <div className="h-56 w-full relative">
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill 
                            className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent`} />
                        
                        <div className="absolute bottom-4 left-6">
                            <h2 className="text-3xl font-bold text-white drop-shadow-lg">{project.title}</h2>
                            <p className="text-gray-200 font-medium drop-shadow-md">{project.category}</p>
                        </div>
                    </div>

                    {/* Modal Body (Scrollable if needed) */}
                    <div className="p-6 md:p-8 overflow-y-auto">
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-200 border border-white/5">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 mt-auto">
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors"
                        >
                          <ExternalLink size={18} /> Live Demo
                        </a>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-bold py-3 rounded-xl transition-colors"
                        >
                          <Github size={18} /> GitHub
                        </a>
                      </div>
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