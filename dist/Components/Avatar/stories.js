"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)("Components|Avatar", module).add("Avatar cursor pointer", function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    src: "https://via.placeholder.com/200x200",
    cursorPointer: true,
    onEvent: function onEvent(e) {}
  });
});