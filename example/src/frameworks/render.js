import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import browserHistory from 'react-router/lib/browserHistory';

import App from './components/App';

export default function render({ routes, reducer }) {
  const store = createStore(reducer, window.initialState, applyMiddleware(thunk));
  const router = { routes, history: browserHistory };
  const el = document.getElementById(window.initialState.appName);

  return ReactDOM.render(<App store={store} router={router} />, el);
}
