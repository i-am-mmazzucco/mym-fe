import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY, 
    beUrl: process.env.NEXT_PUBLIC_BE_URL, 
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  // devIndicators: {
  //   appIsrStatus: false,
  //   buildActivity: false,
  // },
  // compiler: {
  //   removeConsole: true
  // },
  // reactStrictMode: false,
};

export default nextConfig;
