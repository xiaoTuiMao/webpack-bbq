/* eslint object-shorthand:0, prefer-template:0, no-var:0 */

'use strict';

const path = require('path');

const basedir = __dirname;
var rootdir = '/';
if (process.env.NODE_ENV === 'production') {
  rootdir = '/webpack-bbq/';
}
const publicPath = rootdir;

module.exports = {
  basedir: basedir,
  outputdir: path.resolve(basedir, '../docs'),
  rootdir: rootdir,
  publicPath: publicPath,
};
