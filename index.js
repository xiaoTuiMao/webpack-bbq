/* eslint no-use-before-define:0 */

'use strict';

const qs = require('querystring');
const path = require('path');

const defined = require('defined');
const xtend = require('xtend');
const map = require('map-async');
const resolve = require('resolve');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestGeneratorPlugin = require('webpack-bbq-manifest-generator');
const clearRequireCache = require('clear-require-cache');
const autoprefixer = require('autoprefixer');

const UglifyJsPlugin = require('./UglifyJsPlugin');

const libify = require.resolve('webpack-libify');


/**
 * config.basedir
 * config.outputdir
 * config.rootdir
 * config.publicPath
 * config.cssLoaderHashPrefix
 *
 * client
 * server
 */
const bbq = config => (client, server) => {
  client = defined(client, {});
  server = defined(server, {});

  // 添加 name
  client.name = 'client';
  server.name = 'server';

  const context = config.basedir;

  // configuration - context
  // shared
  // context 必须由 config 指定!
  if (client.context || server.context) {
    throw new Error('context SHOULD NOT BE specified');
  }
  client.context = context;
  server.context = context;


  const getEntry = (id) => {
    const filepath = resolve.sync(id, { basedir: config.basedir });
    const appName = expose(filepath, `${config.basedir}/src/`);
    return { [appName]: filepath };
  };

  // 主文件 (entry)
  // configuration - entry
  // shared
  if (client.entry) {
    if (typeof client.entry === 'string') {
      client.entry = getEntry(client.entry);
    }
  } else {
    client.entry = getEntry(`${config.basedir}/src/`);
  }

  if (server.entry) {
    if (typeof server.entry === 'string') {
      server.entry = getEntry(server.entry);
    }
  } else {
    server.entry = client.entry;
  }
  if (Object.keys(server.entry).length > 1) {
    throw new Error('server MUST HAVE one entry at most');
  }


  // 开发环境
  const debug = process.env.NODE_ENV === 'development';

  // configuration - debug
  // shared
  client.debug = defined(client.debug, debug);
  server.debug = defined(server.debug, debug);


  // configuration - bail
  // shared
  client.bail = defined(client.bail, !client.debug);
  server.bail = defined(server.bail, !server.debug);

  // 文件名需要有 .bundle
  // 文件名在开发环境中没有 chunkhash, contenthash, hash
  // devtool 也不一样
  let filename;
  let cssfilename;
  let bundlename;
  let devtool;
  if (debug) {
    filename = '[name].bundle.js';
    cssfilename = '[name].bundle.css';
    bundlename = '[path][name].[ext]';
    devtool = 'eval';
  } else {
    filename = '[name]-[chunkhash].bundle.js';
    cssfilename = '[name]-[contenthash].bundle.css';
    bundlename = '[path][name]-[hash].[ext]';
    devtool = 'source-map';
  }


  // configuration - devtool
  // client only
  client.devtool = defined(client.devtool, devtool);


  // plugins
  const plugins = [
    new NamedStats(),
    new ExtractTextPlugin(cssfilename),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new ManifestGeneratorPlugin(`${config.basedir}/app-revisions.json`),
  ];

  if (process.env.NODE_ENV === 'production') {
    const screw_ie8 = defined(client.screw_ie8, false); /* eslint camelcase:0 */
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin(true));
    plugins.push(new UglifyJsPlugin({
      mangle: { screw_ie8 },
      compress: { warnings: false, screw_ie8 },
      output: { screw_ie8 },
    }));
  }

  // configuration - plugins
  // client only
  // 将已有的 plugins 添加到 bbq 设定的后面？
  client.plugins = plugins.concat(client.plugins).filter(v => v);


  const node = { __filename: true, __dirname: true };

  // configuration - node
  // client only
  client.node = xtend(node, client.node);


  // get loaders for specified target
  // supported targets: web, node
  const getLoaders = (target) => {
    const fontLoader = {
      test: /\.(woff|ttf|woff2|eot)(\?.*)?$/,
      loader: `file-loader?name=${bundlename}`,
    };
    const imagesLoader = {
      test: /\.(ico|jpg|jpeg|png|gif|webp|svg)(\?.*)?$/,
      loader: `file-loader?name=${bundlename}`,
    };
    const avLoader = {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      loader: `url-loader?name=${bundlename}&limit=10000`,
    };

    let babelquery = {
      'presets[]': ['react', 'es2015'],
      'plugins[]': [
        'transform-object-rest-spread',
        'add-module-exports',
        'transform-class-properties',
        'transform-async-to-generator',
      ],
      cacheDirectory: true,
      babelrc: false,
    };
    if (target === 'node') {
      babelquery['plugins[]'].push('transform-ensure-ignore');
    }
    babelquery = qs.stringify(babelquery, null, null, {
      encodeURIComponent: s => (s),
    });
    const jsLoader = {
      test: /\.js$/,
      include: `${config.basedir}/src/`,
      loaders: [`babel-loader?${babelquery}`],
    };

    const styleLoaderName = 'style-loader';
    const cssLoaderName = 'css-loader-bbq';
    const externalCssLoader = {
      test: /\.css$/,
      include: /\/node_modules\//,
      loaders: target === 'web' ?
        ExtractTextPlugin.extract(styleLoaderName, cssLoaderName).split('!') :
        [`${cssLoaderName}`],
    };
    const globalCssRe = /\.global\.css$/;
    const globalCssLoader = {
      test: globalCssRe,
      include: `${config.basedir}/src/`,
      loaders: target === 'web' ?
        ExtractTextPlugin.extract(styleLoaderName, [`${cssLoaderName}?importLoaders=1`, 'postcss-loader']).split('!') :
        [`${cssLoaderName}?importLoaders=1`, 'postcss-loader'],
    };
    const hashPrefix = config.cssLoaderHashPrefix || '';
    const styleQuery = `modules&localIdentName=[name]__[local]___[hash:base64:5]&hashPrefix=${hashPrefix}&importLoaders=1`;
    const styleLoader = {
      test: /\.css$/,
      include: `${config.basedir}/src/`,
      exclude: filepath => globalCssRe.test(path.basename(filepath)),
      loaders: target === 'web' ? [
        styleLoaderName,
        `${cssLoaderName}?${styleQuery}`,
        'postcss-loader',
      ] : [
        `${cssLoaderName}/locals?${styleQuery}&cssText`,
        'postcss-loader',
      ],
    };

    const jsonLoader = {
      test: /\.json$/,
      loader: 'json-loader',
    };

    return [
      jsLoader,
      jsonLoader,
      externalCssLoader,
      globalCssLoader,
      styleLoader,
      fontLoader,
      imagesLoader,
      avLoader,
    ];
  };

  // configuration - module
  // client only
  client.module = xtend(client.module, {
    loaders: getLoaders('web').concat(client.module && client.module.loaders).filter(v => v),
  });

  const exposeEntryLoaders = Object
  .keys(client.entry)
  .map(name => ({
    test: resolve.sync(client.entry[name], { basedir: config.basedir }),
    loader: `expose-loader?${name}`,
  }));
  if (client.module.postLoaders) {
    client.module.postLoaders = exposeEntryLoaders.concat(client.module.postLoaders).filter(v => v);
  } else {
    client.module.postLoaders = exposeEntryLoaders;
  }


  // postcss
  const defaultPostcssPlugins = () => [
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'not ie < 8',
      ],
    }),
  ];
  client.postcss = defined(client.postcss, defaultPostcssPlugins);
  server.postcss = defined(server.postcss, defaultPostcssPlugins);


  // output
  const output = xtend(client.output, {
    filename,
    chunkFilename: filename,
    path: config.outputdir,
    pathinfo: true,
    publicPath: defined(config.publicPath, config.rootdir),
  });

  // configuration - output
  // shared partial
  client.output = output;


  // server land

  // configuration - target
  // server only
  server.target = 'node';

  // configuration - output
  // server only
  server.output = xtend(client.output, {
    path: `${config.outputdir}/SHOULD_NOT_EXISTS_DIRECTORY`,
  });

  // configuration - module
  // server only
  server.module = xtend(server.module, {
    loaders: getLoaders('node').concat(server.module && server.module.loaders).filter(v => v),
    postLoaders: [{ loader: libify }].concat(server.module && server.module.postLoaders).filter(v => v), /* eslint max-len:0 */
  });

  // configuration - plugins
  // server only
  const serverPlugins = [
    new ShouldNotEmit(),
    new NamedStats(),
    new webpack.IgnorePlugin(/webpack\.config/),
  ];
  if (server.staticRendering) {
    serverPlugins.push(new StaticRendering(config, server));
  }
  server.plugins = serverPlugins.concat(server.plugins).filter(v => v);

  if (process.env.NODE_ENV === 'development') {
    // configuration - recordsPath
    client.recordsPath = `${config.basedir}/.webpack-hmr-records.json`;

    // const hotDevServer = require.resolve('webpack/hot/dev-server');
    // const devServerClient = require.resolve('webpack-dev-server/client');
    const devServerClient = require.resolve('react-dev-utils/webpackHotDevClient');
    Object.keys(client.entry).forEach((key) => {
      client.entry[key] = [].concat(client.entry[key]).concat(devServerClient);
       //  .concat(`${devServerClient}?/`, hotDevServer);
    });

    client.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return [
    client,
    server,
  ];
};

