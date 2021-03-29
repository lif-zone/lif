const path = require('path');
const json6 = require('json-6');

module.exports = {
    i18n: {
        defaultLocale: 'he',
        locales: ['he', 'en'],
        // localeDetection: true,
    },
    localePath: path.resolve('./pkg/www/public/locales/'),
    localeExtension: 'json',
    serializeConfig: false,
    backend: {
        loadPath: './pkg/www/public/locales/{{lng}}/{{ns}}.json',
        parse: function(data, path){
            try {
                return json6.parse(data);
            } catch(e){
                console.error('Error parsing locale file', data, e);
                throw e;
            }
        },
    },
}
