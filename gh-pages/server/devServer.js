/* eslint global-require:0, prefer-arrow-callback:0 */
/* eslint object-property-newline:0 */

'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('../config');
const webpackConfig = require('../webpack.config');
const statsOptions = require('./webpackStatsOptions');

const compiler = webpack(webpackConfig[0]);
const devServer = new WebpackDevServer(compiler, {
  contentBase: config.outputdir,
  publicPath: config.publicPath,
  staticPath: config.outputdir,
  stats: statsOptions,
  hot: true,
});

module.exports = devServer;
