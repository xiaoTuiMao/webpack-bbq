'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Index = require('./Index');

var _Index2 = _interopRequireDefault(_Index);

var _Example = require('./Example');

var _Example2 = _interopRequireDefault(_Example);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = {
  path: '/',
  components: _Index2.default,
  childRoutes: [{
    path: 'example.html',
    components: _Example2.default
  }]
};

exports.default = [index];
module.exports = exports['default'];