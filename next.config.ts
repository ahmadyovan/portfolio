import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Display-Mode',
            value: 'standalone'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
