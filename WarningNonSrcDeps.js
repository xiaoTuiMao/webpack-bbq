const path = require('path');

const resolve = require('resolve');

function WaringNonSrcDeps(opts) {
  this.options = opts;
}

WaringNonSrcDeps.prototype.apply = function (compiler) {
  const basedir = this.options.basedir;
  const onModuleDone = (module) => {
    let userRequest = module.userRequest;
    if (!userRequest) {
      return;
    }
    userRequest = module.userRequest.split('!').pop();
    const relpath = path.relative(basedir, userRequest);
    if (relpath.indexOf('src/') !== 0) {
      return;
    }

    const requestdir = path.dirname(userRequest);
    let deps = module.dependencies;
    deps = deps.filter(item => item.constructor.name === 'CommonJsRequireDependency' && item.userRequest);
    deps = deps.map(item => item.userRequest.split('!').pop());
    deps = deps.map(depfile => resolve.sync(depfile, { basedir: requestdir }));
    deps = deps.filter(item => item.charAt(0) === '/');
    if (deps.length === 0) {
      return;
    }

    // 允许的路径前缀: src/ lib/ node_modules/
    const nonSrcDeps = deps.filter((file) => {
      const rel = path.relative(basedir, file);
      return !(
        rel.indexOf('src/') === 0 ||
        rel.indexOf('lib/') === 0 ||
        rel.indexOf('node_modules/') === 0
      );
    })
    .map(file => path.relative(basedir, file));
    if (nonSrcDeps.length > 0) {
      console.warn('WarningNonSrcDeps: %s 引入了未经过转化的源代码 %s', relpath, nonSrcDeps);
    }
  };
  compiler.plugin('compilation', (compilation) => {
    compilation.plugin('succeed-module', onModuleDone);
    compilation.plugin('failed-module', onModuleDone);
  });
};

module.exports = WaringNonSrcDeps;
