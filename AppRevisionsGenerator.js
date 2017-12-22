'use strict';

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const forOwn = require('lodash/forOwn');

const reHotUpdate = /\.hot-update\.(js|json)$/;
const reSourceMap = /\.map$/;
const debug = process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development';

function AppRevisionsGenerator(outputPath) {
  if (!outputPath) {
    throw new Error('outputPath is required');
  }
  this.outputPath = outputPath;
  this.outputData = {};
}

AppRevisionsGenerator.prototype.apply = function (compiler) {
  const outputPath = this.outputPath;

  const options = {
    source: false,
    modules: false,
  };

  compiler.plugin('after-emit', (compilation, callback) => {
    const data = compilation.getStats().toJson(options);
    const outputData = this.outputData;

    // { name: 'src/frameworks/favicon.ico',
    // size: 1150,
    // chunks: [],
    // chunkNames: [],
    // emitted: true,
    // isOverSizeLimit: undefined },
    const assets = data.assets;

    // {
    //   index: [
    //     'index.bundle.js',
    //     'index.bundle.css',
    //     'index.bundle.js.map',
    //     'index.bundle.css.map'
    //   ]
    // }
    // client.e020f67dfe212e4ba38c.hot-update.js
    const assetsByChunkName = data.assetsByChunkName;

    function set(item, key) {
      const ext = path.extname(item);
      outputData[key + ext] = item;
    }
    forOwn(assetsByChunkName, (value, key) => {
      if (Array.isArray(value)) {
        value
        .filter(item => !reHotUpdate.test(item))
        .filter(item => !reSourceMap.test(item))
        .forEach(item => set(item, key));
      } else {
        set(value, key);
      }
    });

    assets.forEach((item) => {
      const name = item.name;
      if (
        // assetsByChunkName 除外
        item.chunkNames.length <= 0 &&
        !reHotUpdate.test(name) &&
        !reSourceMap.test(name)
      ) {
        let key;
        const pos = name.indexOf('node_modules/');
        const fixedname = pos === 0 ? `/${name}` : name;
        const lastpos = fixedname.lastIndexOf('/node_modules/');
        if (lastpos !== -1) {
          key = fixedname.slice(lastpos + '/node_modules/'.length);
        } else {
          key = name;
        }
        if (!debug) {
          const lasthyphen = key.lastIndexOf('-');
          const lastdot = key.lastIndexOf('.');
          key = key.slice(0, lasthyphen) + key.slice(lastdot);
        }
        outputData[key] = name;
      }
    });

    this.outputData = outputData;

    mkdirp(path.dirname(outputPath), (err) => {
      if (err) {
        callback(err);
        return;
      }

      const contents = JSON.stringify(outputData, null, 2);
      let original;
      try {
        original = fs.readFileSync(outputPath, { encoding: 'utf8' });
      } catch (ex) { /* do nothing */ }
      if (original && original === contents) {
        callback();
        return;
      }
      fs.writeFile(outputPath, contents, callback);
    });
  });
};

module.exports = AppRevisionsGenerator;
