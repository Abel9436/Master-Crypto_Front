/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'imgur.com',
            port: '',
            pathname: '/**'
        },
         {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
        ],
        
    }
};

export default nextConfig;
