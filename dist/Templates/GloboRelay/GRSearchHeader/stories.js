"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('Templates|GloboRelay/GRSearchHeader', module).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log('GRSearchHeader', e);
    }
  });
}).add('Loading', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    loading: true,
    value: "obama",
    onEvent: function onEvent(e) {
      console.log('GRSearchHeader', e);
    }
  });
});