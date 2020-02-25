System.register(["react", "react-dom", "@rmwc/button"], function (_export, _context) {
  "use strict";

  var React, ReactDOM, Button;
  return {
    setters: [function (_react) {
      React = _react.default;
    }, function (_reactDom) {
      ReactDOM = _reactDom.default;
    }, function (_rmwcButton) {
      Button = _rmwcButton.default;
    }],
    execute: function () {
      ReactDOM.render(React.createElement(React.Fragment, null, React.createElement(Button, null, "A button created by React")), document.getElementById('react-root'));
    }
  };
});
