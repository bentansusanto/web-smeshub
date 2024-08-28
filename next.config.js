/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "admin.smeshub.co.id"
            },
            {
                protocol: "http",
                hostname: "localhost:1337"
            },
        ]
    }
}

module.exports = nextConfig