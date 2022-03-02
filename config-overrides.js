/* config-overrides.js */
const {
  useBabelRc,
  addBabelPlugin,
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias
} = require('customize-cra');

const path = require('path');

module.exports = override(
  config => ({
    ...config,
    output: {
      ...config.output,
      globalObject: 'this'
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // other stuff
      fallback: {
        fs: false,
        url: false,
        path: false, // require.resolve('path-browserify'),
        stream: false, // require.resolve('stream-browserify'),
        os: false, // require.resolve('os-browserify/browser'),
        http: false, // require.resolve('stream-http'),
        https: false, // require.resolve('https-browserify'),
        crypto: false, // require.resolve('crypto-browserify'),
        buffer: false, // require.resolve('buffer/'),
        events: false // require.resolve('events/')
      }
    }
  }),
  useBabelRc(),
  disableEsLint(),
  process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),
  addDecoratorsLegacy(),
  addBabelPlugin(['@babel/plugin-transform-typescript', { allowNamespaces: true }]),
  addWebpackAlias({
    $Utils: path.resolve(__dirname, 'src/Utils'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@app': path.resolve(__dirname, 'src'),
    '@APP_CONFIG': path.resolve(__dirname, 'src/APP_CONFIG.ts'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@containers': path.resolve(__dirname, 'src/containers'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@interfaces': path.resolve(__dirname, 'src/interfaces'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@providers': path.resolve(__dirname, 'src/providers'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@stores': path.resolve(__dirname, 'src/stores'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@utils': path.resolve(__dirname, 'src/utils')
  })
);
