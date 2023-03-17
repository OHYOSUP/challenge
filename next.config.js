/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/person/:id",
        destination: `https://billions-api.nomadcoders.workers.dev/person/:id`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "specials-images.forbesimg.com",
      },
      {
        protocol: "https",
        hostname: "undefined",
      },
    ],
  },
};

module.exports = nextConfig;
