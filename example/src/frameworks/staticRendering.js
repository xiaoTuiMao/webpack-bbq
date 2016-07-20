import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import match from 'react-router/lib/match';
import CleanCSS from 'clean-css';

import Html from './components/Html';
import App from './components/App';

function cleanCSS(source) {
  return new CleanCSS().minify(source).styles;
}

export default function createStaticRender({ appName, routes, reducer }) {
  return function staticRender(url, callback) {
    const store = createStore(reducer, {
      appName,
      url,
    }, applyMiddleware(thunk));

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

      const appHtml = ReactDOMServer.renderToString(<App store={store} router={renderProps} />);
      const cssText = renderProps.components
        .filter(component => component.getInitialCssText)
        .map(component => component.getInitialCssText())
        .join('');

      const rootEl = <Html store={store} appHtml={appHtml} cssText={cleanCSS(cssText)} />;
      const html = ReactDOMServer.renderToStaticMarkup(rootEl);
      callback(err, `<!doctype html>${html}`);
    });
  }
}

