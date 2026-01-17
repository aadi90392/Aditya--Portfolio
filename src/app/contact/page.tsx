"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation (Asal me backend lagana padega baad me)
    setTimeout(() => {
      alert("Thank you! I will get back to you soon.");
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-10 pb-32">
      
      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-gray-400 uppercase tracking-widest text-sm mb-2">Get in Touch</h2>
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Contact Me
        </h1>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-white">Let's talk about everything!</h3>
            <p className="text-gray-400 mb-8">
              Don't like forms? Send me an email. 👋
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a href="mailto:adi375461@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg">adi375461@gmail.com</span>
              </a>

              {/* Phone */}
              <a href="tel:+917049108275" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-green-500/20 group-hover:text-green-400 transition-colors">
                  <Phone size={20} />
                </div>
                <span className="text-lg">+91-7049108275</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="text-lg">Indore, Madhya Pradesh, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-10 border-t border-white/10 flex gap-4">
               <Link href="https://github.com/aadi90392" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-110">
                 <Github size={24} />
               </Link>
               <Link href="https://www.linkedin.com/in/adityaupadhyay-tech/" target="_blank" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-110">
                 <Linkedin size={24} />
               </Link>
            </div>
          </div>
        </motion.div>


        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
              <input 
                type="text" 
                id="name"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                required
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Aditya Upadhyay"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                required
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="aditya@123.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea 
                id="message"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                required
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="Hey Aditya, I have a project for you..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}   