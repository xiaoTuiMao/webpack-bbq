'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toString = require('ramda/src/toString');

var _toString2 = _interopRequireDefault(_toString);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _client = require('./client.css');

var _client2 = _interopRequireDefault(_client);

var _bbq = require('./bbq.jpg');

var _bbq2 = _interopRequireDefault(_bbq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint no-underscore-dangle:0 */
/* eslint react/prefer-stateless-function:0 */
/* eslint react/prop-types:0 */

// https://commons.wikimedia.org/wiki/File:Bbq.jpg


var Example = function (_Component) {
  _inherits(Example, _Component);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
  }

  _createClass(Example, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: _client2['default'].img },
          _react2['default'].createElement('img', { src: _bbq2['default'], alt: 'bbq' })
        ),
        children
      );
    }
  }]);

  return Example;
}(_react.Component);

Example.getInitialCssText = function () {
  return (0, _toString2['default'])(_client2['default']);
};

exports['default'] = Example;
module.exports = exports['default'];