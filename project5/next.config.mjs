/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "res.clodinary.com" }],
  },
};

export default nextConfig;
