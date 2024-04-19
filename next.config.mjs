/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lorcana-api.com',
                port: '',
                pathname: '/images/**',
            },
        ],
    },
};

export default nextConfig;

