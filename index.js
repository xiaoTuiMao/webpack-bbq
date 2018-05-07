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
const AppRevisionsGenerator = require('./AppRevisionsGenerator');
const WarningNonSrcDeps = require('./WarningNonSrcDeps');
const clearRequireCache = require('clear-require-cache');
const autoprefixer = require('autoprefixer');

const libify = require.resolve('./libify');
const TimeFixPlugin = require('./TimeFixPlugin');

// 开发环境标识
const debug = process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development';

/**
 * config.basedir
 * config.outputdir
 * config.rootdir
 * config.publicPath
 *
 * config.cssLoaderHashPrefix
 * config.postcss
 * config.staticRendering
 * config.webpackDevServerUrl
 * config.webpackConfigPath
 * config.appRevisionsPath
 *
 * client
 * server
 */
const bbq = (config) => {
  // 文件名在开发环境中没有 chunkhash, contenthash, hash
  // devtool 也不一样
  let filename;
  let chunkfilename;
  let cssfilename;
  let bundlename;
  let devtool;
  if (debug) {
    filename = '[name].js';
    chunkfilename = '[name].js';
    cssfilename = '[name].css';
    bundlename = '[path][name].[ext]';
    devtool = 'eval';
  } else {
    // AppRevisionsGenerator 会使用 - . 来获取 key
    filename = '[name]-[chunkhash].js';
    chunkfilename = '[name]-[chunkhash].js';
    cssfilename = '[name]-[contenthash].css';
    bundlename = '[path][name]-[hash].[ext]';
    devtool = 'source-map';
  }

  const getEntry = (id) => {
    const filepath = resolve.sync(id, { basedir: config.basedir });
    const appName = expose(filepath, `${config.basedir}/src/`);
    return { [appName]: filepath };
  };

  // get loaders for specified target
  // supported targets: web, node
  const getLoaders = (target) => {
    const fileLoader = {
      loader: 'file-loader',
      options: { name: bundlename, emitFile: true },
    };
    const font = xtend(fileLoader, {
      test: /\.(woff|ttf|woff2|eot)(\?.*)?$/,
    });
    const images = xtend(fileLoader, {
      test: /\.(ico|jpg|jpeg|png|gif|webp|svg)(\?.*)?$/,
    });
    const av = xtend(fileLoader, {
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    });

    let babelquery = {
      'presets[]': ['react', 'es2015'],
      'plugins[]': [
        'transform-object-rest-spread',
        'add-module-exports',
        'transform-class-properties',
        'transform-async-to-generator',
        'transform-es3-member-expression-literals',
        'babel-plugin-transform-es3-property-literals',
        'babel-plugin-ramda',
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
    const ts = {
      test: /\.tsx?$/,
      include: `${config.basedir}/src/`,
      loader: 'ts-loader',
    };
    const js = {
      test: /\.js$/,
      include: `${config.basedir}/src/`,
      loader: `babel-loader?${babelquery}`,
    };

    const styleLoaderName = 'style-loader';
    const cssLoaderName = 'css-loader-bbq';
    const defaultPostcssPlugins = () => [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'not ie < 8',
        ],
      }),
    ];
    const postcssLoader = {
      loader: 'postcss-loader',
      options: { plugins: defined(config.postcss, defaultPostcssPlugins) },
    };
    const externalCss = {
      test: /\.css$/,
      include: /\/node_modules\//,
      use: target === 'web' ?
      ExtractTextPlugin.extract({ fallback: styleLoaderName, use: cssLoaderName }) :
      [`${cssLoaderName}`],
    };
    const globalCssRe = /\.global\.css$/;
    const globalCss = {
      test: globalCssRe,
      include: `${config.basedir}/src/`,
      use: target === 'web' ?
      ExtractTextPlugin.extract({
        fallback: styleLoaderName,
        use: [`${cssLoaderName}?importLoaders=1`, postcssLoader],
      }) :
      [`${cssLoaderName}?importLoaders=1`, postcssLoader],
    };
    const hashPrefix = config.cssLoaderHashPrefix || '';
    const styleQuery = `modules&localIdentName=[name]__[local]___[hash:base64:5]&hashPrefix=${hashPrefix}&importLoaders=1`;
    const style = {
      test: /\.css$/,
      include: `${config.basedir}/src/`,
      exclude: filepath => globalCssRe.test(path.basename(filepath)),
      use: target === 'web' ? [
        styleLoaderName,
        `${cssLoaderName}?${styleQuery}`,
        postcssLoader,
      ] : [
        `${cssLoaderName}/locals?${styleQuery}&cssText`,
        postcssLoader,
      ],
    };

    const json = {
      test: /\.json$/,
      loader: 'json-loader',
    };

    return [ts, js, json, externalCss, globalCss, style, font, images, av];
  };

  return function (/* client, client, client, ..., server */) {
    const args = [].slice.call(arguments);
    const clients = args.slice(0, -1);
    const server = defined(args[args.length - 1], {});

    // context 必须由 config 指定!
    if (clients.findIndex(item => (item.context !== undefined)) !== -1 || server.context) {
      throw new Error('context SHOULD NOT BE specified');
    }

    const appRevisionsPath = defined(config.appRevisionsPath, `${config.basedir}/app-revisions.json`);
    const appRevisions = new AppRevisionsGenerator(appRevisionsPath);
    const resolveExtensions = ['.js', '.ts', '.tsx', '.json'];
    clients.forEach((client, index) => {
      /* eslint no-shadow:0 */
      // 添加 name
      client.name = clients.length === 1 ? 'client' : `client_${index}`;

      // configuration - context
      // shared
      client.context = config.basedir;

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

      // configuration - bail
      // shared
      client.bail = defined(client.bail, !debug);

      // configuration - devtool
      // client only
      client.devtool = defined(client.devtool, devtool);

      // resolve
      client.resolve = xtend({
        extensions: resolveExtensions,
      }, client.resolve);

      // plugins
      const plugins = [
        new NamedStats(),
        new ExtractTextPlugin(cssfilename),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        appRevisions,
        new WarningNonSrcDeps({ basedir: config.basedir, resolveExtensions: client.resolve.extensions }),
      ];


      if (!debug) {
        /* eslint camelcase:0 */
        plugins.push(new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          mangle: {},
          compress: {
            warnings: false,
            properties: false,
          },
          output: {},
          comments: false,
        }));
      } else {
        plugins.push(new TimeFixPlugin());
      }

      // configuration - plugins
      // client only
      // 将已有的 plugins 添加到 bbq 设定的后面？
      client.plugins = plugins.concat(client.plugins).filter(v => v);

      // configuration - node
      // client only
      client.node = xtend({ __filename: true, __dirname: true }, client.node);

      // configuration - module
      // client only
      const exposeEntryLoaders = Object.keys(client.entry).reduce((acc, name) => {
        const addExposeLoader = (item, index) => {
          const filepath = resolve.sync(item, { basedir: config.basedir });
          const exposeName = index === undefined ? name : expose(filepath, `${config.basedir}/src/`);
          return {
            test: filepath,
            enforce: 'post',
            loader: `expose-loader?${exposeName}`,
          };
        };
        const item = client.entry[name];
        return acc.concat(Array.isArray(item) ? item.map(addExposeLoader) : addExposeLoader(item));
      }, []);
      client.module = xtend(client.module, {
        rules: getLoaders('web')
          .concat(client.module && client.module.rules, exposeEntryLoaders)
          .filter(v => v),
      });

      // output
      const output = xtend(client.output, {
        filename,
        chunkFilename: chunkfilename,
        path: config.outputdir,
        pathinfo: true,
        publicPath: defined(config.publicPath, config.rootdir),
      });

      // configuration - output
      // shared partial
      client.output = output;

      if (debug) {
        // configuration - recordsPath
        /* client.recordsPath = `${config.basedir}/.webpack-hmr-records.json`; */

        const devServerClient = require.resolve('webpack-dev-server/client');
        Object.keys(client.entry).forEach((key) => {
          client.entry[key] = []
            .concat(client.entry[key])
            .concat(devServerClient + (config.webpackDevServerUrl ? `?${config.webpackDevServerUrl}` : ''));
        });

        /* client.plugins.push(new webpack.HotModuleReplacementPlugin()); */
      }
    });


    // server land
    server.name = 'server';

    server.devtool = defined(server.devtool, devtool);
    // configuration - context
    // shared
    server.context = config.basedir;

    // 主文件 (entry)
    // configuration - entry
    // shared
    if (server.entry) {
      if (typeof server.entry === 'string') {
        server.entry = getEntry(server.entry);
      }
    } else {
      throw new Error('server MUST HAVE one entry at least');
    }
    if (Object.keys(server.entry).length > 1) {
      throw new Error('server MUST HAVE one entry at most');
    }

    server.bail = defined(server.bail, !debug);

    // configuration - target
    // server only
    server.target = 'node';

    // configuration - output
    // server only
    server.output = xtend(clients[0].output, {
      path: `${config.outputdir}/SHOULD_NOT_EXISTS_DIRECTORY`,
    });

    // configuration - module
    // server only
    server.module = xtend(server.module, {
      rules: getLoaders('node')
        .concat(server.module && server.module.rules, {
          loader: libify,
          enforce: 'post',
          options: {
            webpackConfigPath: config.webpackConfigPath,
            appRevisionsPath: config.appRevisionsPath,
          },
        })
        .filter(v => v),
    });

    // server resolve
    server.resolve = xtend({
      extensions: resolveExtensions,
    }, server.resolve);

    // configuration - plugins
    // server only
    const serverPlugins = [
      new ShouldNotEmit(),
      new NamedStats(),
      new webpack.IgnorePlugin(/webpack\.config/),
      new webpack.IgnorePlugin(/app-revisions\.json/),
    ];
    if (config.staticRendering) {
      serverPlugins.push(new StaticRendering(config, server));
    }
    server.plugins = serverPlugins.concat(server.plugins).filter(v => v);

    return clients.concat(server);
  };
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
NamedStats.prototype.apply = function apply(compiler) {
  compiler.plugin('done', (stats) => {
    const toString = stats.toString;
    stats.toString = function statsToString(options) {
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

StaticRendering.prototype.get = function get(srcfile, basedir) {
  const ext = path.extname(srcfile);
  let libfile = basedir + srcfile.slice(basedir.length).replace('/src/', '/lib/');
  if (ext === '' || (ext !== '.js' && ext !== '.json')) {
    libfile = `${libfile}.js`;
  }
  return libfile;
};
StaticRendering.prototype.apply = function apply(compiler) {
  const config = this.config;
  const staticRendering = config.staticRendering;
  /* eslint max-len:0 */
  const entryserver = this.get(this.server.entry[Object.keys(this.server.entry)[0]], config.basedir);
  const entry = defined(staticRendering.app, entryserver);

  compiler.plugin('after-compile', (compilation, callback) => {
    if (debug) {
      clearRequireCache(entryserver);
    }
    let uris;
    if (Array.isArray(staticRendering)) {
      uris = staticRendering;
    } else {
      uris = staticRendering.uris;
    }
    if (typeof uris === 'function') {
      uris = uris();
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
