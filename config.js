import * as singleSpa from 'single-spa'

singleSpa.registerApplication('vat', () => SystemJS.import('vat'), location => {
            console.log(location.pathname);
            return location.pathname.startsWith('/vat');
          })
singleSpa.registerApplication('it', () => SystemJS.import('it'), location => {
            console.log(location.pathname);
            return location.pathname.startsWith('/it');
          })

singleSpa.start()
