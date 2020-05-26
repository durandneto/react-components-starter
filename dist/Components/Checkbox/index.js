"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = require("../Grid");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InputCheckbox = function InputCheckbox(props) {
  var _useState = (0, _react.useState)(props.checked || false),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _useState3 = (0, _react.useState)(props.error || false),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_styles.StyledContainer, {
    id: props.id,
    checked: checked,
    disabled: props.disabled || props.loading,
    error: error,
    loading: props.loading,
    success: props.success,
    onMouseEnter: function onMouseEnter(e) {
      props.onEvent({
        type: "onMouseEnter",
        origin: "Checkbox",
        props: {
          data: _objectSpread({}, props.data, {
            checked: checked
          }),
          state: {
            error: error,
            loading: props.loading,
            success: props.success,
            disabled: props.disabled
          }
        }
      });
    },
    onClick: function onClick() {
      setError(false);
      !props.loading && !props.disabled && props.onEvent({
        type: "onClick",
        origin: "Checkbox",
        props: {
          data: _objectSpread({}, props.data, {
            checked: !checked
          }),
          state: {
            error: error,
            loading: props.loading,
            success: props.success,
            disabled: props.disabled
          }
        }
      });
      !props.loading && !props.disabled && setChecked(!checked);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Row, {
    alignCenter: true,
    fitContent: true
  }, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    noPadding: true
  }, /*#__PURE__*/_react["default"].createElement(_styles.StyledCheckbox, {
    checked: checked,
    loading: props.loading,
    error: error,
    success: props.success
  }, /*#__PURE__*/_react["default"].createElement(_styles.StyledInput, {
    name: props.name,
    checked: checked,
    onChange: function onChange() {},
    type: "checkbox"
  }))), props.label && /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_styles.StyledText, {
    label: props.label,
    checked: checked,
    loading: props.loading
  })), props.loading && /*#__PURE__*/_react["default"].createElement(_styles.StyledIconLoading, {
    label: props.label
  })));
};

InputCheckbox.defaultProps = {
  onEvent: null,
  data: null,
  checked: false,
  disabled: false,
  success: false,
  error: false,
  loading: false
};
InputCheckbox.propTypes = {
  label: _propTypes["default"].string,
  name: _propTypes["default"].string.isRequired,
  onEvent: _propTypes["default"].func.isRequired,
  data: _propTypes["default"].string,
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  success: _propTypes["default"].bool
};
var _default = InputCheckbox;
exports["default"] = _default;