/* eslint no-var:0, vars-on-top:0, func-names:0, no-console:0 */
/* eslint object-property-newline:0 */
const webpack = require('webpack');
const rimraf = require('rimraf');

const config = require('../config');
const webpackConfig = require('../webpack.config');

const statsOptions = {
  colors: { level: 1, hasBasic: true, has256: false, has16m: false },
  cached: false, cachedAssets: false, modules: false, chunks: false, reasons: false,
  errorDetails: true, chunkOrigins: false, publicPath: true,
};

rimraf.sync(config.outputdir);
rimraf.sync(`${config.basedir}/lib`);

const onStatsCreator = cb => (err, stats) => {
  if (err) {
    throw err;
  }
  console.info(stats.toString(statsOptions));
  if (stats.hasErrors()) {
    process.exit(1);
    return;
  }
  if (cb) cb();
};

webpack(webpackConfig[0]).run(onStatsCreator(() => {
  webpack(webpackConfig[1]).run(onStatsCreator(() => {
    webpack(webpackConfig[2]).run(onStatsCreator());
  }));
}));
