const withPWA = require('next-pwa');


module.exports = withPWA({
    images: {
        domains: ['storage.googleapis.com']
    },
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
    }
})