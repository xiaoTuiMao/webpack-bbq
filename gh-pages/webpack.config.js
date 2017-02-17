const xtend = require('xtend');
const bbq = require('../');

const config = require('./config');

module.exports = bbq(xtend(config, {
  staticRendering: {
    app: require.resolve('./server/renderToStaticMarkup'),
    uris: [
      `${config.rootdir}index.html`,
    ],
  },
}))({
  entry: {
    client: require.resolve('./src/client'),
    bbq: require.resolve('./src/bbq'),
  },
}, {
  entry: require.resolve('./src/server'),
});

if (require.main === module) {
  console.info(module.exports);
}
