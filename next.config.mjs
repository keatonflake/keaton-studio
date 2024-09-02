/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "compare-motorcycles.onrender.com",
      "keatonbucket.s3.us-east-2.amazonaws.com", // Add your external domain here
    ],
  },
};

export default nextConfig;
