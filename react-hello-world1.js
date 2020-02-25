System.register(["react", "react-dom", "vp"], function (_export, _context) {
  "use strict";

  var React, ReactDOM, TextInput;
  return {
    setters: [function (_react) {
      React = _react.default;
    }, function (_reactDom) {
      ReactDOM = _reactDom.default;
    }, function (_vp) {
      TextInput = _vp.TextInput;
    }],
    execute: function () {
      ReactDOM.render(React.createElement(React.Fragment, null, React.createElement("button", null, "A button created by React"), React.createElement(TextInput, null)), document.getElementById('react-root'));
    }
  };
});
