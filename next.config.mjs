/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http', // (or 'https' if using a real domain)
        hostname: process.env.NEXT_PUBLIC_WP_DOMAIN || 'localhost',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',
        pathname: '/**',
      },
      // ADD THIS NEW BLOCK FOR UNSPLASH
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // ADD THIS NEW BLOCK FOR RANDOMUSER.ME
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
