System.register(["single-spa"], function (_export, _context) {
  "use strict";

  var singleSpa;

  function prefix(location, ...prefixes) {
    return prefixes.some(prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1);
  }

  function navbar(location) {
    return true;
  }

  function it(location) {
    return prefix(location, 'it');
  }

  function vat(location) {
    return prefix(location, 'vat');
  }

  return {
    setters: [function (_singleSpa) {
      singleSpa = _singleSpa;
    }],
    execute: function () {
      singleSpa.registerApplication('navbar', () => System.import('navbar'), navbar);
      singleSpa.registerApplication('people', () => System.import('it'), it);
      singleSpa.registerApplication('vat', () => System.import('vat'), vat);
      singleSpa.start();
    }
  };
});
