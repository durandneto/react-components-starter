"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Body = function Body(props) {
  return /*#__PURE__*/_react["default"].createElement(_styles["default"], props, props.label);
};

Body.defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  color: 'Blue-Grey-800'
};
Body.propTypes = {
  label: _propTypes["default"].string.isRequired,
  color: _propTypes["default"].string,
  xs: _propTypes["default"].bool,
  sm: _propTypes["default"].bool,
  md: _propTypes["default"].bool,
  lg: _propTypes["default"].bool
};
var _default = Body;
exports["default"] = _default;