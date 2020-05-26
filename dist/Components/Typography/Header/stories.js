"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

var _Body = _interopRequireDefault(require("../Body"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('Typography|Headers', module).add('Header e Body', function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Header Default"
  }), /*#__PURE__*/_react["default"].createElement(_Body["default"], {
    label: "Body label "
  }));
}).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Header Default"
  }), /*#__PURE__*/_react["default"].createElement(_["default"], {
    h1: true,
    label: "Header H1"
  }), /*#__PURE__*/_react["default"].createElement(_["default"], {
    h2: true,
    label: "Header H2"
  }), /*#__PURE__*/_react["default"].createElement(_["default"], {
    h3: true,
    label: "Header H3"
  }), /*#__PURE__*/_react["default"].createElement(_["default"], {
    h4: true,
    label: "Header H4"
  }), /*#__PURE__*/_react["default"].createElement(_["default"], {
    h5: true,
    label: "Header H5"
  }), /*#__PURE__*/_react["default"].createElement(_["default"], {
    h6: true,
    label: "Header H6"
  }));
}).add('Colorful', function () {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Header Default"
  }), /*#__PURE__*/_react["default"].createElement(_["default"], {
    color: "Deep-Purple-A200",
    h1: true,
    label: "Header H1 Deep-Purple-A200"
  }), /*#__PURE__*/_react["default"].createElement(_["default"], {
    color: "Light-Blue-100",
    h2: true,
    label: "Header H2 Light-Blue-100"
  }), /*#__PURE__*/_react["default"].createElement(_["default"], {
    color: "Teal-400",
    h3: true,
    label: "Header H3 Teal-400"
  }), /*#__PURE__*/_react["default"].createElement(_["default"], {
    color: "Pink-A200",
    h4: true,
    label: "Header H4 Pink-A200"
  }), /*#__PURE__*/_react["default"].createElement(_["default"], {
    color: "Lime-A400",
    h5: true,
    label: "Header H5 Lime-A400"
  }), /*#__PURE__*/_react["default"].createElement(_["default"], {
    color: "Blue-A200",
    h6: true,
    label: "Header H6 Blue-A200"
  }));
});