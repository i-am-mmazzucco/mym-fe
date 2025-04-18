import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    beUrl: process.env.NEXT_PUBLIC_BE_URL, 
  },
  images: {
    domains: ['images.unsplash.com'],
  }
};

export default nextConfig;
