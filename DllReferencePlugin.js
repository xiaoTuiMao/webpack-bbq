/* eslint no-param-reassign:0 */
/*
   MIT License http://www.opensource.org/licenses/mit-license.php
   Author Tobias Koppers @sokra
   */

'use strict';

const DelegatedSourceDependency = require('webpack/lib/dependencies/DelegatedSourceDependency');
const DelegatedModuleFactoryPlugin = require('webpack/lib/DelegatedModuleFactoryPlugin');
const ExternalModuleFactoryPlugin = require('webpack/lib/ExternalModuleFactoryPlugin');

class DllReferencePlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.plugin('compilation', (compilation, params) => {
      const normalModuleFactory = params.normalModuleFactory;
      compilation.dependencyFactories.set(DelegatedSourceDependency, normalModuleFactory);

      const manifest = this.options.manifest;
      if (typeof manifest === 'string') {
        const results = compiler.inputFileSystem.readFileSync(manifest);
        compilation.plugin('after-hash', () => compilation.modifyHash(results.toString('utf-8')));
      }
    });

    compiler.plugin('before-compile', (params, callback) => {
      const manifest = this.options.manifest;
      if (typeof manifest === 'string') {
        params.compilationDependencies.push(manifest);
        compiler.inputFileSystem.readFile(manifest, (err, result) => {
          if (err) {
            callback(err);
            return;
          }
          params[`dll reference ${manifest}`] = JSON.parse(result.toString('utf-8'));
          callback();
        });
      } else {
        callback();
      }
    });

    compiler.plugin('compile', (params) => {
      let manifest = this.options.manifest;
      if (typeof manifest === 'string') {
        manifest = params[`dll reference ${manifest}`];
      }
      const name = this.options.name || manifest.name;
      const sourceType = this.options.sourceType || 'var';
      const externals = {};
      const source = `dll-reference ${name}`;
      externals[source] = name;
      params.normalModuleFactory.apply(new ExternalModuleFactoryPlugin(sourceType, externals));
      params.normalModuleFactory.apply(new DelegatedModuleFactoryPlugin({
        source,
        type: this.options.type,
        scope: this.options.scope,
        context: this.options.context || compiler.options.context,
        content: this.options.content || manifest.content,
        extensions: this.options.extensions,
      }));
    });
  }
}

module.exports = DllReferencePlugin;
