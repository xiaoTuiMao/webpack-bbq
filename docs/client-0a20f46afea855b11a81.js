!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/webpack-bbq/",e(e.s=22)}([/*!**********************************************!*\
  !*** external "render_32dfb176441021f6139d" ***!
  \**********************************************/
function(t,e){t.exports=render_32dfb176441021f6139d},/*!******************************************!*\
  !*** ../~/ramda/src/internal/_curry2.js ***!
  \******************************************/
function(t,e,n){function r(t){return function e(n,r){switch(arguments.length){case 0:return e;case 1:return u(n)?e:o(function(e){return t(n,e)});default:return u(n)&&u(r)?e:u(n)?o(function(e){return t(e,r)}):u(r)?o(function(e){return t(n,e)}):t(n,r)}}}var o=n(/*! ./_curry1 */2),u=n(/*! ./_isPlaceholder */8);t.exports=r},/*!******************************************!*\
  !*** ../~/ramda/src/internal/_curry1.js ***!
  \******************************************/
function(t,e,n){function r(t){return function e(n){return 0===arguments.length||o(n)?e:t.apply(this,arguments)}}var o=n(/*! ./_isPlaceholder */8);t.exports=r},/*!***************************************!*\
  !*** ../~/ramda/src/internal/_has.js ***!
  \***************************************/
function(t,e){function n(t,e){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=n},/*!******************************!*\
  !*** ../~/ramda/src/keys.js ***!
  \******************************/
function(t,e,n){var r=n(/*! ./internal/_curry1 */2),o=n(/*! ./internal/_has */3),u=n(/*! ./internal/_isArguments */40),i=!{toString:null}.propertyIsEnumerable("toString"),c=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],a=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),f=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},s="function"!=typeof Object.keys||a?function(t){if(Object(t)!==t)return[];var e,n,r=[],s=a&&u(t);for(e in t)!o(e,t)||s&&"length"===e||(r[r.length]=e);if(i)for(n=c.length-1;n>=0;)e=c[n],o(e,t)&&!f(r,e)&&(r[r.length]=e),n-=1;return r}:function(t){return Object(t)!==t?[]:Object.keys(t)},l=r(s);t.exports=l},/*!***********************************************************************************************!*\
  !*** delegated ../node_modules/react/react.js from dll-reference render_32dfb176441021f6139d ***!
  \***********************************************************************************************/
function(t,e,n){t.exports=n(0)(11)},/*!*******************************************!*\
  !*** ../~/css-loader-bbq/lib/css-base.js ***!
  \*******************************************/
function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var u=this[o][0];"number"==typeof u&&(r[u]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},/*!*******************************************!*\
  !*** ../~/ramda/src/internal/_isArray.js ***!
  \*******************************************/
function(t,e){t.exports=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},/*!*************************************************!*\
  !*** ../~/ramda/src/internal/_isPlaceholder.js ***!
  \*************************************************/
function(t,e){function n(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}t.exports=n},/*!**************************************!*\
  !*** ../~/style-loader/addStyles.js ***!
  \**************************************/
