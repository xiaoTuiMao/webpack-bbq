'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _appRevisions = require('../../../app-revisions.json');

var _appRevisions2 = _interopRequireDefault(_appRevisions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/prop-types:0 */
/* eslint react/no-danger:0 */
var Html = function Html(_ref) {
  var store = _ref.store,
      cssText = _ref.cssText,
      appHtml = _ref.appHtml;

  var state = store.getState();
  var appName = state.appName;

  var initialState = JSON.stringify(state);
  return _react2.default.createElement(
    'html',
    { lang: 'zh' },
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: cssText } })
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement('div', { id: appName, dangerouslySetInnerHTML: { __html: appHtml } }),
      _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: 'window.initialState = ' + initialState + ';' } }),
      _react2.default.createElement('script', { src: _appRevisions2.default[appName + '.js'] })
    )
  );
};

exports.default = Html;
module.exports = exports['default'];