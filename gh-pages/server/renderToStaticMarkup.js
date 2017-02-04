/* eslint global-require:0 */
const fs = require('fs');
const path = require('path');

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const redux = require('redux');
const thunk = require('redux-thunk').default;
const match = require('react-router/lib/match');
const CleanCSS = require('clean-css');

const config = require('../config');

const appName = 'client';
const routes = require('../lib/routes');
const reducer = require('../lib/reducer');
const Html = require('../lib/frameworks/components/Html');
const App = require('../lib/frameworks/components/App');
const revisions = require('../app-revisions.json');

let globalCss;
const globalCssFilePath = path.join(config.outputdir, revisions[`${appName}.css`]);
if (require.main.filename === require.resolve('../bin/build')) {
  globalCss = fs.readFileSync(globalCssFilePath, 'utf8');
} else {
  const devServer = require('./devServer');
  globalCss = devServer.middleware.fileSystem.readFileSync(globalCssFilePath, 'utf8');
}
const cleanCSS = source => new CleanCSS().minify(source).styles;

module.exports = (url, callback) => {
  const store = redux.createStore(reducer, {
    appName,
    url,
  }, redux.applyMiddleware(thunk));

  match({ location: url, routes }, (err, redirectLocation, renderProps) => {
    if (err) {
      callback(err);
      return;
    }
    if (redirectLocation) {
      callback(new Error(redirectLocation));
      return;
    }
    if (!renderProps) {
      callback(new Error(`match -> renderProps is missing: ${url}`));
      return;
    }

    const appHtml = ReactDOMServer.renderToString(React.createElement(App, {
      store,
      router: renderProps,
    }));
    const cssText = renderProps.components
      .filter(component => component.getInitialCssText)
      .map(component => component.getInitialCssText())
      .join('');

    const rootEl = React.createElement(Html, { store, appHtml, cssText: cleanCSS([globalCss, cssText].join('\n')) });
    const html = ReactDOMServer.renderToStaticMarkup(rootEl);
    callback(err, `<!doctype html>${html}`);
  });
};
