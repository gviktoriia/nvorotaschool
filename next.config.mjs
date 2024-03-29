/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true, domains: ["giphy.com"] },
};

export default nextConfig;
