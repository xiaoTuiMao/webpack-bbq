const bbq = require('../');

const config = require('./config');

module.exports = bbq(config)({
  entry: {
    client: require.resolve('./src/client'),
  },
}, {
  entry: require.resolve('./src/server'),
  staticRendering: {
    app: require.resolve('./server/renderToStaticMarkup'),
    uris: [
      `${config.rootdir}index.html`,
    ],
  },
});

if (require.main === module) {
  console.info(module.exports);
}
