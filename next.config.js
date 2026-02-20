/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'buygreen.in',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'theaffordableorganicstore.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'beejwala.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'rukminim2.flixcart.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.levels.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.palasa.co.in',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig