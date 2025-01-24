import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*' // Proxy to Backend
      }
    ];
  },
  /* other config options here */
};

export default nextConfig;
