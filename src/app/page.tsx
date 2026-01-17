"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* 1. Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-700 rounded-full mix-blend-screen filter blur-[120px] opacity-25 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-700 rounded-full mix-blend-screen filter blur-[120px] opacity-25 animate-pulse"></div>

      {/* 2. Main Content */}
      <div className="z-10 text-center px-5">
        
        {/* Intro Text */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 text-sm md:text-lg tracking-[0.3em] uppercase mb-4"
        >
          Building Scalable Solutions
        </motion.p>

        {/* Name with Gradient */}
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-600 mb-6"
        >
          Aditya Upadhyay
        </motion.h1>

        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto"
        >
          Full Stack Developer (MERN) <br />
          <span className="text-base text-gray-500 mt-2 block">
            Crafting aesthetic & high-performance web applications
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col md:flex-row gap-5 justify-center"
        >
          <button className="px-8 py-3 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            View My Projects
          </button>
          <button className="px-8 py-3 border border-gray-700 text-white font-bold rounded-full text-lg hover:border-white hover:bg-white/10 transition-all transform hover:scale-105">
            Contact Me
          </button>
        </motion.div>
      </div>
    </div>
  );
}