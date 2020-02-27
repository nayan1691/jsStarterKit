System.register(["single-spa"], function (_export, _context) {
  "use strict";

  var singleSpa;
  return {
    setters: [function (_singleSpa) {
      singleSpa = _singleSpa;
    }],
    execute: function () {
      singleSpa.registerApplication('header', () => SystemJS.import('header'), location => location.pathname.startsWith('/'));
      singleSpa.registerApplication('vat', () => SystemJS.import('vat'), location => location.pathname.startsWith('/vat'));
      singleSpa.registerApplication('it', () => SystemJS.import('it'), location => location.pathname.startsWith('/it'));
      singleSpa.start();
    }
  };
});
