!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/webpack-bbq/",t(t.s=21)}([/*!**********************************************!*\
  !*** external "render_8b1e72c1b2e882c20d12" ***!
  \**********************************************/
function(e,t){e.exports=render_8b1e72c1b2e882c20d12},/*!*******************************************!*\
  !*** ../~/css-loader-bbq/lib/css-base.js ***!
  \*******************************************/
function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},/*!**************************************!*\
  !*** ../~/style-loader/addStyles.js ***!
  \**************************************/
function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(a(r.parts[i],t))}else{for(var u=[],i=0;i<r.parts.length;i++)u.push(a(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:u}}}}function r(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],u=o[1],s=o[2],a=o[3],l={css:u,media:s,sourceMap:a};n[i]?n[i].parts.push(l):t.push(n[i]={id:i,parts:[l]})}return t}function o(e,t){var n=b(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function a(e,t){var n,r,o;if(t.singleton){var a=y++;n=v||(v=u(t)),r=l.bind(null,n,a,!1),o=l.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=c.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=f.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),u=e.childNodes;u[t]&&e.removeChild(u[t]),u.length?e.insertBefore(i,u[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function c(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=d(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,g=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=r(e);return n(o,t),function(e){for(var i=[],u=0;u<o.length;u++){var s=o[u],a=p[s.id];a.refs--,i.push(a)}if(e){var l=r(e);n(l,t)}for(var u=0;u<i.length;u++){var a=i[u];if(0===a.refs){for(var f=0;f<a.parts.length;f++)a.parts[f]();delete p[a.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
function(e,t,n){var r=n(/*! !./../../~/css-loader-bbq?modules&localIdentName=[name]__[local]___[hash:base64:5]&hashPrefix=&importLoaders=1!./../../~/postcss-loader??ref--4-2!./index.css */13);"string"==typeof r&&(r=[[e.i,r,""]]);n(/*! ./../../~/style-loader/addStyles.js */2)(r,{});r.locals&&(e.exports=r.locals)},/*!***********************************************************************************************!*\
  !*** delegated ../node_modules/react/react.js from dll-reference render_8b1e72c1b2e882c20d12 ***!
  \***********************************************************************************************/
function(e,t,n){e.exports=n(0)(9)},/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../~/babel-loader/lib?presets[]=react&presets[]=es2015&plugins[]=transform-object-rest-spread&plugins[]=add-module-exports&plugins[]=transform-class-properties&plugins[]=transform-async-to-generator&plugins[]=transform-es3-member-expression-literals&plugins[]=babel-plugin-transform-es3-property-literals&cacheDirectory=true&babelrc=false!./src/client.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(/*! ./frameworks/render */19),i=r(o),u=n(/*! ./reducer */10),s=r(u),a=n(/*! ./routes */11),l=r(a);(0,i.default)({routes:l.default,reducer:s.default})},/*!**********************************************************************************************************!*\
  !*** delegated ../node_modules/webpack/buildin/global.js from dll-reference render_8b1e72c1b2e882c20d12 ***!
  \**********************************************************************************************************/
function(e,t,n){e.exports=n(0)(60)},/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
function(e,t,n){"use strict";(function(t){const r=n(/*! path */16),o=t,i="/webpack-bbq/",u=i;e.exports={basedir:o,outputdir:r.resolve(o,"../docs"),rootdir:i,publicPath:u}}).call(t,"")},/*!************************!*\
  !*** ./src/Example.js ***!
  \************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(/*! react */4),l=r(a),f=n(/*! ./client.css */17),c=r(f),p=n(/*! ./bbq.jpg */15),d=r(p),h=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"render",value:function(){var e=this.props.children;return l.default.createElement("div",null,l.default.createElement("div",{className:c.default.img},l.default.createElement("img",{src:d.default,alt:"bbq"})),e)}}]),t}(a.Component);h.getInitialCssText=function(){return c.default.toString()},t.default=h,e.exports=t.default},/*!**********************!*\
  !*** ./src/Index.js ***!
  \**********************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(/*! react */4),l=r(a),f=n(/*! ./index.css */3),c=r(f),p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"render",value:function(){var e=this.props.children;return l.default.createElement("div",{className:c.default.index},e)}}]),t}(a.Component);p.getInitialCssText=function(){return[n(/*! ./index.global.css */14),n(/*! ./index.css */3)].toString()},t.default=p,e.exports=t.default},/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(/*! redux */18),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return e};t.default=(0,r.combineReducers)({appName:o,url:i}),e.exports=t.default},/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(/*! ./Index */9),i=r(o),u=n(/*! ./Example */8),s=r(u),a=n(/*! ../config */7),l={path:a.rootdir,components:i.default,childRoutes:[{path:"index.html",components:s.default}]};t.default=[l],e.exports=t.default},/*!********************************************************************************************************************************************************!*\
  !*** ../~/css-loader-bbq?modules&localIdentName=[name]__[local]___[hash:base64:5]&hashPrefix=&importLoaders=1!../~/postcss-loader?{}!./src/client.css ***!
  \********************************************************************************************************************************************************/
