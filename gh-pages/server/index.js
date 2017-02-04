const rimraf = require('rimraf');
const webpack = require('webpack');

const config = require('../config');
const devServer = require('./devServer');
const webpackConfig = require('../webpack.config');
const statsOptions = require('./webpackStatsOptions');

rimraf.sync(`${config.basedir}/lib/`);

const port = Number(process.env.PORT) || 8080;
const onStats = (err, stats) => {
  if (err) {
    console.error(err.stack || err.toString());
  } else {
    console.info(stats.toString(statsOptions));
  }
};

devServer.middleware.waitUntilValid(() => {
  const libpack = webpack(webpackConfig[1]);
  libpack.outputFileSystem = devServer.middleware.fileSystem;
  libpack.watch({}, onStats);
});

devServer.listen(port, '0.0.0.0', function () {
  console.info(`webpack dev server is listening at ${JSON.stringify(this.address())}`);
});
