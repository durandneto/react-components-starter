"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Avatar = function Avatar(props) {
  return /*#__PURE__*/_react["default"].createElement(_styles.StyledAvatar, {
    src: props.src,
    cursorPointer: props.cursorPointer,
    loading: props.loading,
    onClick: function onClick(e) {
      if (props.onEvent) {
        props.onEvent({
          data: props.data,
          type: 'onClick',
          target: 'Avatar'
        });
      }
    }
  });
};

Avatar.defaultProps = {
  cursorPointer: false
};
Avatar.propTypes = {
  src: _propTypes["default"].string.isRequired,
  cursorPointer: _propTypes["default"].bool
};
var _default = Avatar;
exports["default"] = _default;