"use client";
import { motion, Variants } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Link from "next/link";

// Tumhare Projects ka Data
const projects = [
  {
    title: "Estate Connect",
    description: "A full-stack real estate marketplace with Google OAuth, Advanced Search, and Admin Dashboard.",
    tech: ["MERN Stack", "Tailwind CSS", "Cloudinary"],
    live: "https://estate-connect-ten.vercel.app/",
    github: "https://github.com/aadi90392",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Yoga Master",
    description: "EdTech & E-commerce platform with Stripe Payments and Role-Based Access Control (RBAC).",
    tech: ["React.js", "Node.js", "Stripe API"],
    live: "https://yoga-master-full.vercel.app/",
    github: "https://github.com/aadi90392",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "E-Commerce Store",
    description: "A modern, responsive e-commerce frontend interface with cart functionality.",
    tech: ["React.js", "Redux", "Tailwind"],
    live: "https://code-alpha-ecommerce-store.vercel.app/",
    github: "https://github.com/aadi90392",
    color: "from-orange-500 to-red-500",
  },
];

// Animation Variants (TypeScript Fixed)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring" as const, // <-- Ye 'as const' error fix karega
      stiffness: 100 
    } 
  },
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-10 pb-32">
      
      {/* Page Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-gray-400 uppercase tracking-widest text-sm mb-2">My Work</h2>
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Featured Projects
        </h1>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-colors"
          >
            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

            <div className="p-8 flex flex-col h-full">
              {/* Icon & Title */}
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20`}>
                  <Code2 className="text-white" size={24} />
                </div>
                <div className="flex gap-3">
                  <Link href={project.github} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </Link>
                  <Link href={project.live} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}