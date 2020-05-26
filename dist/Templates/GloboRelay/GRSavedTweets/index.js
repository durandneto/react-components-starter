"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GRTweetsBody = _interopRequireDefault(require("../GRTweetsBody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GRSavedTweets = function GRSavedTweets(props) {
  return /*#__PURE__*/_react["default"].createElement(_GRTweetsBody["default"], {
    preloading: props.preloading,
    message: props.message,
    dragging: props.dragging,
    draggable: false,
    tweets: props.tweets,
    userMentionEntities: props.userMentionEntities,
    data: props.data,
    onEvent: props.onEvent
  });
};

GRSavedTweets.propTypes = {
  onEvent: _propTypes["default"].func.isRequired
};
GRSavedTweets.defaultProps = {
  onEvent: _propTypes["default"].func.isRequired
};
var _default = GRSavedTweets;
exports["default"] = _default;