/* eslint global-require:0, prefer-arrow-callback:0 */
'use strict';
const rimraf = require('rimraf');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('../config');
const webpackConfig = require('../webpack.config');

const port = Number(process.env.PORT) || 8080;

rimraf.sync(`${config.basedir}/lib/`);

const statsOptions = {
  assets: true, modules: false, chunks: false, chunkOrigins: false, publicPath: true,
  cached: false, cachedAssets: false, reasons: false, errorDetails: true,
  colors: { level: 1, hasBasic: true, has256: false, has16m: false },
};
const onStats = (err, stats) => {
  if (err) {
    console.error(err.stack || err.toString());
  } else {
    console.info(stats.toString(statsOptions));
  }
};

const compiler = webpack(webpackConfig[0]);
const devServer = new WebpackDevServer(compiler, {
  contentBase: config.outputdir,
  publicPath: config.publicPath,
  staticPath: config.outputdir,
  stats: statsOptions,
  hot: true,
});

devServer.middleware.waitUntilValid(function runLibpack() {
  const libpack = webpack(webpackConfig[1]);
  libpack.outputFileSystem = devServer.middleware.fileSystem;
  libpack.watch({}, onStats);
});

devServer.listen(port, '0.0.0.0', function () {
  console.info(`webpack dev server is listening at ${JSON.stringify(this.address())}`);
});
