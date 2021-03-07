const {i18n} = require('./next-i18next.config.js');

module.exports = {
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack})=>{
        config.optimization.minimize = false;
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {test: /\.jsx?$/},
            use: ['@svgr/webpack'],
        });
        return config;
    },
    i18n,
}
