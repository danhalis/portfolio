/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static HTML export
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/danhalis/portfolio/master/public/**",
      },
    ],
  },
}

module.exports = nextConfig
