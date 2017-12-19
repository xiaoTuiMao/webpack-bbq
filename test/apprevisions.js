/* eslint global-require:0 */
/* eslint import/no-dynamic-require:0 */
const fs = require('fs');

const tape = require('tape');

const webpack = require('webpack');
const rimraf = require('rimraf');

const fixtures = `${__dirname}/fixtures`;

tape('manifest generator', (t) => {
  webpack(require('./apprevisions-webpack.config')).run((err/* , stats */) => {
    t.ifError(err);
    fs.stat(`${fixtures}/app-revisions.json`, (serr) => {
      t.ifError(serr);
      const revisions = require(`${fixtures}/app-revisions.json`);
      t.equal(Object.keys(revisions).length, 2);
      t.equal(JSON.stringify(Object.keys(revisions).sort()), JSON.stringify(['foo.js', 'index.js']));
      t.end();

      rimraf.sync(`${fixtures}/app-revisions.json`);
      rimraf.sync(`${fixtures}/public`);
    });
  });
});
