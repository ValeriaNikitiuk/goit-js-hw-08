!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,b=Math.max,m=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,o,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function O(e){return l=e,f=setTimeout(h,t),d?y(e):a}function T(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=p();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?m(n,u-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function S(){var e=p(),n=T(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return O(c);if(s)return f=setTimeout(h,t),y(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?b(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},S.flush=function(){return void 0===f?a:w(p())},S}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form");O.addEventListener("submit",(function(e){e.preventDefault(),t=e.currentTarget,n=Object.fromEntries(new FormData(t)),console.log("feedbackData",n),e.currentTarget.reset();var t,n})),O.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem("formData",JSON.stringify(T))}),500));var T={};!function(){var e=JSON.parse(localStorage.getItem("formData"));if(!e)return;Object.keys(e).forEach((function(t){T[t]=e[t],O.querySelector('[name="'.concat(t,'"]')).value=e[t]}))}()}();
//# sourceMappingURL=03-feedback.01477953.js.map
