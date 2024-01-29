/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.al-style.kz',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/api/callback',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/html; charset=utf-8',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
