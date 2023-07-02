/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    dangerouslyAllowSVG: true,
    domains: ['placeholder.pics'],
  }
}

module.exports = nextConfig
