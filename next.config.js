const withPWA = require('next-pwa');

module.exports = withPWA({
    images: {
        domains: ['storage.googleapis.com']
    },
    pwa: {
        dest: 'public',
        register: '/service-worker.js',
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
        runtimeCaching: [
            {
                urlPattern: /^https:\/\/storage\.googleapis\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'google-storage',
                    expiration: {
                        maxEntries: 32,
                        maxAgeSeconds: 24 * 60 * 60 * 30
                    }
                }
            },
            {
                urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                    cacheName: 'google-fonts-webfont',
                    expiration: {
                        maxEntries: 32,
                        maxAgeSeconds: 24 * 60 * 60 * 365
                    }
                }
            },
            {
                urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                handler: 'StaleWhileRevalidate',
                options: {
                    cacheName: 'google-fonts-stylesheets',
                    expiration: {
                        maxEntries: 32,
                        maxAgeSeconds: 24 * 60 * 60 * 7
                    }
                }
            }
        ]
    }
})