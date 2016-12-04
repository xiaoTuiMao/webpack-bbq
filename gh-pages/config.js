/* eslint object-shorthand:0, prefer-template:0 */
'use strict';
if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
}
const path = require('path');
const basedir = __dirname;
const rootdir = '/';
let publicPath = rootdir;
if (process.env.NODE_ENV === 'production') {
  publicPath = 'http://wenbing.github.io/webpack-bbq/';
}

module.exports = {
  basedir: basedir,
  outputdir: path.resolve(basedir, '../docs'),
  rootdir: rootdir,
  publicPath: publicPath,
};
