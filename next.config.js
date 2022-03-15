const {i18n} = require('./next-i18next.config.js');

module.exports = {
  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack})=>{
      config.optimization.minimize = false;
      config.module.rules.push({
          test: /\.svg$/,
          issuer: {test: /\.jsx?$/},
          use: ['@svgr/webpack'],
      });
      if (!isServer)
      {
        config.target = 'web';
        config.resolve.alias.hyperswarm = 'hyperswarm-web';
      }
      return config;
  },
  i18n,
  async headers(){
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
      }, {
        source: '/api/israeltomorrow_save_email',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://israeltomorrow.co.il',
          }
        ],
      }, {
        source: '/api/israeltomorrow_log_visit',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://israeltomorrow.co.il',
          }
        ],
      },
    ];
  },
  async redirects(){
    return [{
      source: '/en/faq',
      destination: 'https://docs.google.com/document/d/'+
       '1tkTka-vapUyiO4svCNwdwPBAZ7k6SAMjMsP9Jukff7g/edit',
      statusCode: 302,
      locale: false,
    }, {
      source: '/he/faq',
      destination: 'https://docs.google.com/document/d/'+
        '1nQoDXB4f1kiayTTBz72DfpU4SRX3aPWeSWXZt9A4UwQ/edit',
      statusCode: 302,
      locale: false,
    }, {
      source: '/en/dna',
      destination: 'https://lif.zone/dna',
      statusCode: 302,
      locale: false,
    }, {
      source: '/he/dna',
      destination: 'https://lif.zone/dna',
      statusCode: 302,
      locale: false,
    }, {
      source: '/dna',
      destination: 'https://lif.zone/dna',
      statusCode: 302,
      locale: false,
    }];
  },
};
