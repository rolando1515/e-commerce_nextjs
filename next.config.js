/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
//  this was giving me an error 
module.exports = {
    experimental: {
      serverActions: true,
    },
  };