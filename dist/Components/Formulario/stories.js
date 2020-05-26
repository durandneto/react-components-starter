"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ = _interopRequireDefault(require("."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultErrorController = {
  loading: (0, _addonKnobs["boolean"])('Loading', false),
  disabled: (0, _addonKnobs["boolean"])('Disabled', false),
  error: (0, _addonKnobs["boolean"])('Error', false),
  success: (0, _addonKnobs["boolean"])('Success', false)
};
(0, _react2.storiesOf)('Formulario|Responsivo', module).add('First Version ', function () {
  return /*#__PURE__*/_react["default"].createElement(_["default"], {
    controls: {
      name: (0, _addonKnobs.object)("Name", defaultErrorController, "Text"),
      email: (0, _addonKnobs.object)("E-mail", defaultErrorController, "Text"),
      subscribe: (0, _addonKnobs.object)("Subscribe", defaultErrorController, "Checkbox"),
      age: (0, _addonKnobs.object)("Subscribe", defaultErrorController, "Radio Buttons"),
      cta: (0, _addonKnobs.object)("CTA", defaultErrorController, "Buttons")
    },
    onEvent: function onEvent(e) {
      console.log(e);

      switch (true) {
        case e.type === "onMouseEnter" && e.origin === "Checkbox":
          // alert("onMouseEnter origin checkbox " + e.origin + " e User ID === " + e.props.data.user.id )
          break;

        case e.type === "onMouseEnter" && e.origin === "RadioButton":
          // alert("onMouseEnter Origin RadioButton === " + e.origin)
          break;

        case e.type === "onClick" && e.origin === "Button":
          alert("on click origin ".concat(e.origin));
          break;
      }
    }
  });
});