'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStaticRender;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _match = require('react-router/lib/match');

var _match2 = _interopRequireDefault(_match);

var _cleanCss = require('clean-css');

var _cleanCss2 = _interopRequireDefault(_cleanCss);

var _Html = require('./components/Html');

var _Html2 = _interopRequireDefault(_Html);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cleanCSS(source) {
  return new _cleanCss2.default().minify(source).styles;
}

function createStaticRender(_ref) {
  var appName = _ref.appName;
  var routes = _ref.routes;
  var reducer = _ref.reducer;

  return function staticRender(url, callback) {
    var store = (0, _redux.createStore)(reducer, {
      appName: appName,
      url: url
    }, (0, _redux.applyMiddleware)(_reduxThunk2.default));

    (0, _match2.default)({ location: url, routes: routes }, function (err, redirectLocation, renderProps) {
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

      var rootEl = _react2.default.createElement(_Html2.default, { store: store, appHtml: appHtml, cssText: cleanCSS(cssText) });
      var html = _server2.default.renderToStaticMarkup(rootEl);
      callback(err, '<!doctype html>' + html);
    });
  };
}
module.exports = exports['default'];