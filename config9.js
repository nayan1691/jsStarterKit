System.register(["single-spa"], function (_export, _context) {
  "use strict";

  var singleSpa;

  function prefix(location, ...prefixes) {
    return prefixes.some(prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1);
  }

  function it(location) {
    return true;
  } // function people(location) {
  //   return prefix(location, 'people')
  // }


  function vat(location) {
    return prefix(location, 'vat');
  }

  return {
    setters: [function (_singleSpa) {
      singleSpa = _singleSpa;
    }],
    execute: function () {
      singleSpa.registerApplication('it', () => SystemJS.import('it'), it); // singleSpa.registerApplication('people', () => SystemJS.import('@portal/people'), isActive.people)

      singleSpa.registerApplication('vat', () => SystemJS.import('vat'), vat);
      singleSpa.start();
    }
  };
});
