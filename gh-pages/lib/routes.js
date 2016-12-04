'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Index = require('./Index');

var _Index2 = _interopRequireDefault(_Index);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = {
  path: _config.rootdir,
  components: _Index2.default,
  childRoutes: [{
    path: 'index.html',
    components: _Example2.default
  }]
};

exports.default = [index];
module.exports = exports['default'];