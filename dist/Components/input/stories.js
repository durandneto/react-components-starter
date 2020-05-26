"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = _interopRequireWildcard(require("../Grid"));

var _Header = _interopRequireDefault(require("../Typography/Header"));

var _Body = _interopRequireDefault(require("../Typography/Body"));

var _ = _interopRequireDefault(require("."));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _react2.storiesOf)("Components|Input", module).add("default", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    value: "",
    data: {
      User: {
        id: 1
      }
    },
    placeholder: "Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))));
}).add("Variations", function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h1: true,
    label: "Controlled Inputs"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h3: true,
    color: "Blue-Grey-500",
    label: "No Validation"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    value: "",
    placeholder: "Simple Input",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h3: true,
    label: "Prioritizing component validation"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Body["default"], {
    color: "Blue-Grey-300",
    label: "Regex /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Body["default"], {
    color: "Blue-Grey-300",
    label: "Regex /^\d*$/"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    test: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    testMessage: "Invalid email",
    value: "",
    placeholder: "Type a email",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    test: /^\d*$/,
    testMessage: "Not a number",
    value: "",
    placeholder: "Type a number",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h3: true,
    color: "Red-500",
    label: "Prioritizing Server Validation"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Body["default"], {
    color: "Blue-Grey-300",
    label: "Regex /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Body["default"], {
    color: "Blue-Grey-300",
    label: "Regex /^\d*$/"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    test: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    testMessage: "Invalid email",
    error: "Server Error 503",
    value: "xxx@xxx.com",
    placeholder: "Type a email",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    test: /^\d*$/,
    testMessage: "Not a number",
    value: "zxczx",
    placeholder: "Type a number",
    error: "Server Error 500",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h3: true,
    color: "Blue-500",
    label: "Loading"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    loading: true,
    value: "Simple Input loading",
    placeholder: "Simple Input loading",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    loading: true,
    value: "Simple Input loading",
    placeholder: "Simple Input loading",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    loading: true,
    value: "Simple Input loading",
    placeholder: "Simple Input loading",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    loading: true,
    value: "Simple Input loading",
    placeholder: "Simple Input loading",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h3: true,
    color: "Green-500",
    label: "success"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    success: true,
    value: "Simple Input success",
    placeholder: "Simple Input success",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    success: true,
    value: "Simple Input success",
    placeholder: "Simple Input success",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    success: true,
    value: "Simple Input success",
    placeholder: "Simple Input success",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    success: true,
    value: "Simple Input disabled",
    placeholder: "Simple Input disabled",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h3: true,
    color: "Blue-Grey-500",
    label: "Disabled"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    disabled: true,
    value: "Simple Input disabled",
    placeholder: "Simple Input disabled",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    disabled: true,
    value: "Simple Input disabled",
    placeholder: "Simple Input disabled",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    disabled: true,
    value: "Simple Input disabled",
    placeholder: "Simple Input disabled",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    disabled: true,
    value: "Simple Input disabled",
    placeholder: "Simple Input disabled",
    onEvent: function onEvent(e) {
      console.log(e);
    }
  }))));
});