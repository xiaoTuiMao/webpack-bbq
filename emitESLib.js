const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

module.exports = function (content) {
  const sourcePath = this.resourcePath;
  const ext = path.extname(sourcePath);
  let targetPath = sourcePath.replace('/src/', '/es/');

  const isJs = ext === '.js';
  const isCss = ext === '.css';
  const isGlobalCss = /\.global\.css$/.test(sourcePath);

  mkdirp.sync(path.dirname(targetPath));

  if (isJs) {
    fs.writeFileSync(targetPath, content);
  } else if (isCss && !isGlobalCss) {
    targetPath += '.js';
    fs.writeFileSync(targetPath, content);
  } else {
    fs.copyFileSync(sourcePath, targetPath);
  }

  return content;
};

