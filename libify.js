/* eslint strict:0 */

'use strict';

const fs = require('fs');
const path = require('path');
const jsTokens = require('js-tokens');
const { getOptions } = require('loader-utils');

const mkdirp = require('mkdirp');

function get(file, basedir) {
  /* eslint no-param-reassign:0, prefer-template:0 */
  const ext = path.extname(file);
  let libfile = basedir + file.slice(basedir.length).replace('/src/', '/lib/');
  // support .ts and .tsx, .ts,.tsx => .js
  if (ext === '.ts' || ext === '.tsx') {
    return libfile.replace(/.tsx?$/, '.js');
  }
  if (ext === '' || (ext !== '.js' && ext !== '.json')) {
    libfile += '.js';
  }
  return libfile;
}

function replacement(filepath, content, basedir, options) {
  if (content.indexOf('__webpack_public_path__') === -1) {
    return content;
  }
  jsTokens.lastIndex = 0;
  const parts = content.match(jsTokens);
  const webpackConfigPath = path.relative(
    path.dirname(filepath),
    options.webpackConfigPath || path.join(basedir, 'webpack.config')
  );
  const publicPath = 'require(' + JSON.stringify(webpackConfigPath) + ')[0].output.publicPath';
  // string val is module
  // string val is .
  // string val is exports
  // string val is
  // string val is =
  // string val is
  // string val is __webpack_public_path__
  // string val is
  // string val is +
  // string val is
  // string val is "src/frameworks/favicon.ico"
  // string val is ;
  const out = parts.map((val) => {
    if (val === '__webpack_public_path__') {
      return publicPath;
    }
    return val;
  })
  .join('');
  return out;
}

module.exports = function libify(code, map) {
  /* eslint consistent-return:0 */
  this.cacheable();
  const callback = this.async();
  const basedir = this.options.context;
  const options = getOptions(this);
  let filepath;
  let content;
  filepath = get(this.resourcePath, basedir);
  // 在测试的时候生成的 lib 文件带有 source map 方便在测试的时候，测试的 lib 文件中找到对应的源文件 测试文件是不需要加 source map 的
  if (map && process.env.NODE_ENV === 'test' && (!/.test.js$/.test(filepath) || !/__test__/.test(filepath))) {
    const sourceMap = Buffer.from(JSON.stringify(map)).toString('base64');
    content = `${code}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,${sourceMap}`;
  } else {
    content = code;
  }

  if (!callback) {
    if (this.resourcePath.split(path.sep).indexOf('node_modules') !== -1) {
      return content;
    }


    if (filepath === this.resourcePath || filepath === this.resourcePath + '.js') {
      return content;
    }

    mkdirp.sync(path.dirname(filepath));
    fs.writeFileSync(filepath, replacement(filepath, content, basedir, options));
    return content;
  }

  // async mode
  if (this.resourcePath.split(path.sep).indexOf('node_modules') !== -1) {
    process.nextTick(() => callback(null, content));
    return;
  }

  filepath = get(this.resourcePath, basedir);

  if (filepath === this.resourcePath || filepath === this.resourcePath + '.js') {
    process.nextTick(() => callback(null, content));
    return;
  }

  mkdirp(path.dirname(filepath), (err) => {
    if (err) {
      callback(err);
      return;
    }
    content = replacement(filepath, content, basedir, options);
    fs.writeFile(filepath, content, fserr => callback(fserr, content));
  });
};
