const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'he',
        locales: ['he', 'en'],
        localeDetection: false,
    },
    localePath: path.resolve('./pkg/www/public/locales/'),
}
