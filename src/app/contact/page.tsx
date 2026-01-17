"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // --- ENVs Fetching ---
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    const templateIdAdmin = process.env.NEXT_PUBLIC_TEMPLATE_ID_ADMIN;
    const templateIdUser = process.env.NEXT_PUBLIC_TEMPLATE_ID_USER;

    // Safety Check: Agar .env file load nahi hui to crash na ho
    if (!serviceId || !publicKey || !templateIdAdmin || !templateIdUser) {
      setError("Configuration Error: Keys not found. Please check .env.local");
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
      to_name: "Aditya Upadhyay",
    };

    // 1. Send Email to YOU (Admin)
    emailjs.send(serviceId, templateIdAdmin, templateParams, publicKey)
      .then((response) => {
        // 2. Send Auto-Reply to VISITOR (Background Process)
        emailjs.send(serviceId, templateIdUser, templateParams, publicKey)
          .catch((err) => console.error("Auto-Reply failed silently:", err));

        // Success UI
        setIsSubmitting(false);
        setIsSent(true);
        setFormState({ name: "", email: "", message: "" });
        
        // Reset Success Message after 5 seconds
        setTimeout(() => setIsSent(false), 5000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setIsSubmitting(false);
        setError("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white py-20 px-4 md:px-10 pb-32 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)"></div>

      {/* Glow Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-gray-400 uppercase tracking-widest text-sm mb-2">Get in Touch</h2>
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
          Contact Me
        </h1>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* LEFT SIDE: INFO CARD */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="bg-zinc-900/50 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md h-full flex flex-col justify-between hover:border-white/20 transition-all shadow-2xl">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Let's build something amazing!</h3>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, I’m always open to discussing new opportunities.
              </p>

              <div className="space-y-6">
                <a href="mailto:adi375461@gmail.com" className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl group-hover:bg-blue-500/20 group-hover:scale-110 transition-all">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Email</div>
                    <div className="text-lg font-medium">adi375461@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+917049108275" className="flex items-center gap-5 text-gray-300 hover:text-white transition-colors group">
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl group-hover:bg-green-500/20 group-hover:scale-110 transition-all">
                    <Phone size={24} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Phone</div>
                    <div className="text-lg font-medium">+91 70491 08275</div>
                  </div>
                </a>

                <div className="flex items-center gap-5 text-gray-300 group">
                  <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl group-hover:bg-purple-500/20 group-hover:scale-110 transition-all">
                    <MapPin size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Location</div>
                    <div className="text-lg font-medium">Indore, Madhya Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm mb-4">Connect on Socials</p>
              <div className="flex gap-4">
                 <Link href="https://github.com/aadi90392" target="_blank" className="flex-1 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                   <Github size={20} className="group-hover:text-white text-gray-400" /> <span className="text-sm font-bold">GitHub</span>
                 </Link>
                 <Link href="https://www.linkedin.com/in/adityaupadhyay-tech/" target="_blank" className="flex-1 p-3 bg-blue-600/10 border border-blue-600/20 rounded-xl hover:bg-blue-600/20 transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                   <Linkedin size={20} className="text-blue-400" /> <span className="text-sm font-bold text-blue-100">LinkedIn</span>
                 </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: FORM */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/50 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-10 -mt-10"></div>

          <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your Name</label>
              <input 
                type="text" 
                id="name"
                name="from_name"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                required
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600"
                placeholder="Aditya Upadhyay"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="from_email"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                required
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600"
                placeholder="aditya@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
              <textarea 
                id="message"
                name="message"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                required
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-600 resize-none"
                placeholder="Hey, I have a project idea..."
              ></textarea>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                <AlertCircle size={16} /> {error}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting || isSent}
              className={`w-full font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-lg shadow-lg
                ${isSent 
                  ? "bg-green-500 text-white hover:bg-green-600" 
                  : "bg-white text-black hover:bg-gray-200 hover:scale-[1.02]"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? (
                "Sending..."
              ) : isSent ? (
                <>
                  Message Sent! <CheckCircle size={20} />
                </>
              ) : (
                <>
                  Send Message <Send size={20} />
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}