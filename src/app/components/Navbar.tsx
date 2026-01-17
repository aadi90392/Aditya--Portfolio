"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

// Ye tumhare menu items hain
const navItems = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "About", path: "/about", icon: <User size={20} /> },
  { name: "Projects", path: "/projects", icon: <Code size={20} /> },
  { name: "Exp", path: "/experience", icon: <Briefcase size={20} /> },
  { name: "Contact", path: "/contact", icon: <Mail size={20} /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-8 inset-x-0 mx-auto w-max z-50">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-3 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link key={item.path} href={item.path}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer transition-all duration-300 ${
                  isActive ? "text-black bg-white" : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {/* Icon */}
                <span className="relative z-10">{item.icon}</span>
                
                {/* Text sirf tab dikhega jab Active hoga (Smart UI) */}
                {isActive && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    className="text-sm font-bold whitespace-nowrap overflow-hidden"
                  >
                    {item.name}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}