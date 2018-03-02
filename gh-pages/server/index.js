/* eslint global-require:0 */
const port = Number(process.env.PORT) || 8080;

if (process.env.NODE_ENV === 'production') {
  const server = require('./server');
  server.listen(port, '0.0.0.0', function () {
    console.info(`server is listening at ${JSON.stringify(this.address())}`);
  });
} else {
  const rimraf = require('rimraf');
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');

  const config = require('../config');
  const webpackConfig = require('../webpack.config');
  const once = require('lodash/once');

  /* eslint object-property-newline:0 */
  const statsOptions = {
    assets: true, modules: false, chunks: false, chunkOrigins: false,
    publicPath: true, cached: false, cachedAssets: false,
    reasons: false, errorDetails: true,
    colors: { level: 1, hasBasic: true, has256: false, has16m: false },
  };

  rimraf.sync(`${config.basedir}/lib/*`);

  const onStats = (err, stats) => {
    if (err) {
      console.error(err.stack || err.toString());
    } else {
      console.info(stats.toString(statsOptions));
    }
  };

  const runAndwatch = cb => {
    const onceCb = once(cb);
    return (err, stats) => {
      onStats(err, stats);
      onceCb();
    };
  };

  const dllCompiler = webpack(webpackConfig[0]);
  dllCompiler.watch({}, runAndwatch(() => {
    const mainCompiler = webpack(webpackConfig[1]);
    const devServer = new WebpackDevServer(mainCompiler, {
      contentBase: config.outputdir,
      publicPath: config.publicPath,
      stats: statsOptions,
      proxy: {
        '**': `http://localhost:${port + 1}`,
      },
    });

    const libpack = webpack(webpackConfig[2]);
    libpack.outputFileSystem = devServer.middleware.fileSystem;
    libpack.watch({}, runAndwatch(() => {
      const server = require('./server');
      devServer.middleware.waitUntilValid(() => {
        server.listen(port + 1, '0.0.0.0', function () {
          console.info(`server is listening at ${JSON.stringify(this.address())}`);
        });
      });
    }));

    devServer.listen(port, '0.0.0.0', function () {
      console.info(`webpack dev server is listening at ${JSON.stringify(this.address())}`);
    });
  }));
}
