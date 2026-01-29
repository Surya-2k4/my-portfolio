/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
