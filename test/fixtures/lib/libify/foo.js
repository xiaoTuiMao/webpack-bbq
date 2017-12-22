'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-unused-vars:0 */
var Foobar = function Foobar() {
  _classCallCheck(this, Foobar);
};

var foo = 'Bar';

var bar = function bar() {
  return 'Foo';
};

module.exports = bar + ' ' + foo;