
const withOffline = require('next-offline');
//var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const PUBLIC_PATH = 'https://www.youyong.ba/';
var config = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/index': { page: '/index' }
    }
  }
};





module.exports = withOffline({
  webpack: (config, {
        dev
    }) => {
        config.module.rules.push({
            test: /\.css$/,
            loader: 'emit-file-loader',
            options: {
                name: 'dist/[path][name].[ext]',
            },
        }, {
            test: /\.css$/,
            // Simplest way (non-minified).. 
            loader: `babel-loader!next-style-loader`,
            // Use `css-loader` to minify and enable source maps 
            // NOTE: The `url` option from the css loader must be disabled; images, fonts, etc should go into /static 
            loader: `babel-loader!next-style-loader!css-loader?sourceMap&minimize=true&url=false`,
            // Same as above but with CSS modules 
            loader: `babel-loader!next-style-loader!css-loader?sourceMap&minimize=true&url=false&modules`,

        });

        return config;
    },
 exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  },
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /.png$/,
        handler: 'cacheFirst'
      },
      {
        urlPattern: /api/,
        handler: 'networkFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200],
            headers: {
              'x-test': 'true'
            }
          }
        }
      }
    ]
  }
});