function ShouldNotEmit() {}
ShouldNotEmit.prototype.apply =
  compiler => compiler.plugin('should-emit', () => false);

function NamedStats() {}
function makeBold(useColors) {
  return (str) => {
    if (useColors) return `\u001b[1m${str}\u001b[22m`;
    return str;
  };
}
NamedStats.prototype.apply = function (compiler) {
  compiler.plugin('done', (stats) => {
    const toString = stats.toString;
    stats.toString = function (options) {
      /* eslint prefer-rest-params:0 */
      const bold = makeBold(defined(options.colors, false));
      const name = this.compilation.options.name;
      return `Compiler Name: ${bold(name)}\n${toString.apply(this, arguments)}`;
    };
  });
};

function StaticRendering(config, server) {
  this.config = xtend({ rootdir: '/' }, config);
  this.server = server;
}

StaticRendering.prototype.get = function (srcfile, basedir) {
  const ext = path.extname(srcfile);
  let libfile = basedir + srcfile.slice(basedir.length).replace('/src/', '/lib/');
  if (ext === '' || (ext !== '.js' && ext !== '.json')) {
    libfile = `${libfile}.js`;
  }
  return libfile;
};
StaticRendering.prototype.apply = function (compiler) {
  const config = this.config;
  const staticRendering = this.server.staticRendering;
  let uris;
  if (Array.isArray(staticRendering)) {
    uris = staticRendering;
  } else {
    uris = staticRendering.uris;
  }
  /* eslint max-len:0 */
  const entry = defined(staticRendering.app, this.get(this.server.entry[Object.keys(this.server.entry)[0]], config.basedir));

  compiler.plugin('after-compile', (compilation, callback) => {
    if (process.env.NODE_ENV === 'development') {
      clearRequireCache(entry);
    }
    if (!Array.isArray(uris)) {
      callback(new Error('staticRendering.uris MUST BE an Array'));
      return;
    }
    let app;
    /* eslint global-require:0, import/no-dynamic-require:0 */
    try {
      app = require(resolve.sync(entry, { basedir: config.basedir }));
    } catch (err) {
      callback(err);
      return;
    }
    if (typeof app !== 'function') {
      callback(new Error('staticRendering.app MUST BE a function'));
      return;
    }
    if (app.length !== 2) {
      callback(new Error('staticRendering.app MUST BE (uri, cb) => cb(err, html)'));
      return;
    }

    const run = (uri, cb) => {
      const filepath = `${config.outputdir}${uri.slice(config.rootdir.length - 1)}`;
      compiler.outputFileSystem.mkdirp(path.dirname(filepath), (err) => {
        if (err) {
          cb(err);
          return;
        }
        app(uri, (apperr, html) => {
          if (apperr) {
            cb(apperr);
            return;
          }
          /* eslint no-param-reassign:0 */
          compilation.assets[uri.slice(config.rootdir.length)] = {
            source: () => html,
            size: () => html.length,
            emitted: true,
          };
          compiler.outputFileSystem.writeFile(filepath, html, cb);
        });
      });
    };

    map(uris, run, callback);
  });
};

function expose(filename, basedir) {
  const extname = path.extname(filename);
  const relname = path.relative(basedir, filename);
  return path.join(path.dirname(relname), path.basename(relname, extname));
}

module.exports = bbq;
