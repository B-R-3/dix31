import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dix31',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
