/*! For license information please see 53b3f6c488aea7201558894655f33b6da1eb08bf-18ecec6d362f89f7720f.js.LICENSE.txt */
(self.webpackChunked_rig_com=self.webpackChunked_rig_com||[]).push([[802],{8093:function(e,t,r){var n;"undefined"!=typeof self&&self,e.exports=(n=r(7294),function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,r){"use strict";function n(e,t){return u(e)||c(e,t)||a(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}function u(e){if(Array.isArray(e))return e}var s=r(1),l=r.n(s),f=r(8),p=r.n(f),m=r(2),d=r(10),y=r.n(d),v=r(3),b=r(6),g=function(e){return e.query||Object(v.a)(e)},h=function(e){if(!e)return null;var t=Object.keys(e);return 0===t.length?null:t.reduce((function(t,r){return t[Object(m.a)(r)]=e[r],t}),{})},w=function(){var e=l.a.useRef(!1);return l.a.useEffect((function(){e.current=!0}),[]),e.current},O=function(e){var t=l.a.useContext(b.a),r=function(){return h(e)||h(t)},o=n(l.a.useState(r),2),a=o[0],i=o[1];return l.a.useEffect((function(){var e=r();y()(a,e)||i(e)}),[e,t]),a},E=function(e){var t=function(){return g(e)},r=n(l.a.useState(t),2),o=r[0],a=r[1];return l.a.useEffect((function(){var e=t();o!==e&&a(e)}),[e]),o},x=function(e,t){var r=function(){return p()(e,t||{},!!t)},o=n(l.a.useState(r),2),a=o[0],i=o[1],c=w();return l.a.useEffect((function(){return c&&i(r()),function(){a.dispose()}}),[e,t]),a},j=function(e){var t=n(l.a.useState(e.matches),2),r=t[0],o=t[1];return l.a.useEffect((function(){var t=function(){o(e.matches)};return e.addListener(t),t(),function(){e.removeListener(t)}}),[e]),r},S=function(e,t,r){var n=O(t),o=E(e);if(!o)throw new Error("Invalid or missing MediaQuery!");var a=x(o,n),i=j(a),c=w();return l.a.useEffect((function(){c&&r&&r(i)}),[i]),i};t.a=S},function(e,t){e.exports=n},function(e,t,r){"use strict";function n(e){return"-"+e.toLowerCase()}function o(e){if(c.hasOwnProperty(e))return c[e];var t=e.replace(a,n);return c[e]=i.test(t)?"-"+t:t}var a=/[A-Z]/g,i=/^ms-/,c={};t.a=o},function(e,t,r){"use strict";var n=r(2),o=r(11),a=function(e){return"not ".concat(e)},i=function(e,t){var r=Object(n.a)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?a(r):"(".concat(r,": ").concat(t,")")},c=function(e){return e.join(" and ")},u=function(e){var t=[];return Object.keys(o.a.all).forEach((function(r){var n=e[r];null!=n&&t.push(i(r,n))})),c(t)};t.a=u},function(e,t,r){"use strict";e.exports=r(13)},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";var n=r(1),o=r.n(n).a.createContext();t.a=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(17),a=r(3),i=r(6);r.d(t,"default",(function(){return o.a})),r.d(t,"useMediaQuery",(function(){return n.a})),r.d(t,"toQuery",(function(){return a.a})),r.d(t,"Context",(function(){return i.a}))},function(e,t,r){"use strict";function n(e,t,r){function n(e){l&&l.addListener(e)}function o(e){l&&l.removeListener(e)}function c(e){s.matches=e.matches,s.media=e.media}function u(){l&&l.removeListener(c)}var s=this;if(i&&!r){var l=i.call(window,e);this.matches=l.matches,this.media=l.media,l.addListener(c)}else this.matches=a(e,t),this.media=e;this.addListener=n,this.removeListener=o,this.dispose=u}function o(e,t,r){return new n(e,t,r)}var a=r(9).match,i="undefined"!=typeof window?window.matchMedia:null;e.exports=o},function(e,t,r){"use strict";function n(e,t){return o(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,u=t[r];if(!u)return!1;switch(r){case"orientation":case"scan":return u.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=c(o),u=c(u);break;case"resolution":o=i(o),u=i(u);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=a(o),u=a(u);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,u=parseInt(u,10)||0}switch(n){case"min":return u>=o;case"max":return u<=o;default:return u===o}}));return o&&!r||!o&&r}))}function o(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(u),r=t[1],n=t[2],o=t[3]||"",a={};return a.inverse=!!r&&"not"===r.toLowerCase(),a.type=n?n.toLowerCase():"all",o=o.match(/\([^\)]+\)/g)||[],a.expressions=o.map((function(e){var t=e.match(s),r=t[1].toLowerCase().match(l);return{modifier:r[1],feature:r[2],value:t[2]}})),a}))}function a(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function i(e){var t=parseFloat(e);switch(String(e).match(p)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function c(e){var t=parseFloat(e);switch(String(e).match(f)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}t.match=n,t.parse=o;var u=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,s=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,l=/^(?:(min|max)-)?(.+)/,f=/(em|rem|px|cm|mm|in|pt|pc)?$/,p=/(dpi|dpcm|dppx)?$/},function(e,t,r){"use strict";function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var a=0;a<o;a++){var i=r[a];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}e.exports=n},function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=r(12),c=r.n(i),u=c.a.oneOfType([c.a.string,c.a.number]),s={orientation:c.a.oneOf(["portrait","landscape"]),scan:c.a.oneOf(["progressive","interlace"]),aspectRatio:c.a.string,deviceAspectRatio:c.a.string,height:u,deviceHeight:u,width:u,deviceWidth:u,color:c.a.bool,colorIndex:c.a.bool,monochrome:c.a.bool,resolution:u},l=o({minAspectRatio:c.a.string,maxAspectRatio:c.a.string,minDeviceAspectRatio:c.a.string,maxDeviceAspectRatio:c.a.string,minHeight:u,maxHeight:u,minDeviceHeight:u,maxDeviceHeight:u,minWidth:u,maxWidth:u,minDeviceWidth:u,maxDeviceWidth:u,minColor:c.a.number,maxColor:c.a.number,minColorIndex:c.a.number,maxColorIndex:c.a.number,minMonochrome:c.a.number,maxMonochrome:c.a.number,minResolution:u,maxResolution:u},s),f={all:c.a.bool,grid:c.a.bool,aural:c.a.bool,braille:c.a.bool,handheld:c.a.bool,print:c.a.bool,projection:c.a.bool,screen:c.a.bool,tty:c.a.bool,tv:c.a.bool,embossed:c.a.bool},p=o(o({},f),l);s.type=Object.keys(f),t.a={all:p,types:f,matchers:s,features:l}},function(e,t,r){var n=r(4);e.exports=r(14)(n.isElement,!0)},function(e,t,r){"use strict";!function(){function e(e){return"string"==typeof e||"function"==typeof e||e===h||e===S||e===O||e===w||e===_||e===C||"object"==typeof e&&null!==e&&(e.$$typeof===I||e.$$typeof===P||e.$$typeof===E||e.$$typeof===x||e.$$typeof===k||e.$$typeof===A||e.$$typeof===$||e.$$typeof===T||e.$$typeof===R)}function r(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case b:var r=e.type;switch(r){case j:case S:case h:case O:case w:case _:return r;default:var n=r&&r.$$typeof;switch(n){case x:case k:case I:case P:case E:return n;default:return t}}case g:return t}}}function n(e){return Y||(Y=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),o(e)||r(e)===j}function o(e){return r(e)===S}function a(e){return r(e)===x}function i(e){return r(e)===E}function c(e){return"object"==typeof e&&null!==e&&e.$$typeof===b}function u(e){return r(e)===k}function s(e){return r(e)===h}function l(e){return r(e)===I}function f(e){return r(e)===P}function p(e){return r(e)===g}function m(e){return r(e)===O}function d(e){return r(e)===w}function y(e){return r(e)===_}var v="function"==typeof Symbol&&Symbol.for,b=v?Symbol.for("react.element"):60103,g=v?Symbol.for("react.portal"):60106,h=v?Symbol.for("react.fragment"):60107,w=v?Symbol.for("react.strict_mode"):60108,O=v?Symbol.for("react.profiler"):60114,E=v?Symbol.for("react.provider"):60109,x=v?Symbol.for("react.context"):60110,j=v?Symbol.for("react.async_mode"):60111,S=v?Symbol.for("react.concurrent_mode"):60111,k=v?Symbol.for("react.forward_ref"):60112,_=v?Symbol.for("react.suspense"):60113,C=v?Symbol.for("react.suspense_list"):60120,P=v?Symbol.for("react.memo"):60115,I=v?Symbol.for("react.lazy"):60116,R=v?Symbol.for("react.block"):60121,A=v?Symbol.for("react.fundamental"):60117,$=v?Symbol.for("react.responder"):60118,T=v?Symbol.for("react.scope"):60119,M=j,L=S,W=x,N=E,F=b,D=k,q=h,H=I,Z=P,z=g,Q=O,V=w,U=_,Y=!1;t.AsyncMode=M,t.ConcurrentMode=L,t.ContextConsumer=W,t.ContextProvider=N,t.Element=F,t.ForwardRef=D,t.Fragment=q,t.Lazy=H,t.Memo=Z,t.Portal=z,t.Profiler=Q,t.StrictMode=V,t.Suspense=U,t.isAsyncMode=n,t.isConcurrentMode=o,t.isContextConsumer=a,t.isContextProvider=i,t.isElement=c,t.isForwardRef=u,t.isFragment=s,t.isLazy=l,t.isMemo=f,t.isPortal=p,t.isProfiler=m,t.isStrictMode=d,t.isSuspense=y,t.isValidElementType=e,t.typeOf=r}()},function(e,t,r){"use strict";function n(){return null}var o=r(4),a=r(15),i=r(5),c=r(16),u=Function.call.bind(Object.prototype.hasOwnProperty),s=function(){};s=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},e.exports=function(e,t){function r(e){var t=e&&(_&&e[_]||e[C]);if("function"==typeof t)return t}function l(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function f(e){this.message=e,this.stack=""}function p(e){function r(r,a,c,u,l,p,m){if(u=u||P,p=p||c,m!==i){if(t){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}if("undefined"!=typeof console){var y=u+":"+c;!n[y]&&o<3&&(s("You are manually calling a React.PropTypes validation function for the `"+p+"` prop on `"+u+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[y]=!0,o++)}}return null==a[c]?r?new f(null===a[c]?"The "+l+" `"+p+"` is marked as required in `"+u+"`, but its value is `null`.":"The "+l+" `"+p+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(a,c,u,l,p)}var n={},o=0,a=r.bind(null,!1);return a.isRequired=r.bind(null,!0),a}function m(e){function t(t,r,n,o,a,i){var c=t[r];return x(c)!==e?new f("Invalid "+o+" `"+a+"` of type `"+j(c)+"` supplied to `"+n+"`, expected `"+e+"`."):null}return p(t)}function d(e){function t(t,r,n,o,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var c=t[r];if(!Array.isArray(c))return new f("Invalid "+o+" `"+a+"` of type `"+x(c)+"` supplied to `"+n+"`, expected an array.");for(var u=0;u<c.length;u++){var s=e(c,u,n,o,a+"["+u+"]",i);if(s instanceof Error)return s}return null}return p(t)}function y(e){function t(t,r,n,o,a){if(!(t[r]instanceof e)){var i=e.name||P;return new f("Invalid "+o+" `"+a+"` of type `"+k(t[r])+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}return null}return p(t)}function v(e){function t(t,r,n,o,a){for(var i=t[r],c=0;c<e.length;c++)if(l(i,e[c]))return null;var u=JSON.stringify(e,(function(e,t){return"symbol"===j(t)?String(t):t}));return new f("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+n+"`, expected one of "+u+".")}return Array.isArray(e)?p(t):(s(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),n)}function b(e){function t(t,r,n,o,a){if("function"!=typeof e)return new f("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var c=t[r],s=x(c);if("object"!==s)return new f("Invalid "+o+" `"+a+"` of type `"+s+"` supplied to `"+n+"`, expected an object.");for(var l in c)if(u(c,l)){var p=e(c,l,n,o,a+"."+l,i);if(p instanceof Error)return p}return null}return p(t)}function g(e){function t(t,r,n,o,a){for(var c=0;c<e.length;c++)if(null==(0,e[c])(t,r,n,o,a,i))return null;return new f("Invalid "+o+" `"+a+"` supplied to `"+n+"`.")}if(!Array.isArray(e))return s("Invalid argument supplied to oneOfType, expected an instance of array."),n;for(var r=0;r<e.length;r++){var o=e[r];if("function"!=typeof o)return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+S(o)+" at index "+r+"."),n}return p(t)}function h(e){function t(t,r,n,o,a){var c=t[r],u=x(c);if("object"!==u)return new f("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");for(var s in e){var l=e[s];if(l){var p=l(c,s,n,o,a+"."+s,i);if(p)return p}}return null}return p(t)}function w(e){function t(t,r,n,o,c){var u=t[r],s=x(u);if("object"!==s)return new f("Invalid "+o+" `"+c+"` of type `"+s+"` supplied to `"+n+"`, expected `object`.");var l=a({},t[r],e);for(var p in l){var m=e[p];if(!m)return new f("Invalid "+o+" `"+c+"` key `"+p+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var d=m(u,p,n,o,c+"."+p,i);if(d)return d}return null}return p(t)}function O(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(O);if(null===t||e(t))return!0;var n=r(t);if(!n)return!1;var o,a=n.call(t);if(n!==t.entries){for(;!(o=a.next()).done;)if(!O(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!O(i[1]))return!1}return!0;default:return!1}}function E(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function x(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":E(t,e)?"symbol":t}function j(e){if(null==e)return""+e;var t=x(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function S(e){var t=j(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function k(e){return e.constructor&&e.constructor.name?e.constructor.name:P}var _="function"==typeof Symbol&&Symbol.iterator,C="@@iterator",P="<<anonymous>>",I={array:m("array"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:p(n),arrayOf:d,element:function(){function t(t,r,n,o,a){var i=t[r];return e(i)?null:new f("Invalid "+o+" `"+a+"` of type `"+x(i)+"` supplied to `"+n+"`, expected a single ReactElement.")}return p(t)}(),elementType:function(){function e(e,t,r,n,a){var i=e[t];return o.isValidElementType(i)?null:new f("Invalid "+n+" `"+a+"` of type `"+x(i)+"` supplied to `"+r+"`, expected a single ReactElement type.")}return p(e)}(),instanceOf:y,node:function(){function e(e,t,r,n,o){return O(e[t])?null:new f("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")}return p(e)}(),objectOf:b,oneOf:v,oneOfType:g,shape:h,exact:w};return f.prototype=Error.prototype,I.checkPropTypes=c,I.resetWarningCache=c.resetWarningCache,I.PropTypes=I,I}},function(e,t,r){"use strict";function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,u=n(e),s=1;s<arguments.length;s++){for(var l in r=Object(arguments[s]))a.call(r,l)&&(u[l]=r[l]);if(o){c=o(r);for(var f=0;f<c.length;f++)i.call(r,c[f])&&(u[c[f]]=r[c[f]])}}return u}},function(e,t,r){"use strict";function n(e,t,r,n,u){for(var s in e)if(c(e,s)){var l;try{if("function"!=typeof e[s]){var f=Error((n||"React class")+": "+r+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw f.name="Invariant Violation",f}l=e[s](t,s,n,r,null,a)}catch(m){l=m}if(!l||l instanceof Error||o((n||"React class")+": type specification of "+r+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var p=u?u():"";o("Failed "+r+" type: "+l.message+(null!=p?p:""))}}}var o=function(){},a=r(5),i={},c=Function.call.bind(Object.prototype.hasOwnProperty);o=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},n.resetWarningCache=function(){i={}},e.exports=n},function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=o(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function o(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function a(e){var t=e.children,r=e.device,o=e.onChange,a=n(e,["children","device","onChange"]),c=Object(i.a)(a,r,o);return"function"==typeof t?t(c):c?t:null}t.a=a;var i=r(0)}]))},8631:function(e,t,r){"use strict";r.d(t,{w:function(){return c}});var n=r(3552),o=r(7294),a={currentWork:void 0,setCurrentWork:function(e){}},i=o.createContext(a),c=function(e){function t(t){var r;return(r=e.call(this,t)||this).setCurrentWork=function(e){r.setState({currentWork:e})},r.state=a,r}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.children,t=this.state.currentWork;return o.createElement(i.Provider,{value:{currentWork:t,setCurrentWork:this.setCurrentWork}},e)},t}(o.Component);t.Z=i},4181:function(e,t,r){"use strict";r.d(t,{l:function(){return p}});var n=r(7294),o=r(5414),a=r(8902),i=r(9499),c=r(8093);function u(e,t){return void 0===t&&(t="active"),i.globalHistory.location.pathname.includes(e)?t:""}var s=r(8631);function l(){var e=(0,n.useState)(!1),t=e[0],r=e[1],o=(0,c.useMediaQuery)({query:"(min-device-width: 1224px)"}),l=(0,c.useMediaQuery)({query:"(max-width: 1224px)"}),f=n.createElement("li",{className:"edrig__header_name"},n.createElement(a.ZP,{to:"/"},n.createElement("span",null,"Edouard",n.createElement("br",null),"Rigaudiere"),n.createElement("small",null,"film composer"))),p=n.createElement(n.Fragment,null,"/"!==i.globalHistory.location.pathname&&l?f:n.createElement(n.Fragment,null),n.createElement(s.Z.Consumer,null,(function(e){return n.createElement(n.Fragment,null,n.createElement("li",{className:u("work")},n.createElement(a.ZP,{to:"/work/",onClick:function(){return e.setCurrentWork(void 0)}},"Work")),n.createElement("li",{className:u("music")},n.createElement(a.ZP,{to:"/music/"},"Music")),n.createElement("li",{className:u("about")},n.createElement(a.ZP,{to:"/about/"},"About/Contact")))})));return n.createElement("header",{className:"edrig__header"},o&&n.createElement("nav",null,n.createElement("ul",{className:"edrig__header_list"},f,p)),l&&n.createElement("nav",{className:"nav-mobile"},n.createElement("div",{className:"edrig__header_burgermenu"},t?n.createElement("img",{src:"/images/menuclose.svg",alt:"Close Menu",onClick:function(){return r(!1)}}):n.createElement("img",{src:"/images/menu.svg",alt:"Menu",onClick:function(){return r(!0)}})),n.createElement("ul",{className:"edrig__header_list "+(t?"open":"")},t?p:f)))}function f(){return n.createElement("footer",{className:"edrig__footer "+u("/work","transparent")},n.createElement("nav",{className:"edrig__footer_list"},n.createElement("a",{href:"https://www.imdb.com/name/nm8251986/",target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{src:"/images/icons/imdb.png",alt:"IMDb Logo"})),n.createElement("a",{href:"https://www.facebook.com/ed.rig",target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{src:"/images/icons/facebook.png",alt:"Facebook Logo"})),n.createElement("a",{href:"https://www.instagram.com/ed_rig/",target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{src:"/images/icons/instagram.png",alt:"Instagram Logo"})),n.createElement("a",{href:"https://soundcloud.com/ed-rig",target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{src:"/images/icons/spotify.png",alt:"Spotify Logo"})),n.createElement("a",{href:"https://soundcloud.com/ed-rig",target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{src:"/images/icons/soundcloud.png",alt:"SoundCloud Logo"}))))}var p=function(e){var t=e.children;return n.createElement(n.Fragment,null,n.createElement(o.q,null,n.createElement("meta",{property:"og:description",content:"Edouard Rigaudière is a Paris based film composer and musician."}),n.createElement("meta",{property:"og:image",content:"https://ed-rig.com/images/ed-rig__og.jpg"}),n.createElement("meta",{property:"og:url",content:"https://ed-rig.com"}),n.createElement("meta",{name:"twitter:description",content:"Edouard Rigaudière is a Paris based film composer and musician."}),n.createElement("meta",{name:"twitter:image:src",content:"https://ed-rig.com/images/ed-rig__og.jpg"})),n.createElement(s.w,null,n.createElement(l,null),t,n.createElement(f,null)))}}}]);
//# sourceMappingURL=53b3f6c488aea7201558894655f33b6da1eb08bf-18ecec6d362f89f7720f.js.map