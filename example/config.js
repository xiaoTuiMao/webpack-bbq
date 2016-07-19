/* eslint object-shorthand:0, prefer-template:0 */
if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
}
const basedir = __dirname;
const rootdir = '/';

module.exports = {
  basedir: basedir,
  outputdir: basedir + '/public',
  rootdir: rootdir,
  publicPath: rootdir,
};
