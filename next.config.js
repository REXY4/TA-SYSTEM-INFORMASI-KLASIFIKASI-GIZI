/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    // distDir: 'build',
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['localhost', "62.72.6.183"], // Add other allowed domains if needed
    },

    async rewrites() {
        return [
            {
                source: '/robots.txt',
                destination: '/app/robots'
            }
        ];
    },
    // useFileSystemPublicRoutes: true,
    // Content Security Policy (CSP) configuration
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: 'default-src \'self\'; img-src \'self\' example.com; script-src \'self\' \'unsafe-inline\'',
                    },
                ],
            },
        ];
    },

    // Strict Transport Security (HSTS) configuration
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                ],
            },
        ];
    },

    // XSS protection
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ];
    },

    // X-Content-Type-Options configuration
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                ],
            },
        ];
    },

    // Frameguard configuration
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                ],
            },
        ];
    },

};

module.exports = nextConfig;
