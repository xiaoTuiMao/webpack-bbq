'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = staticRendering;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _match = require('react-router/lib/match');

var _match2 = _interopRequireDefault(_match);

var _Html = require('./frameworks/components/Html');

var _Html2 = _interopRequireDefault(_Html);

var _App = require('./frameworks/components/App');

var _App2 = _interopRequireDefault(_App);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function staticRendering(url, callback) {
  var store = (0, _redux.createStore)(_reducer2.default, {
    appName: 'client',
    url: url
  });

  (0, _match2.default)({ location: url, routes: _routes2.default }, function (err, redirectLocation, renderProps) {
    if (err) {
      callback(err);
      return;
    }
    if (redirectLocation) {
      callback(new Error(redirectLocation));
      return;
    }
    if (!renderProps) {
      callback(new Error('match -> renderProps is missing: ' + url));
      return;
    }

    var appHtml = _server2.default.renderToString(_react2.default.createElement(_App2.default, { store: store, router: renderProps }));
    var cssText = renderProps.components.filter(function (component) {
      return component.getInitialCssText;
    }).map(function (component) {
      return component.getInitialCssText();
    }).join('');
    var rootEl = _react2.default.createElement(_Html2.default, { store: store, appHtml: appHtml, cssText: cssText });
    var html = _server2.default.renderToStaticMarkup(rootEl);
    callback(err, '<!doctype html>' + html);
  });
}
module.exports = exports['default'];