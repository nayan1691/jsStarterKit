System.register(["react"], function (_export, _context) {
  "use strict";

  var React, Header;
  return {
    setters: [function (_react) {
      React = _react.default;
    }],
    execute: function () {
      Header = () => React.createElement("h2", null, "Header");

      _export("default", Header);
    }
  };
});
