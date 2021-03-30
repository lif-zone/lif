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
    async headers() {
      return [
	{
	  source: '/:all*(svg|jpg|png)',
	  locale: false,
	  headers: [
	    {
	      key: 'Cache-Control',
	      value: 'public, max-age=9999999999, must-revalidate',
	    }
	  ],
	},
      ]
    },
}


