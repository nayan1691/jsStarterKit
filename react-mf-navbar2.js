System.register(["react","react-dom"],(function(e){var t,n;return{setters:[function(e){t=e},function(e){n=e}],execute:function(){e(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=21)}([function(e,n){e.exports=t},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,a,c){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,i,a,c],l=0;(u=new Error(t.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},function(e,t,n){e.exports=n(11)()},function(e,t){e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Scoped=void 0;var r=c(n(0)),o=c(n(3)),i=n(2),a=n(5);function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=!!o.default.createPortal,h=function(e){function t(e){var n,o,i;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,i=l(t).call(this,e),n=!i||"object"!==u(i)&&"function"!=typeof i?f(o):i,m(f(f(n)),"addKremlingAttributeToChildren",(function(e){return r.default.Children.map(e,(function(e){if(r.default.isValidElement(e)){if(e.type===r.default.Fragment&&r.default.Fragment){var t=n.addKremlingAttributeToChildren(e.props.children);return r.default.cloneElement(e,{},t)}return r.default.cloneElement(e,m({},n.state.kremlingAttr,n.state.kremlingAttrValue))}return e}))})),m(f(f(n)),"doneWithCss",(function(){n.state.styleRef&&0==--n.state.styleRef.kremlings&&(delete a.styleTags[n.state.rawCss],n.state.styleRef.parentNode.removeChild(n.state.styleRef))})),n.state={},!e.css)throw Error("Kremling's <Scoped /> component requires the 'css' prop.");if("object"===u(e.css)&&("string"!=typeof e.css.id||"string"!=typeof e.css.styles))throw Error('Kremling\'s <Scoped /> component requires either a string or an object with "id" and "styles" properties.');return n.state=n.newCssState(e),n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){if(void 0===this.props.children||null===this.props.children||!1===this.props.children||!0===this.props.children)return null;var e=this.addKremlingAttributeToChildren(this.props.children);if(d)return e;if(e.length>1)throw new Error("kremling's <Scoped /> component requires exactly one child element unless you are using react@>=16");return 1===e.length?e[0]:null}},{key:"componentDidUpdate",value:function(e){var t=e.postcss||e.css,n=this.props.postcss||this.props.css;t===n&&t.id===n.id&&t.styles===n.styles&&t.namespace===n.namespace||(this.doneWithCss(),this.setState(this.newCssState(this.props)))}},{key:"componentWillUnmount",value:function(){this.doneWithCss()}},{key:"newCssState",value:function(e){var n,r,o,i=e.postcss||e.css,c=Boolean(i&&i.id),u=(c?i.namespace:e.namespace)||t.defaultNamespace,s=c?i.styles:i;if(!c){if("string"!=typeof i)return;if(i.indexOf("&")<0&&i.trim().length>0){var l=i.substring(0,e.css.indexOf("{")).trim();console.warn("Kremling's <Scoped css=\"...\"> css prop should have the '&' character in it to scope the css classes: ".concat(l))}}var p=a.styleTags[s];if(p)n=p,p.kremlings++,r=n.kremlingAttr,o=n.kremlingValue;else{r=u,o=c?i.id:(0,a.incrementCounter)();var f="[".concat(r,'="').concat(o,'"]'),m=c?s:(0,a.transformCss)(s,f),d=document.createElement("style");d.setAttribute("type","text/css"),d.textContent=m,d.kremlings=1,d.kremlingAttr=r,d.kremlingValue=o,document.head.appendChild(d),a.styleTags[s]=d,n=d}return{isPostCss:c,rawCss:s,styleRef:n,kremlingAttr:r,kremlingAttrValue:o}}}])&&s(n.prototype,o),i&&s(n,i),t}(r.default.Component);t.Scoped=h,m(h,"propTypes",{css:(0,i.oneOfType)([i.string,i.object]),postcss:i.object,namespace:i.string}),m(h,"defaultNamespace","kremling")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=function(){r=0,t.styleTags=o={}},t.transformCss=function(e,t){return e.replace(/& ([^{}])+{/g,(function(e,n){return e.split(",").map((function(e){if(-1===(e=e.trim()).indexOf("&"))return e.replace("{","").trim();e=/[^&](.+)[^{]+/g.exec(e)[0].trim();var n=!1;return/^([.#]\w+)/.test(e)||(n=!0),n?"".concat(t," ").concat(e,", ").concat(e).concat(t):"".concat(t," ").concat(e,", ").concat(t).concat(e)})).join(", ")+" {"}))},t.styleTags=t.incrementCounter=void 0;var r=0;t.incrementCounter=function(){return r++};var o={};t.styleTags=o},function(e,t,n){var r,o,i;o=[t],void 0===(i="function"==typeof(r=function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(l){if("object"!==r(l))throw new Error("single-spa-react requires a configuration object");var p=function(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(o,!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},i,{},l);if(!p.React)throw new Error("single-spa-react must be passed opts.React");if(!p.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!p.rootComponent&&!p.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");!o&&p.React.createContext&&(e.SingleSpaContext=o=p.React.createContext());var f={bootstrap:a.bind(null,p),mount:c.bind(null,p),unmount:u.bind(null,p)};return p.parcelCanUpdate&&(f.update=s.bind(null,p)),f},e.SingleSpaContext=void 0;var o=null;e.SingleSpaContext=o;var i={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElementGetter:null,parcelCanUpdate:!0};function a(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function c(e,t){return new Promise((function(n,r){!e.suppressComponentDidCatchWarning&&function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)&&(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not have a prototype.  If using a functional component, wrap it in an error boundary or other class that implements componentDidCatch to avoid accidentally unmounting the entire single-spa application")));var i=function(e,t){return(t=t&&t.customProps?t.customProps:t).domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof i)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var a=e.React.createElement(e.rootComponent,t),c=o?e.React.createElement(o.Provider,{value:t},a):a,u=function(e,t){var n=e();if(!n)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return n}(i,t);l({elementToRender:c,domElement:u,whenFinished:function(){n(this)},opts:e}),e.domElement=u}))}function u(e,t){return Promise.resolve().then((function(){e.ReactDOM.unmountComponentAtNode(e.domElement)}))}function s(e,t){return new Promise((function(n,r){var i=e.React.createElement(e.rootComponent,t);l({elementToRender:o?e.React.createElement(o.Provider,{value:t},i):i,domElement:e.domElement,whenFinished:function(){n(this)},opts:e})}))}function l(e){var t=e.opts,n=e.elementToRender,r=e.domElement,o=e.whenFinished;return"createRoot"===t.renderType?t.ReactDOM.createRoot(r).render(n,o):"createBlockingRoot"===t.renderType?t.ReactDOM.createBlockingRoot(r).render(n,o):"hydrate"===t.renderType?t.ReactDOM.hydrate(n,r,o):t.ReactDOM.render(n,r,o)}})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"always",{enumerable:!0,get:function(){return r.always}}),Object.defineProperty(t,"a",{enumerable:!0,get:function(){return r.a}}),Object.defineProperty(t,"maybe",{enumerable:!0,get:function(){return r.maybe}}),Object.defineProperty(t,"m",{enumerable:!0,get:function(){return r.m}}),Object.defineProperty(t,"toggle",{enumerable:!0,get:function(){return r.toggle}}),Object.defineProperty(t,"t",{enumerable:!0,get:function(){return r.t}}),Object.defineProperty(t,"css",{enumerable:!0,get:function(){return r.css}}),Object.defineProperty(t,"c",{enumerable:!0,get:function(){return r.c}}),Object.defineProperty(t,"Scoped",{enumerable:!0,get:function(){return o.Scoped}}),Object.defineProperty(t,"useCss",{enumerable:!0,get:function(){return i.useCss}}),Object.defineProperty(t,"k",{enumerable:!0,get:function(){return a.k}});var r=n(10),o=n(4),i=n(13),a=n(14)},function(e,t){e.exports={styles:'[navbar="p0"] .root,[navbar="p0"].root { background-color: var(--primary); display: flex; align-items: center; justify-content: space-between; } [navbar="p0"] .root>*,[navbar="p0"].root>* { display: flex; align-items: center; } [navbar="p0"] .primary-navigation-link,[navbar="p0"].primary-navigation-link { color: var(--white); text-decoration: none; margin-left: 16px; margin-right: 16px; } [navbar="p0"] .primary-navigation-link:first-child,[navbar="p0"].primary-navigation-link:first-child { margin-left: 32px; } [navbar="p0"] .externalLink,[navbar="p0"] .externalLink:hover,[navbar="p0"] .externalLink:focus,[navbar="p0"] .externalLink:visited,[navbar="p0"].externalLink,[navbar="p0"].externalLink:hover,[navbar="p0"].externalLink:focus,[navbar="p0"].externalLink:visited { padding: 0 16px; color: white; text-decoration: none; } ',id:"p0",namespace:"navbar"}},function(e,t,n){"use strict";t.__esModule=!0;var r=i(n(0)),o=i(n(16));function i(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},function(e,t,n){"use strict";function r(){}function o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c(this,t.join(" "))}function i(e,t){if("string"!=typeof e)throw new Error("kremling maybe() must be called with a string className and a boolean expression");return c(this,t?e:"")}function a(e,t,n){if("string"!=typeof e||"string"!=typeof t)throw new Error("kremling toggle() must be called with 2 string classNames and a boolean expression");return c(this,n?e:t)}function c(e,t){var n=e instanceof String?e.toString():"",c=new String([n,t].join(" ").trim());return c.css=r.bind(c),c.c=c.css,c.always=o.bind(c),c.a=c.always,c.maybe=i.bind(c),c.m=c.maybe,c.toggle=a.bind(c),c.t=c.toggle,c}Object.defineProperty(t,"__esModule",{value:!0}),t.c=t.css=r,t.a=t.always=o,t.m=t.maybe=i,t.t=t.toggle=a},function(e,t,n){"use strict";var r=n(12);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useCss=function(e,t){var n="object"===a(e);if(n&&(!e.id||"string"!=typeof e.styles))throw Error('Kremling\'s "useCss" hook requires "id" and "styles" properties when using the kremling-loader');var u=t||n&&e.namespace||o.Scoped.defaultNamespace,s=(f=(0,r.useState)((function(){return c(n,e,u,!0)})),m=2,function(e){if(Array.isArray(e))return e}(f)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(f,m)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),l=s[0],p=s[1];var f,m;return function(){(0,r.useLayoutEffect)((function(){var t=c(n,e,u);return p(t),function(){if(0==--l.kremlings){var t=n?e.styles:e;document.head.removeChild(l),delete i.styleTags[t]}}}),[e,u,n])}(),function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}({},l.kremlingAttr,String(l.kremlingValue).toString())};var r=n(0),o=n(4),i=n(5);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=e?n:"data-".concat(n),a=e?t.id:(0,i.incrementCounter)(),c=e?i.styleTags[t.styles]:i.styleTags[t];if(c)r&&c.kremlings++;else{var u="[".concat(o,"='").concat(a,"']"),s=e?t.styles:t,l=e?t.styles:(0,i.transformCss)(t,u);(c=document.createElement("style")).type="text/css",c.textContent=l,c.kremlings=1,c.kremlingAttr=o,c.kremlingValue=a,document.head.appendChild(c),i.styleTags[s]=c}return c}},function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.k=void 0;t.k=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=e.map((function(e,t){return"".concat(e).concat(n[t]||"")})).join(""),a=i.split("||KREMLING||"),c=r(a,3),u=c[0],s=c[1],l=c[2];return u&&s&&l?{id:u,namespace:s,styles:l}:i}},function(e,t,n){"use strict";e.exports=function(){}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=(a(r),a(n(2))),i=a(n(17));a(n(19));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}t.default=function(e,t){var n,a,p="__create-react-context-"+(0,i.default)()+"__",f=function(e){function n(){var t,r;c(this,n);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r=u(this,e.call.apply(e,[this].concat(i))),r.emitter=l(r.props.value),u(r,t)}return s(n,e),n.prototype.getChildContext=function(){var e;return(e={})[p]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((i=n)===(a=r)?0!==i||1/i==1/a:i!=i&&a!=a)?o=0:(o="function"==typeof t?t(n,r):1073741823,0!==(o|=0)&&this.emitter.set(e.value,o))}var i,a},n.prototype.render=function(){return this.props.children},n}(r.Component);f.childContextTypes=((n={})[p]=o.default.object.isRequired,n);var m=function(t){function n(){var e,r;c(this,n);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=r=u(this,t.call.apply(t,[this].concat(i))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!=((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},u(r,e)}return s(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?1073741823:t},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return m.contextTypes=((a={})[p]=o.default.object,a),{Provider:f,Consumer:m}},e.exports=t.default},function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(18))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=n(20);e.exports=r},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),c=n(6),u=n.n(c),s=n(7),l=n(8),p=n.n(l),f=[{name:"Vat",href:"/vat"},{name:"IT",href:"/it"}],m=(n(15),n(2),n(1)),d=n.n(m),h=n(9),y=n.n(h);function v(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function b(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function g(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}v.__suppressDeprecationWarning=!0,b.__suppressDeprecationWarning=!0,g.__suppressDeprecationWarning=!0;var w,E,O,C,P,S=function(e,t){return e.substr(0,t.length)===t},_=function(e,t){for(var n=void 0,r=void 0,o=t.split("?")[0],i=A(o),a=""===i[0],c=D(e),u=0,s=c.length;u<s;u++){var l=!1,p=c[u].route;if(p.default)r={route:p,params:{},uri:t};else{for(var f=A(p.path),m={},h=Math.max(i.length,f.length),y=0;y<h;y++){var v=f[y],b=i[y];if("*"===v){m["*"]=i.slice(y).map(decodeURIComponent).join("/");break}if(void 0===b){l=!0;break}var g=k.exec(v);if(g&&!a){-1===M.indexOf(g[1])||d()(!1);var w=decodeURIComponent(b);m[g[1]]=w}else if(v!==b){l=!0;break}}if(!l){n={route:p,params:m,uri:"/"+i.slice(0,y).join("/")};break}}}return n||r||null},x=function(e,t){if(S(e,"/"))return e;var n=e.split("?"),r=n[0],o=n[1],i=t.split("?")[0],a=A(r),c=A(i);if(""===a[0])return U(i,o);if(!S(a[0],".")){var u=c.concat(a).join("/");return U(("/"===i?"":"/")+u,o)}for(var s=c.concat(a),l=[],p=0,f=s.length;p<f;p++){var m=s[p];".."===m?l.pop():"."!==m&&l.push(m)}return U("/"+l.join("/"),o)},j=function(e,t){return"/"+A(e).map((function(e){var n=k.exec(e);return n?t[n[1]]:e})).join("/")},k=/^:(.+)/,R=function(e){return k.test(e)},T=function(e,t){return{route:e,score:e.default?0:A(e.path).reduce((function(e,t){return e+=4,!function(e){return""===e}(t)?R(t)?e+=2:!function(e){return"*"===e}(t)?e+=3:e-=5:e+=1,e}),0),index:t}},D=function(e){return e.map(T).sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:e.index-t.index}))},A=function(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")},U=function(e,t){return e+(t?"?"+t:"")},M=["uri","path"],F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e){return F({},e.location,{state:e.history.state,key:e.history.state&&e.history.state.key||"initial"})},N=!("undefined"==typeof window||!window.document||!window.document.createElement),I=(w=N?window:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=0,n=[{pathname:e,search:""}],r=[];return{get location(){return n[t]},addEventListener:function(e,t){},removeEventListener:function(e,t){},history:{get entries(){return n},get index(){return t},get state(){return r[t]},pushState:function(e,o,i){var a=i.split("?"),c=a[0],u=a[1],s=void 0===u?"":u;t++,n.push({pathname:c,search:s}),r.push(e)},replaceState:function(e,o,i){var a=i.split("?"),c=a[0],u=a[1],s=void 0===u?"":u;n[t]={pathname:c,search:s},r[t]=e}}}}(),E=[],O=W(w),C=!1,P=function(){},{get location(){return O},get transitioning(){return C},_onTransitionComplete:function(){C=!1,P()},listen:function(e){E.push(e);var t=function(){O=W(w),e({location:O,action:"POP"})};return w.addEventListener("popstate",t),function(){w.removeEventListener("popstate",t),E=E.filter((function(t){return t!==e}))}},navigate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.state,r=t.replace,o=void 0!==r&&r;n=F({},n,{key:Date.now()+""});try{C||o?w.history.replaceState(n,null,e):w.history.pushState(n,null,e)}catch(t){w.location[o?"replace":"assign"](e)}O=W(w),C=!0;var i=new Promise((function(e){return P=e}));return E.forEach((function(e){return e({location:O,action:"PUSH"})})),i}}),B=(I.navigate,Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e});function L(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function K(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var G=function(e,t){var n=y()(t);return n.Consumer.displayName=e+".Consumer",n.Provider.displayName=e+".Provider",n},H=G("Location"),$=function(e){var t=e.children;return o.a.createElement(H.Consumer,null,(function(e){return e?t(e):o.a.createElement(Y,null,t)}))},Y=function(e){function t(){var n,r;q(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=V(this,e.call.apply(e,[this].concat(i))),r.state={context:r.getContext(),refs:{unlisten:null}},V(r,n)}return K(t,e),t.prototype.getContext=function(){var e=this.props.history;return{navigate:e.navigate,location:e.location}},t.prototype.componentDidCatch=function(e,t){if(!ce(e))throw e;(0,this.props.history.navigate)(e.uri,{replace:!0})},t.prototype.componentDidUpdate=function(e,t){t.context.location!==this.state.context.location&&this.props.history._onTransitionComplete()},t.prototype.componentDidMount=function(){var e=this,t=this.state.refs,n=this.props.history;t.unlisten=n.listen((function(){Promise.resolve().then((function(){requestAnimationFrame((function(){e.unmounted||e.setState((function(){return{context:e.getContext()}}))}))}))}))},t.prototype.componentWillUnmount=function(){var e=this.state.refs;this.unmounted=!0,e.unlisten()},t.prototype.render=function(){var e=this.state.context,t=this.props.children;return o.a.createElement(H.Provider,{value:e},"function"==typeof t?t(e):t||null)},t}(o.a.Component);Y.defaultProps={history:I};var z=G("Base",{baseuri:"/",basepath:"/"}),J=function(e){return o.a.createElement(z.Consumer,null,(function(t){return o.a.createElement($,null,(function(n){return o.a.createElement(Q,B({},t,n,e))}))}))},Q=function(e){function t(){return q(this,t),V(this,e.apply(this,arguments))}return K(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.navigate,r=e.basepath,i=e.primary,a=e.children,c=(e.baseuri,e.component),u=void 0===c?"div":c,s=L(e,["location","navigate","basepath","primary","children","baseuri","component"]),l=o.a.Children.map(a,pe(r)),p=t.pathname,f=_(l,p);if(f){var m=f.params,d=f.uri,h=f.route,y=f.route.value;r=h.default?r:h.path.replace(/\*$/,"");var v=B({},m,{uri:d,location:t,navigate:function(e,t){return n(x(e,d),t)}}),b=o.a.cloneElement(y,v,y.props.children?o.a.createElement(J,{primary:i},y.props.children):void 0),g=i?Z:u,w=i?B({uri:d,location:t,component:u},s):s;return o.a.createElement(z.Provider,{value:{baseuri:d,basepath:r}},o.a.createElement(g,w,b))}return null},t}(o.a.PureComponent);Q.defaultProps={primary:!0};var X=G("Focus"),Z=function(e){var t=e.uri,n=e.location,r=e.component,i=L(e,["uri","location","component"]);return o.a.createElement(X.Consumer,null,(function(e){return o.a.createElement(ne,B({},i,{component:r,requestFocus:e,uri:t,location:n}))}))},ee=!0,te=0,ne=function(e){function t(){var n,r;q(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=V(this,e.call.apply(e,[this].concat(i))),r.state={},r.requestFocus=function(e){r.state.shouldFocus||e.focus()},V(r,n)}return K(t,e),t.getDerivedStateFromProps=function(e,t){if(null==t.uri)return B({shouldFocus:!0},e);var n=e.uri!==t.uri,r=t.location.pathname!==e.location.pathname&&e.location.pathname===e.uri;return B({shouldFocus:n||r},e)},t.prototype.componentDidMount=function(){te++,this.focus()},t.prototype.componentWillUnmount=function(){0===--te&&(ee=!0)},t.prototype.componentDidUpdate=function(e,t){e.location!==this.props.location&&this.state.shouldFocus&&this.focus()},t.prototype.focus=function(){var e=this.props.requestFocus;e?e(this.node):ee?ee=!1:this.node.contains(document.activeElement)||this.node.focus()},t.prototype.render=function(){var e=this,t=this.props,n=(t.children,t.style),r=(t.requestFocus,t.role),i=void 0===r?"group":r,a=t.component,c=void 0===a?"div":a,u=(t.uri,t.location,L(t,["children","style","requestFocus","role","component","uri","location"]));return o.a.createElement(c,B({style:B({outline:"none"},n),tabIndex:"-1",role:i,ref:function(t){return e.node=t}},u),o.a.createElement(X.Provider,{value:this.requestFocus},this.props.children))},t}(o.a.Component);!function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,r=null,o=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?o="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(o="UNSAFE_componentWillUpdate"),null!==n||null!==r||null!==o){var i=e.displayName||e.name,a="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+a+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+(null!==o?"\n  "+o:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=v,t.componentWillReceiveProps=b),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=g;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,r)}}}(ne);var re=function(){},oe=o.a.forwardRef;void 0===oe&&(oe=function(e){return e});var ie=oe((function(e,t){var n=e.innerRef,r=L(e,["innerRef"]);return o.a.createElement(z.Consumer,null,(function(e){e.basepath;var i=e.baseuri;return o.a.createElement($,null,(function(e){var a=e.location,c=e.navigate,u=r.to,s=r.state,l=r.replace,p=r.getProps,f=void 0===p?re:p,m=L(r,["to","state","replace","getProps"]),d=x(u,i),h=a.pathname===d,y=S(a.pathname,d);return o.a.createElement("a",B({ref:t||n,"aria-current":h?"page":void 0},m,f({isCurrent:h,isPartiallyCurrent:y,href:d,location:a}),{href:d,onClick:function(e){m.onClick&&m.onClick(e),fe(e)&&(e.preventDefault(),c(d,{state:s,replace:l}))}}))}))}))}));function ae(e){this.uri=e}var ce=function(e){return e instanceof ae},ue=function(e){function t(){return q(this,t),V(this,e.apply(this,arguments))}return K(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.navigate,n=e.to,r=(e.from,e.replace),o=void 0===r||r,i=e.state,a=(e.noThrow,L(e,["navigate","to","from","replace","state","noThrow"]));Promise.resolve().then((function(){t(j(n,a),{replace:o,state:i})}))},t.prototype.render=function(){var e=this.props,t=(e.navigate,e.to),n=(e.from,e.replace,e.state,e.noThrow),r=L(e,["navigate","to","from","replace","state","noThrow"]);return n||function(e){throw new ae(e)}(j(t,r)),null},t}(o.a.Component),se=function(e){return o.a.createElement($,null,(function(t){return o.a.createElement(ue,B({},t,e))}))},le=function(e){return e.replace(/(^\/+|\/+$)/g,"")},pe=function(e){return function(t){if(!t)return null;var n,r,o;if(t.props.path||t.props.default||t.type===se||d()(!1),t.type!==se||t.props.from&&t.props.to||d()(!1),t.type===se&&(n=t.props.from,r=t.props.to,o=function(e){return R(e)},A(n).filter(o).sort().join("/")!==A(r).filter(o).sort().join("/"))&&d()(!1),t.props.default)return{value:t,default:!0};var i=t.type===se?t.props.from:t.props.path,a="/"===i?e:le(e)+"/"+le(i);return{value:t,default:t.props.default,path:t.props.children?le(a)+"/*":a}}},fe=function(e){return!e.defaultPrevented&&0===e.button&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)};function me(e){return(me="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function de(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function he(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ye(e,t){return!t||"object"!==me(t)&&"function"!=typeof t?be(e):t}function ve(e){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function be(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ge(e,t){return(ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ee=function(e){function t(){var e,n;de(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return we(be(n=ye(this,(e=ve(t)).call.apply(e,[this].concat(o)))),"state",{hasError:!1}),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ge(e,t)}(t,e),n=t,(r=[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return o.a.createElement(s.Scoped,{css:p.a},this.state.hasError?o.a.createElement("div",{className:"root navBarHeight"},"Error"):o.a.createElement("div",{className:"root navBarHeight"},o.a.createElement("div",null,f.map((function(e){return o.a.createElement(ie,{key:e.href,className:"primary-navigation-link",to:e.href},e.name)})))))}}])&&he(n.prototype,r),i&&he(n,i),t}(o.a.Component);n.d(t,"bootstrap",(function(){return Ce})),n.d(t,"mount",(function(){return Pe})),n.d(t,"unmount",(function(){return Se})),n.d(t,"unload",(function(){return _e}));var Oe=u()({React:o.a,ReactDOM:a.a,rootComponent:Ee,domElementGetter:function(){var e=document.getElementById("navbar");e||((e=document.createElement("div")).id="navbar",document.body.appendChild(e));return e}}),Ce=[Oe.bootstrap],Pe=[Oe.mount],Se=[Oe.unmount],_e=[Oe.unload]}]))}}}));
//# sourceMappingURL=react-mf-navbar.js.map