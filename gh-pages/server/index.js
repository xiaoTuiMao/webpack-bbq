const rimraf = require('rimraf');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('../config');
const webpackConfig = require('../webpack.config');

const statsOptions = {
  assets: true,
  modules: false,
  chunks: false,
  chunkOrigins: false,
  publicPath: true,
  cached: false,
  cachedAssets: false,
  reasons: false,
  errorDetails: true,
  colors: { level: 1, hasBasic: true, has256: false, has16m: false },
};

rimraf.sync(`${config.basedir}/lib/`);

const port = Number(process.env.PORT) || 8080;
const onStats = (err, stats) => {
  if (err) {
    console.error(err.stack || err.toString());
  } else {
    console.info(stats.toString(statsOptions));
  }
};

const mainCompiler = webpack(webpackConfig[0]);
const devServer = new WebpackDevServer(mainCompiler, {
  contentBase: config.outputdir,
  publicPath: config.publicPath,
  stats: statsOptions,
  hot: true,
});
devServer.middleware.waitUntilValid(() => {
  const libpack = webpack(webpackConfig[1]);
  libpack.outputFileSystem = devServer.middleware.fileSystem;
  libpack.watch({}, onStats);
});

devServer.listen(port, '0.0.0.0', function () {
  console.info(`webpack dev server is listening at ${JSON.stringify(this.address())}`);
});
