module.exports = {
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack})=>{
        config.optimization.minimize = false;
        return config;
    },
}
