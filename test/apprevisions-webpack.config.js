const AppRevisionsGenerator = require('../AppRevisionsGenerator');

const basedir = `${__dirname}`;
const fixtures = `${basedir}/fixtures`;

module.exports = {
  context: basedir,
  entry: {
    index: require.resolve(`${fixtures}/src/apprevisions/`),
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: `${fixtures}/src/`,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015'],
        plugins: ['add-module-exports'],
      },
    }],
  },
  plugins: [
    new AppRevisionsGenerator(`${fixtures}/app-revisions.json`),
  ],
  output: {
    path: `${fixtures}/public/`,
  },
};
