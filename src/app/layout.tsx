import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
export const metadata: Metadata = {
  title: "Aditya Upadhyay | Portfolio",
  description: "MERN Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white selection:bg-purple-500 selection:text-white">
        
        {/* Background Grid Pattern (Design ke liye) */}
        <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Main Content */}
        {children}
        
        {/* Floating Navbar */}
        <Navbar />
        
      </body>
    </html>
  );
}