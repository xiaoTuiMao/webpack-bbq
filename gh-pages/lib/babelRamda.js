'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _multiply = require('ramda/src/multiply');

var _multiply2 = _interopRequireDefault(_multiply);

var _add = require('ramda/src/add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function innerAdd(a, b) {
  var result = add(a, b);
  function add(c, d) {
    return c + d;
  }
  return result;
} /* eslint no-use-before-define: 0, no-shadow: 0 */


var outerAdd = _add2['default'];

var output = (0, _multiply2['default'])(innerAdd(1, 2), outerAdd(3, 4));

exports['default'] = output;
module.exports = exports['default'];