function(e,t,n){t=e.exports=n(/*! ./../../~/css-loader-bbq/lib/css-base.js */1)(),t.push([e.i,".client__red___3sfvl {\n  color: red;\n}\n\n.client__img___1C3eM:before {\n  text-align: center;\n  min-width: 300px;\n  min-height: 200px;\n  background-repeat: no-repeat;\n}\n",""]),t.locals={red:"client__red___3sfvl",img:"client__img___1C3eM"}},/*!*******************************************************************************************************************************************************!*\
  !*** ../~/css-loader-bbq?modules&localIdentName=[name]__[local]___[hash:base64:5]&hashPrefix=&importLoaders=1!../~/postcss-loader?{}!./src/index.css ***!
  \*******************************************************************************************************************************************************/
function(e,t,n){t=e.exports=n(/*! ./../../~/css-loader-bbq/lib/css-base.js */1)(),t.push([e.i,":-webkit-full-screen a {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex\n}\n\n:-moz-full-screen a {\n  display: flex\n}\n\n:-ms-fullscreen a {\n  display: -ms-flexbox;\n  display: flex\n}\n\n:fullscreen a {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex\n}\n\n.index__index___3EdxT {\n  margin-top: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 800px;\n  text-align: center;\n}\n",""]),t.locals={index:"index__index___3EdxT"}},/*!******************************!*\
  !*** ./src/index.global.css ***!
  \******************************/
function(e,t){},/*!*********************!*\
  !*** ./src/bbq.jpg ***!
  \*********************/
function(e,t,n){e.exports=n.p+"src/bbq-dcb179fd926ad67e97ef7f62e3ba9108.jpg"},/*!*************************************!*\
  !*** ../~/path-browserify/index.js ***!
  \*************************************/
function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(e){return o.exec(e).slice(1)};t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var u=i>=0?arguments[i]:e.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(t=u+"/"+t,o="/"===u.charAt(0))}return t=n(r(t.split("/"),function(e){return!!e}),!o).join("/"),(o?"/":"")+t||"."},t.normalize=function(e){var o=t.isAbsolute(e),i="/"===u(e,-1);return e=n(r(e.split("/"),function(e){return!!e}),!o).join("/"),e||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),i=r(n.split("/")),u=Math.min(o.length,i.length),s=u,a=0;a<u;a++)if(o[a]!==i[a]){s=a;break}for(var l=[],a=s;a<o.length;a++)l.push("..");return l=l.concat(i.slice(s)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=i(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=i(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return i(e)[3]};var u="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(t,n(/*! ./../process/browser.js */20))},/*!************************!*\
  !*** ./src/client.css ***!
  \************************/
function(e,t,n){var r=n(/*! !./../../~/css-loader-bbq?modules&localIdentName=[name]__[local]___[hash:base64:5]&hashPrefix=&importLoaders=1!./../../~/postcss-loader??ref--4-2!./client.css */12);"string"==typeof r&&(r=[[e.i,r,""]]);n(/*! ./../../~/style-loader/addStyles.js */2)(r,{});r.locals&&(e.exports=r.locals)},/*!**************************************************************************************************!*\
  !*** delegated ../node_modules/redux/es/index.js from dll-reference render_8b1e72c1b2e882c20d12 ***!
  \**************************************************************************************************/
function(e,t,n){e.exports=n(0)(103)},/*!*******************************************************************************************!*\
  !*** delegated ./src/frameworks/render.js from dll-reference render_8b1e72c1b2e882c20d12 ***!
  \*******************************************************************************************/
function(e,t,n){e.exports=n(0)(105)},/*!***************************************************************************************************!*\
  !*** delegated ../node_modules/process/browser.js from dll-reference render_8b1e72c1b2e882c20d12 ***!
  \***************************************************************************************************/
function(e,t,n){e.exports=n(0)(69)},/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
function(e,t,n){(function(t){e.exports=t.client=n(/*! -!../~/babel-loader/lib?presets[]=react&presets[]=es2015&plugins[]=transform-object-rest-spread&plugins[]=add-module-exports&plugins[]=transform-class-properties&plugins[]=transform-async-to-generator&plugins[]=transform-es3-member-expression-literals&plugins[]=babel-plugin-transform-es3-property-literals&cacheDirectory=true&babelrc=false!./client.js */5)}).call(t,n(/*! ./../../~/webpack/buildin/global.js */6))}]);
//# sourceMappingURL=client-7b8a64a1ba1b8c01859f.bundle.js.map