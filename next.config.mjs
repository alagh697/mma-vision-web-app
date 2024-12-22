/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.mmanytt.com',
            port: '',
            pathname: '/wp-content/uploads/2024/08/**',
            search: '',
          },
          {
            protocol: 'https',
            hostname: 'i.ytimg.com',
            port: '',
            pathname: '/vi/tgJISxYxN7g/**',
            search: '',
          },
          {
            protocol: 'https',
            hostname: 's.yimg.com',
            port: '',
            pathname: '/os/en/blogs/blog/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
