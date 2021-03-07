const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'he',
        locales: ['en', 'he'],
        //localeDetection: false,
    },
    localePath: path.resolve('./pkg/www/public/locales/'),
}
