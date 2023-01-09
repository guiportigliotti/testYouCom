/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.dummyjson.com', 'snack-code-uploads.s3.us-west-1.amazonaws.com'],
  },
}
module.exports = nextConfig