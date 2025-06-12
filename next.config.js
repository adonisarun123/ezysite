/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Enable compression and optimization
  compress: true,
  // Optimize build output
  swcMinify: true,
}

module.exports = nextConfig 