"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Grid = _interopRequireWildcard(require("../Grid"));

var _Header = _interopRequireDefault(require("../Typography/Header"));

var _addonKnobs = require("@storybook/addon-knobs");

var _ = _interopRequireDefault(require("."));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var label = 'Styles';
var defaultValue = {
  backgroundColor: 'red'
};
var groupId = 'GROUP-ID1';
var stories = (0, _react2.storiesOf)('Components|Buttons', module) // stories.addDecorator(withKnobs)
.add('Default', function () {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], null, /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h1: true,
    label: (0, _addonKnobs.text)("title", "Buttons")
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    data: (0, _addonKnobs.object)(label, defaultValue, groupId),
    label: "Default with data"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h2: true,
    label: "Button sizes"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    xs: true,
    label: "Button size xs"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    sm: true,
    label: "Button size sm"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    md: true,
    label: "Button size md"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    label: "Button size lg"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h2: true,
    label: "Button Default loading"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    xs: true,
    loading: true,
    label: "Button size xs"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    sm: true,
    loading: true,
    label: "Button size sm"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    md: true,
    loading: true,
    label: "Button size md"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    loading: true,
    label: "Button size lg"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h2: true,
    label: "Button Default disabled"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    xs: true,
    disabled: true,
    label: "Button size xs"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    sm: true,
    disabled: true,
    label: "Button size sm"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    md: true,
    disabled: true,
    label: "Button size md"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    disabled: true,
    label: "Button size lg"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h2: true,
    label: "Button colorful"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    xs: true,
    primary: true,
    label: "Button primary size xs"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    sm: true,
    primary: true,
    label: "Button primary size sm"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    md: true,
    primary: true,
    label: "Button primary size md"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    primary: true,
    label: "Button primary size lg"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    primary: true,
    disabled: true,
    label: "Button primary size lg disabled"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    primary: true,
    loading: true,
    label: "Button primary size lg loading",
    loadingLabel: "Applying..."
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    xs: true,
    danger: true,
    label: "Button danger size xs"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    sm: true,
    danger: true,
    label: "Button danger size sm"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    md: true,
    danger: true,
    label: "Button danger size md"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    danger: true,
    label: "Button danger size lg"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    danger: true,
    disabled: true,
    label: "Button danger size lg disabled"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    danger: true,
    loading: true,
    label: "Button danger size lg loading",
    loadingLabel: "Applying..."
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    xs: true,
    success: true,
    label: "Button success size xs"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    sm: true,
    success: true,
    label: "Button success size sm"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    md: true,
    success: true,
    label: "Button success size md"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    success: true,
    label: "Button success size lg"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    success: true,
    disabled: true,
    label: "Button success size lg disabled"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    success: true,
    loading: true,
    label: "Button success size lg loading",
    loadingLabel: "Applying..."
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    xs: true,
    secondary: true,
    label: "Button secondary size xs"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    sm: true,
    secondary: true,
    label: "Button secondary size sm"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    md: true,
    secondary: true,
    label: "Button secondary size md"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    secondary: true,
    label: "Button secondary size lg"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    secondary: true,
    disabled: true,
    label: "Button secondary size lg disabled"
  })), /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    lg: true,
    secondary: true,
    loading: true,
    label: "Button secondary size lg loading",
    loadingLabel: "Applying..."
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    h1: true,
    label: "Button full size"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    full: true,
    label: "Default full size"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    full: true,
    xs: true,
    label: "xs full size"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    full: true,
    sm: true,
    label: "sm full size"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    full: true,
    md: true,
    label: "md full size"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    full: true,
    lg: true,
    label: "lg full size"
  }))), /*#__PURE__*/_react["default"].createElement(_Grid.Row, null, /*#__PURE__*/_react["default"].createElement(_Grid.Column, {
    full: true
  }, /*#__PURE__*/_react["default"].createElement(_["default"], {
    onEvent: function onEvent(e) {
      console.log(e);
    },
    full: true,
    lg: true,
    loading: true,
    label: "lg full size loading",
    loadingLabel: "Applying..."
  }))));
});