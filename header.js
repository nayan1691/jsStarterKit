System.register(["systemjs-webpack-interop", "react", "react-dom"], function (_export, _context) {
  "use strict";

  var setPublicPath, React, ReactDOM, lifecycles, bootstrap, mount, unmount;
  return {
    setters: [function (_systemjsWebpackInterop) {
      setPublicPath = _systemjsWebpackInterop.setPublicPath;
    }, function (_react) {
      React = _react.default;
    }, function (_reactDom) {
      ReactDOM = _reactDom.default;
    }],
    execute: function () {
      setPublicPath('header');
      lifecycles = singleSpaReact({
        React,
        ReactDOM,
        rootComponent: () => React.createElement("h1", null, "Header")
      });

      _export("bootstrap", bootstrap = lifecycles.bootstrap);

      _export("mount", mount = lifecycles.mount);

      _export("unmount", unmount = lifecycles.unmount);
    }
  };
});
