/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com", // demo
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com", // demo
      },
      {
        protocol: "https",
        hostname: "deluxemediawalls.co.uk", // demo
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // demo
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com", // demo
      },
    ],
  },
};

export default nextConfig;
