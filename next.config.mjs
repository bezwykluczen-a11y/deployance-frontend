/** @type {import('next').NextConfig} */
const wpDomain = process.env.NEXT_PUBLIC_WP_DOMAIN || 'deployance.online';

const nextConfig = {
  images: {
    remotePatterns: [
      // WordPress CMS — apex i www, http i https
      // (http zostaje do czasu uporządkowania SSL na deployance.online)
      {
        protocol: 'http',
        hostname: wpDomain,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: wpDomain,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: `www.${wpDomain}`,
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: `www.${wpDomain}`,
        port: '',
        pathname: '/**',
      },

      // Zewnętrzne CDN (assety szablonu) — tylko https
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
