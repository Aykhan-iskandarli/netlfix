/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['netflix-shopify.onrender.com'],
  },
  output:'standalone',
  reactStrictMode: false,
  swcMinify: true,
  env: {
    PUBLIC_URL: process.env.PUBLIC_URL,
  },
}

module.exports = nextConfig