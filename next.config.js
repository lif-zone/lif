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
}
