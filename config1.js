System.register(["single-spa"], function (_export, _context) {
  "use strict";

  var singleSpa;
  return {
    setters: [function (_singleSpa) {
      singleSpa = _singleSpa;
    }],
    execute: function () {
      singleSpa.registerApplication('vat', () => SystemJS.import('vat'), location => {
        console.log(location.pathname);
        return location.pathname.startsWith('/vat');
      });
      singleSpa.registerApplication('it', () => SystemJS.import('it'), location => {
        console.log(location.pathname);
        return location.pathname.startsWith('/it');
      });
      singleSpa.start();
    }
  };
});
