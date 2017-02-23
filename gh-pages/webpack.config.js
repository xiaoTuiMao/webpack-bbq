const webpack = require('webpack');
const xtend = require('xtend');
const bbq = require('../');

const config = require('./config');
const debug = process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development';
const libraryName = debug ? '[name]' : '[name]_[hash]';

module.exports = bbq(xtend(config, {
  staticRendering: {
    app: require.resolve('./server/renderToStaticMarkup'),
    uris: [
      `${config.rootdir}index.html`,
    ],
  },
}))({
  entry: {
    render: [require.resolve('./src/frameworks/render')],
  },
  output: { library: libraryName },
  plugins: [new webpack.DllPlugin({
    path: `${config.basedir}/lib/[name]-manifest.json`,
    name: libraryName,
  })],
}, {
  entry: {
    client: require.resolve('./src/client'),
  },
  plugins: [new webpack.DllReferencePlugin({
    context: config.basedir,
    manifest: `${config.basedir}/lib/render-manifest.json`,
  })],
}, {
  entry: require.resolve('./src/server'),
});

if (require.main === module) {
  console.info(module.exports);
}
