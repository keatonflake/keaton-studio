/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["compare-motorcycles.onrender.com"], // Add your external domain here
  },
};

export default nextConfig;
