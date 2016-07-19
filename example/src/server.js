import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import match from 'react-router/lib/match';

import Html from './frameworks/components/Html';
import App from './frameworks/components/App';
import reducer from './reducer';
import routes from './routes';

export default function staticRendering(url, callback) {
  const store = createStore(reducer, {
    appName: 'client',
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
    const rootEl = <Html store={store} appHtml={appHtml} cssText={cssText} />;
    const html = ReactDOMServer.renderToStaticMarkup(rootEl);
    callback(err, `<!doctype html>${html}`);
  });
}
