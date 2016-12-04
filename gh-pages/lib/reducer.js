'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var appName = function appName() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return state;
};
var url = function url() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return state;
};

exports.default = (0, _redux.combineReducers)({
  appName: appName,
  url: url
});
module.exports = exports['default'];