'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _staticRendering = require('./frameworks/staticRendering');

var _staticRendering2 = _interopRequireDefault(_staticRendering);

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appName = 'client';

exports.default = (0, _staticRendering2.default)({ appName: appName, routes: _routes2.default, reducer: _reducer2.default });
module.exports = exports['default'];