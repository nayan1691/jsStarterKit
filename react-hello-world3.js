System.register(["react", "react-dom", "@rmwc/fab"], function (_export, _context) {
  "use strict";

  var React, ReactDOM, Fab;
  return {
    setters: [function (_react) {
      React = _react.default;
    }, function (_reactDom) {
      ReactDOM = _reactDom.default;
    }, function (_rmwcFab) {
      Fab = _rmwcFab.default;
    }],
    execute: function () {
      ReactDOM.render(React.createElement(React.Fragment, null, React.createElement(Fab, {
        label: "A button created by React"
      })), document.getElementById('react-root'));
    }
  };
});
