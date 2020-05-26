"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)('Typography|Body', module).add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    label: "Body component default"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    xs: true,
    label: "Body component XS"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    sm: true,
    label: "Body component SM"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    md: true,
    label: "Body component MD"
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    lg: true,
    label: "Body component LG"
  })));
}).add('XS', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    xs: true,
    label: "Body component"
  });
}).add('SM', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    sm: true,
    label: "Body component"
  });
}).add('MD', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    md: true,
    label: "Body component"
  });
}).add('LG', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    lg: true,
    label: "Body component"
  });
}).add('Colorful', function () {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    color: "Blue-600",
    lg: true,
    label: "Body component Blue-600"
  })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    color: "Pink-400",
    xs: true,
    label: "Body component Pink-400"
  })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    color: "Indigo-900",
    lg: true,
    label: "Body component Indigo-900"
  })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    color: "Light-Green-A400",
    md: true,
    label: "Body component Light-Green-A400"
  })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    color: "Brown-300",
    label: "Body component Brown-300"
  })), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    color: "Red-700",
    lg: true,
    label: "Body component Red-700"
  })));
});