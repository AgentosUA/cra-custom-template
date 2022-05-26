const CracoAlias = require('craco-alias');
const CracoEnvPlugin = require('craco-plugin-env')
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@img': path.resolve(__dirname, 'public/img'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  },

  style: {
    css: {
      loaderOptions: {
        modules: {
          auto: true,
          exportLocalsConvention: 'camelCaseOnly'
        }
      }
    }
  },

  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json'
      }
    },
  ]
};
