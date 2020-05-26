"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = function Header(props) {
  switch (true) {
    case props.h1:
      return /*#__PURE__*/_react["default"].createElement(_styles.H1, props, props.label);

    case props.h3:
      return /*#__PURE__*/_react["default"].createElement(_styles.H3, props, props.label);

    case props.h4:
      return /*#__PURE__*/_react["default"].createElement(_styles.H4, props, props.label);

    case props.h5:
      return /*#__PURE__*/_react["default"].createElement(_styles.H5, props, props.label);

    case props.h6:
      return /*#__PURE__*/_react["default"].createElement(_styles.H6, props, props.label);

    default:
      return /*#__PURE__*/_react["default"].createElement(_styles.H2, props, props.label);
  }
};

Header.defaultProps = {
  h1: false,
  h2: true,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
  color: 'Blue-Grey-900'
};
Header.propTypes = {
  label: _propTypes["default"].string.isRequired,
  h1: _propTypes["default"].bool,
  h2: _propTypes["default"].bool,
  h3: _propTypes["default"].bool,
  h4: _propTypes["default"].bool,
  h5: _propTypes["default"].bool,
  h6: _propTypes["default"].bool,
  color: _propTypes["default"].string
};
var _default = Header;
exports["default"] = _default;