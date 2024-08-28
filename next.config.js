/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.smeshub.co.id",
      },
    ],
  },
  output: 'export'
};

module.exports = nextConfig;