function(t,e){function n(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=p[r.id];if(o){o.refs++;for(var u=0;u<o.parts.length;u++)o.parts[u](r.parts[u]);for(;u<r.parts.length;u++)o.parts.push(a(r.parts[u],e))}else{for(var i=[],u=0;u<r.parts.length;u++)i.push(a(r.parts[u],e));p[r.id]={id:r.id,refs:1,parts:i}}}}function r(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],u=o[0],i=o[1],c=o[2],a=o[3],f={css:i,media:c,sourceMap:a};n[u]?n[u].parts.push(f):e.push(n[u]={id:u,parts:[f]})}return e}function o(t,e){var n=h(),r=g[g.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function u(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function i(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function a(t,e){var n,r,o;if(e.singleton){var a=v++;n=b||(b=i(e)),r=f.bind(null,n,a,!1),o=f.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),r=l.bind(null,n),o=function(){u(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(e),r=s.bind(null,n),o=function(){u(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function f(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var u=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(u,i[e]):t.appendChild(u)}}function s(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function l(t,e){var n=e.css,r=e.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(o),u&&URL.revokeObjectURL(u)}var p={},d=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},y=d(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,v=0,g=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=y()),void 0===e.insertAt&&(e.insertAt="bottom");var o=r(t);return n(o,e),function(t){for(var u=[],i=0;i<o.length;i++){var c=o[i],a=p[c.id];a.refs--,u.push(a)}if(t){n(r(t),e)}for(var i=0;i<u.length;i++){var a=u[i];if(0===a.refs){for(var f=0;f<a.parts.length;f++)a.parts[f]();delete p[a.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
function(t,e,n){var r=n(/*! !../../~/css-loader-bbq?modules&localIdentName=[name]__[local]___[hash:base64:5]&hashPrefix=&importLoaders=1!../../~/postcss-loader??ref--5-2!./index.css */21);"string"==typeof r&&(r=[[t.i,r,""]]);n(/*! ../../~/style-loader/addStyles.js */9)(r,{});r.locals&&(t.exports=r.locals)},/*!**************************************************************************************************!*\
  !*** delegated ../node_modules/redux/es/index.js from dll-reference render_32dfb176441021f6139d ***!
  \**************************************************************************************************/
function(t,e,n){t.exports=n(0)(106)},/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../~/babel-loader/lib?presets[]=react&presets[]=es2015&plugins[]=transform-object-rest-spread&plugins[]=add-module-exports&plugins[]=transform-class-properties&plugins[]=transform-async-to-generator&plugins[]=transform-es3-member-expression-literals&plugins[]=babel-plugin-transform-es3-property-literals&plugins[]=babel-plugin-ramda&cacheDirectory=true&babelrc=false!./src/client.js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=n(/*! ./frameworks/render */17),u=r(o),i=n(/*! ./reducer */18),c=r(i),a=n(/*! ./routes */19),f=r(a);(0,u.default)({routes:f.default,reducer:c.default})},/*!**********************************************************************************************************!*\
  !*** delegated ../node_modules/webpack/buildin/global.js from dll-reference render_32dfb176441021f6139d ***!
  \**********************************************************************************************************/
function(t,e,n){t.exports=n(0)(58)},/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
function(t,e,n){"use strict";(function(e){const r=n(/*! path */25),o=e;var u="/";u="/webpack-bbq/";const i=u;t.exports={basedir:o,outputdir:r.resolve(o,"../docs"),rootdir:u,publicPath:i}}).call(e,"")},/*!************************!*\
  !*** ./src/Example.js ***!
  \************************/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=n(/*! ramda/src/toString */54),a=r(c),f=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(/*! react */5),l=r(s),p=n(/*! ./client.css */56),d=r(p),y=n(/*! ./bbq.jpg */24),h=r(y),b=function(t){function e(){return o(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),f(e,[{key:"render",value:function(){var t=this.props.children;return l.default.createElement("div",null,l.default.createElement("div",{className:d.default.img},l.default.createElement("img",{src:h.default,alt:"bbq"})),t)}}]),e}(s.Component);b.getInitialCssText=function(){return(0,a.default)(d.default)},e.default=b,t.exports=e.default},/*!**********************!*\
  !*** ./src/Index.js ***!
  \**********************/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(/*! react */5),f=r(a),s=n(/*! ./index.css */10),l=r(s),p=function(t){function e(){return o(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),c(e,[{key:"render",value:function(){var t=this.props.children;return f.default.createElement("div",{className:l.default.index},t)}}]),e}(a.Component);p.getInitialCssText=function(){return[n(/*! ./index.global.css */23),n(/*! ./index.css */10)].toString()},e.default=p,t.exports=e.default},/*!**********************************!*\
  !*** ./src/frameworks/render.js ***!
  \**********************************/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){var e=t.routes,n=t.reducer,r=(0,f.createStore)(n,window.initialState,(0,f.applyMiddleware)(l.default)),o={routes:e,history:d.default},u=document.getElementById(window.initialState.appName);a.default.render(i.default.createElement(h.default,{store:r,router:o}),u)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var u=n(/*! react */5),i=r(u),c=n(/*! react-dom */58),a=r(c),f=n(/*! redux */11),s=n(/*! redux-thunk */60),l=r(s),p=n(/*! react-router/lib/browserHistory */59),d=r(p),y=n(/*! ./components/App */57),h=r(y);t.exports=e.default},/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(/*! redux */11),o=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:null},u=function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:null};e.default=(0,r.combineReducers)({appName:o,url:u}),t.exports=e.default},/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(/*! ./Index */16),u=r(o),i=n(/*! ./Example */15),c=r(i),a=n(/*! ../config */14),f={path:a.rootdir,components:u.default,childRoutes:[{path:"index.html",components:c.default}]};e.default=[f],t.exports=e.default},/*!********************************************************************************************************************************************************!*\
  !*** ../~/css-loader-bbq?modules&localIdentName=[name]__[local]___[hash:base64:5]&hashPrefix=&importLoaders=1!../~/postcss-loader?{}!./src/client.css ***!
  \********************************************************************************************************************************************************/
function(t,e,n){e=t.exports=n(/*! ../../~/css-loader-bbq/lib/css-base.js */6)(),e.push([t.i,".client__red___3sfvl {\n  color: red;\n}\n\n.client__img___1C3eM:before {\n  text-align: center;\n  min-width: 300px;\n  min-height: 200px;\n  background-repeat: no-repeat;\n}\n",""]),e.locals={red:"client__red___3sfvl",img:"client__img___1C3eM"}},/*!*******************************************************************************************************************************************************!*\
  !*** ../~/css-loader-bbq?modules&localIdentName=[name]__[local]___[hash:base64:5]&hashPrefix=&importLoaders=1!../~/postcss-loader?{}!./src/index.css ***!
  \*******************************************************************************************************************************************************/
function(t,e,n){e=t.exports=n(/*! ../../~/css-loader-bbq/lib/css-base.js */6)(),e.push([t.i,":-webkit-full-screen a {\n  display: -webkit-box;\n  display: flex\n}\n\n:-moz-full-screen a {\n  display: flex\n}\n\n:-ms-fullscreen a {\n  display: -ms-flexbox;\n  display: flex\n}\n\n:fullscreen a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex\n}\n\n.index__index___3EdxT {\n  margin-top: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 800px;\n  text-align: center;\n}\n",""]),e.locals={index:"index__index___3EdxT"}},/*!*******************************!*\
  !*** ./src/client.js-exposed ***!
  \*******************************/
function(t,e,n){(function(e){t.exports=e.client=n(/*! -!../~/babel-loader/lib?presets[]=react&presets[]=es2015&plugins[]=transform-object-rest-spread&plugins[]=add-module-exports&plugins[]=transform-class-properties&plugins[]=transform-async-to-generator&plugins[]=transform-es3-member-expression-literals&plugins[]=babel-plugin-transform-es3-property-literals&plugins[]=babel-plugin-ramda&cacheDirectory=true&babelrc=false!./client.js */12)}).call(e,n(/*! ./../../~/webpack/buildin/global.js */13))},/*!******************************!*\
  !*** ./src/index.global.css ***!
  \******************************/
function(t,e){},/*!*********************!*\
  !*** ./src/bbq.jpg ***!
  \*********************/
function(t,e,n){t.exports=n.p+"src/bbq-dcb179fd926ad67e97ef7f62e3ba9108.jpg"},/*!*************************************!*\
  !*** ../~/path-browserify/index.js ***!
  \*************************************/
function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,u=function(t){return o.exec(t).slice(1)};e.resolve=function(){for(var e="",o=!1,u=arguments.length-1;u>=-1&&!o;u--){var i=u>=0?arguments[u]:t.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,o="/"===i.charAt(0))}return e=n(r(e.split("/"),function(t){return!!t}),!o).join("/"),(o?"/":"")+e||"."},e.normalize=function(t){var o=e.isAbsolute(t),u="/"===i(t,-1);return t=n(r(t.split("/"),function(t){return!!t}),!o).join("/"),t||o||(t="."),t&&u&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),u=r(n.split("/")),i=Math.min(o.length,u.length),c=i,a=0;a<i;a++)if(o[a]!==u[a]){c=a;break}for(var f=[],a=c;a<o.length;a++)f.push("..");return f=f.concat(u.slice(c)),f.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=u(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=u(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return u(t)[3]};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(e,n(/*! ./../process/browser.js */61))},/*!******************************!*\
  !*** ../~/ramda/src/bind.js ***!
  \******************************/
function(t,e,n){var r=n(/*! ./internal/_arity */30),o=n(/*! ./internal/_curry2 */1),u=o(function(t,e){return r(t.length,function(){return t.apply(e,arguments)})});t.exports=u},/*!********************************!*\
  !*** ../~/ramda/src/equals.js ***!
  \********************************/
function(t,e,n){var r=n(/*! ./internal/_curry2 */1),o=n(/*! ./internal/_equals */36),u=r(function(t,e){return o(t,e,[],[])});t.exports=u},/*!********************************!*\
  !*** ../~/ramda/src/filter.js ***!
  \********************************/
function(t,e,n){var r=n(/*! ./internal/_curry2 */1),o=n(/*! ./internal/_dispatchable */35),u=n(/*! ./internal/_filter */37),i=n(/*! ./internal/_isObject */42),c=n(/*! ./internal/_reduce */47),a=n(/*! ./internal/_xfilter */51),f=n(/*! ./keys */4),s=r(o(["filter"],a,function(t,e){return i(e)?c(function(n,r){return t(e[r])&&(n[r]=e[r]),n},{},f(e)):u(t,e)}));t.exports=s},/*!***********************************!*\
  !*** ../~/ramda/src/identical.js ***!
  \***********************************/
function(t,e,n){var r=n(/*! ./internal/_curry2 */1),o=r(function(t,e){return t===e?0!==t||1/t==1/e:t!==t&&e!==e});t.exports=o},/*!*****************************************!*\
  !*** ../~/ramda/src/internal/_arity.js ***!
  \*****************************************/
function(t,e){function n(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,o){return e.apply(this,arguments)};case 5:return function(t,n,r,o,u){return e.apply(this,arguments)};case 6:return function(t,n,r,o,u,i){return e.apply(this,arguments)};case 7:return function(t,n,r,o,u,i,c){return e.apply(this,arguments)};case 8:return function(t,n,r,o,u,i,c,a){return e.apply(this,arguments)};case 9:return function(t,n,r,o,u,i,c,a,f){return e.apply(this,arguments)};case 10:return function(t,n,r,o,u,i,c,a,f,s){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}t.exports=n},/*!*****************************************************!*\
  !*** ../~/ramda/src/internal/_arrayFromIterator.js ***!
  \*****************************************************/
function(t,e){function n(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}t.exports=n},/*!**********************************************!*\
  !*** ../~/ramda/src/internal/_complement.js ***!
  \**********************************************/
function(t,e){function n(t){return function(){return!t.apply(this,arguments)}}t.exports=n},/*!********************************************!*\
  !*** ../~/ramda/src/internal/_contains.js ***!
  \********************************************/
function(t,e,n){function r(t,e){return o(e,t,0)>=0}var o=n(/*! ./_indexOf */39);t.exports=r},/*!************************************************!*\
  !*** ../~/ramda/src/internal/_containsWith.js ***!
  \************************************************/
function(t,e){function n(t,e,n){for(var r=0,o=n.length;r<o;){if(t(e,n[r]))return!0;r+=1}return!1}t.exports=n},/*!************************************************!*\
  !*** ../~/ramda/src/internal/_dispatchable.js ***!
  \************************************************/
function(t,e,n){function r(t,e,n){return function(){if(0===arguments.length)return n();var r=Array.prototype.slice.call(arguments,0),i=r.pop();if(!o(i)){for(var c=0;c<t.length;){if("function"==typeof i[t[c]])return i[t[c]].apply(i,r);c+=1}if(u(i)){return e.apply(null,r)(i)}}return n.apply(this,arguments)}}var o=n(/*! ./_isArray */7),u=n(/*! ./_isTransformer */44);t.exports=r},/*!******************************************!*\
  !*** ../~/ramda/src/internal/_equals.js ***!
  \******************************************/
function(t,e,n){function r(t,e,n,r){function c(t,e){return o(t,e,n.slice(),r.slice())}var a=u(t),f=u(e);return!i(function(t,e){return!i(c,e,t)},f,a)}function o(t,e,n,u){if(f(t,e))return!0;var i=l(t);if(i!==l(e))return!1;if(null==t||null==e)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof e["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e)&&"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof e.equals)return"function"==typeof t.equals&&t.equals(e)&&"function"==typeof e.equals&&e.equals(t);switch(i){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===c(t.constructor))return t===e;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof e||!f(t.valueOf(),e.valueOf()))return!1;break;case"Date":if(!f(t.valueOf(),e.valueOf()))return!1;break;case"Error":return t.name===e.name&&t.message===e.message;case"RegExp":if(t.source!==e.source||t.global!==e.global||t.ignoreCase!==e.ignoreCase||t.multiline!==e.multiline||t.sticky!==e.sticky||t.unicode!==e.unicode)return!1}for(var p=n.length-1;p>=0;){if(n[p]===t)return u[p]===e;p-=1}switch(i){case"Map":return t.size===e.size&&r(t.entries(),e.entries(),n.concat([t]),u.concat([e]));case"Set":return t.size===e.size&&r(t.values(),e.values(),n.concat([t]),u.concat([e]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var d=s(t);if(d.length!==s(e).length)return!1;var y=n.concat([t]),h=u.concat([e]);for(p=d.length-1;p>=0;){var b=d[p];if(!a(b,e)||!o(e[b],t[b],y,h))return!1;p-=1}return!0}var u=n(/*! ./_arrayFromIterator */31),i=n(/*! ./_containsWith */34),c=n(/*! ./_functionName */38),a=n(/*! ./_has */3),f=n(/*! ../identical */29),s=n(/*! ../keys */4),l=n(/*! ../type */55);t.exports=o},/*!******************************************!*\
  !*** ../~/ramda/src/internal/_filter.js ***!
  \******************************************/
function(t,e){function n(t,e){for(var n=0,r=e.length,o=[];n<r;)t(e[n])&&(o[o.length]=e[n]),n+=1;return o}t.exports=n},/*!************************************************!*\
  !*** ../~/ramda/src/internal/_functionName.js ***!
  \************************************************/
function(t,e){function n(t){var e=String(t).match(/^function (\w*)/);return null==e?"":e[1]}t.exports=n},/*!*******************************************!*\
  !*** ../~/ramda/src/internal/_indexOf.js ***!
  \*******************************************/
function(t,e,n){function r(t,e,n){var r,u;if("function"==typeof t.indexOf)switch(typeof e){case"number":if(0===e){for(r=1/e;n<t.length;){if(0===(u=t[n])&&1/u===r)return n;n+=1}return-1}if(e!==e){for(;n<t.length;){if("number"==typeof(u=t[n])&&u!==u)return n;n+=1}return-1}return t.indexOf(e,n);case"string":case"boolean":case"function":case"undefined":return t.indexOf(e,n);case"object":if(null===e)return t.indexOf(e,n)}for(;n<t.length;){if(o(t[n],e))return n;n+=1}return-1}var o=n(/*! ../equals */27);t.exports=r},/*!***********************************************!*\
  !*** ../~/ramda/src/internal/_isArguments.js ***!
  \***********************************************/
function(t,e,n){var r=n(/*! ./_has */3),o=Object.prototype.toString,u=function(){return"[object Arguments]"===o.call(arguments)?function(t){return"[object Arguments]"===o.call(t)}:function(t){return r("callee",t)}};t.exports=u},/*!***********************************************!*\
  !*** ../~/ramda/src/internal/_isArrayLike.js ***!
  \***********************************************/
function(t,e,n){var r=n(/*! ./_curry1 */2),o=n(/*! ./_isArray */7),u=n(/*! ./_isString */43),i=r(function(t){return!!o(t)||!!t&&("object"==typeof t&&(!u(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))});t.exports=i},/*!********************************************!*\
  !*** ../~/ramda/src/internal/_isObject.js ***!
  \********************************************/
function(t,e){function n(t){return"[object Object]"===Object.prototype.toString.call(t)}t.exports=n},/*!********************************************!*\
  !*** ../~/ramda/src/internal/_isString.js ***!
  \********************************************/
function(t,e){function n(t){return"[object String]"===Object.prototype.toString.call(t)}t.exports=n},/*!*************************************************!*\
  !*** ../~/ramda/src/internal/_isTransformer.js ***!
  \*************************************************/
function(t,e){function n(t){return"function"==typeof t["@@transducer/step"]}t.exports=n},/*!***************************************!*\
  !*** ../~/ramda/src/internal/_map.js ***!
  \***************************************/
function(t,e){function n(t,e){for(var n=0,r=e.length,o=Array(r);n<r;)o[n]=t(e[n]),n+=1;return o}t.exports=n},/*!*****************************************!*\
  !*** ../~/ramda/src/internal/_quote.js ***!
  \*****************************************/
function(t,e){function n(t){return'"'+t.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'}t.exports=n},/*!******************************************!*\
  !*** ../~/ramda/src/internal/_reduce.js ***!
  \******************************************/
function(t,e,n){function r(t,e,n){for(var r=0,o=n.length;r<o;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}function o(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function u(t,e,n,r){return t["@@transducer/result"](n[r](f(t["@@transducer/step"],t),e))}function i(t,e,n){if("function"==typeof t&&(t=a(t)),c(n))return r(t,e,n);if("function"==typeof n["fantasy-land/reduce"])return u(t,e,n,"fantasy-land/reduce");if(null!=n[s])return o(t,e,n[s]());if("function"==typeof n.next)return o(t,e,n);if("function"==typeof n.reduce)return u(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}var c=n(/*! ./_isArrayLike */41),a=n(/*! ./_xwrap */52),f=n(/*! ../bind */26),s="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";t.exports=i},/*!***********************************************!*\
  !*** ../~/ramda/src/internal/_toISOString.js ***!
  \***********************************************/
function(t,e){var n=function(t){return(t<10?"0":"")+t},r="function"==typeof Date.prototype.toISOString?function(t){return t.toISOString()}:function(t){return t.getUTCFullYear()+"-"+n(t.getUTCMonth()+1)+"-"+n(t.getUTCDate())+"T"+n(t.getUTCHours())+":"+n(t.getUTCMinutes())+":"+n(t.getUTCSeconds())+"."+(t.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};t.exports=r},/*!********************************************!*\
  !*** ../~/ramda/src/internal/_toString.js ***!
  \********************************************/
function(t,e,n){function r(t,e){var n=function(n){var u=e.concat([t]);return o(n,u)?"<Circular>":r(n,u)},s=function(t,e){return u(function(e){return i(e)+": "+n(t[e])},e.slice().sort())};switch(Object.prototype.toString.call(t)){case"[object Arguments]":return"(function() { return arguments; }("+u(n,t).join(", ")+"))";case"[object Array]":return"["+u(n,t).concat(s(t,f(function(t){return/^\d+$/.test(t)},a(t)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof t?"new Boolean("+n(t.valueOf())+")":t.toString();case"[object Date]":return"new Date("+(isNaN(t.valueOf())?n(NaN):i(c(t)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof t?"new Number("+n(t.valueOf())+")":1/t==-1/0?"-0":t.toString(10);case"[object String]":return"object"==typeof t?"new String("+n(t.valueOf())+")":i(t);case"[object Undefined]":return"undefined";default:if("function"==typeof t.toString){var l=t.toString();if("[object Object]"!==l)return l}return"{"+s(t,a(t)).join(", ")+"}"}}var o=n(/*! ./_contains */33),u=n(/*! ./_map */45),i=n(/*! ./_quote */46),c=n(/*! ./_toISOString */48),a=n(/*! ../keys */4),f=n(/*! ../reject */53);t.exports=r},/*!******************************************!*\
  !*** ../~/ramda/src/internal/_xfBase.js ***!
  \******************************************/
function(t,e){t.exports={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},/*!*******************************************!*\
  !*** ../~/ramda/src/internal/_xfilter.js ***!
  \*******************************************/
function(t,e,n){var r=n(/*! ./_curry2 */1),o=n(/*! ./_xfBase */50),u=function(){function t(t,e){this.xf=e,this.f=t}return t.prototype["@@transducer/init"]=o.init,t.prototype["@@transducer/result"]=o.result,t.prototype["@@transducer/step"]=function(t,e){return this.f(e)?this.xf["@@transducer/step"](t,e):t},t}(),i=r(function(t,e){return new u(t,e)});t.exports=i},/*!*****************************************!*\
  !*** ../~/ramda/src/internal/_xwrap.js ***!
  \*****************************************/
function(t,e){function n(t){return new r(t)}var r=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();t.exports=n},/*!********************************!*\
  !*** ../~/ramda/src/reject.js ***!
  \********************************/
function(t,e,n){var r=n(/*! ./internal/_complement */32),o=n(/*! ./internal/_curry2 */1),u=n(/*! ./filter */28),i=o(function(t,e){return u(r(t),e)});t.exports=i},/*!**********************************!*\
  !*** ../~/ramda/src/toString.js ***!
  \**********************************/
function(t,e,n){var r=n(/*! ./internal/_curry1 */2),o=n(/*! ./internal/_toString */49),u=r(function(t){return o(t,[])});t.exports=u},/*!******************************!*\
  !*** ../~/ramda/src/type.js ***!
  \******************************/
function(t,e,n){var r=n(/*! ./internal/_curry1 */2),o=r(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)});t.exports=o},/*!************************!*\
  !*** ./src/client.css ***!
  \************************/
function(t,e,n){var r=n(/*! !../../~/css-loader-bbq?modules&localIdentName=[name]__[local]___[hash:base64:5]&hashPrefix=&importLoaders=1!../../~/postcss-loader??ref--5-2!./client.css */20);"string"==typeof r&&(r=[[t.i,r,""]]);n(/*! ../../~/style-loader/addStyles.js */9)(r,{});r.locals&&(t.exports=r.locals)},/*!***************************************************************************************************!*\
  !*** delegated ./src/frameworks/components/App.js from dll-reference render_32dfb176441021f6139d ***!
  \***************************************************************************************************/
function(t,e,n){t.exports=n(0)(109)},/*!***************************************************************************************************!*\
  !*** delegated ../node_modules/react-dom/index.js from dll-reference render_32dfb176441021f6139d ***!
  \***************************************************************************************************/
function(t,e,n){t.exports=n(0)(142)},/*!*******************************************************************************************************************!*\
  !*** delegated ../node_modules/react-router/lib/browserHistory.js from dll-reference render_32dfb176441021f6139d ***!
  \*******************************************************************************************************************/
function(t,e,n){t.exports=n(0)(222)},/*!*********************************************************************************************************!*\
  !*** delegated ../node_modules/redux-thunk/lib/index.js from dll-reference render_32dfb176441021f6139d ***!
  \*********************************************************************************************************/
function(t,e,n){t.exports=n(0)(243)},/*!***************************************************************************************************!*\
  !*** delegated ../node_modules/process/browser.js from dll-reference render_32dfb176441021f6139d ***!
  \***************************************************************************************************/
function(t,e,n){t.exports=n(0)(69)}]);
//# sourceMappingURL=client-0a20f46afea855b11a81.js.map