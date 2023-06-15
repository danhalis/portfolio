/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static HTML export
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
