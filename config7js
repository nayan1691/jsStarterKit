System.register(["single-spa"], function (_export, _context) {
  "use strict";

  var singleSpa;
  return {
    setters: [function (_singleSpa) {
      singleSpa = _singleSpa;
    }],
    execute: function () {
      singleSpa.registerApplication('vat', () => System.import('vat'), location => location.pathname.startsWith('/vat'));
      singleSpa.registerApplication('it', () => System.import('it'), location => location.pathname.startsWith('/'));
      singleSpa.start();
    }
  };
});
