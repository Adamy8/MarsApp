import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // // Adding basePath and assetPrefix (for future use)
  // basePath: '/marsapp',
  // assetPrefix: '/marsapp',

  async rewrites() {
    const apiBaseUrl = process.env.NODE_PUBLIC_API_URL || 'http://localhost:4000';
    return [
      {
        source: '/api/:path*',
        destination: `${apiBaseUrl}/api/:path*` // Proxy to Node Backend
      }
    ];
  },
  /* other config options here */
};

export default nextConfig;
