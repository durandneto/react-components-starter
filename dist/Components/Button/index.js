"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Button = function Button(props) {
  return /*#__PURE__*/_react["default"].createElement(_styles["default"], _extends({}, props, {
    disabled: props.disabled || props.loading,
    onClick: function onClick(e) {
      props.onEvent({
        type: 'onClick',
        origin: 'Button',
        data: props.data
      });
    }
  }), props.loading && props.loadingLabel ? props.loadingLabel : props.label);
};

Button.propTypes = {
  disabled: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  label: _propTypes["default"].string.isRequired,
  loadingLabel: _propTypes["default"].string,
  xs: _propTypes["default"].bool,
  sm: _propTypes["default"].bool,
  md: _propTypes["default"].bool,
  lg: _propTypes["default"].bool,
  success: _propTypes["default"].bool,
  primary: _propTypes["default"].bool,
  danger: _propTypes["default"].bool,
  secondary: _propTypes["default"].bool,
  data: _propTypes["default"].object,
  onEvent: _propTypes["default"].func.isRequired
};
Button.defaultProps = {
  disabled: false,
  loading: false,
  loadingLabel: null,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  success: false,
  primary: false,
  danger: false,
  secondary: false,
  data: {}
};
var _default = Button;
exports["default"] = _default;