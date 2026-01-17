import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'themindstudios.com', // <--- Ye naya add kiya hai
      },
    ],
  },
};

export default nextConfig;