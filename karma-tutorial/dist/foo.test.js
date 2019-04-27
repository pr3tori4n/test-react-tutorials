"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _foo = require("./foo");

var _foo2 = _interopRequireDefault(_foo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Foo', function () {
  it('should render without erroring', function () {
    (0, _enzyme.render)(_react2.default.createElement(_foo2.default, null));
  });
});