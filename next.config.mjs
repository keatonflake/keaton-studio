/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "compare-motorcycles.onrender.com",
      },
      {
        protocol: "https",
        hostname: "keatonbucket.s3.us-east-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
