/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: "export",
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "admin.digitakreasi.id",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
