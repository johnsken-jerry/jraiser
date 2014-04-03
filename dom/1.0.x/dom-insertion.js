/*!
 * jRaiser 2 Javascript Library
 * dom-insertion - v1.0.0 (2013-12-06T13:59:05+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("dom/1.0.x/dom-insertion",["base/1.0.x/","dom/1.0.x/dom-base","dom/1.0.x/dom-data","dom/1.0.x/dom-event","dom/1.0.x/sizzle","dom/1.0.x/dom-event-arg",null],function(n){"use strict";function e(n,e){var t=(e||document).createElement("div"),r=[];t.innerHTML=n;for(var o=t.firstChild;o;)r.push(o.cloneNode(!0)),o=o.nextSibling;return t=null,r}function t(n,e){var t=(e||document).createDocumentFragment();n=s.toArray(n);for(var r=0;r<n.length;r++)t.appendChild(n[r]);return t}function r(n,r){if("string"==typeof n)n=e(n,r);else if(h.isNode(n))return n;return n.length>1?t(n,r):n[0]}function o(n,e,t){return e?(t||(n=r(n,e.ownerDocument)),e.appendChild(n),n):void 0}function i(n,e,t){if(e){t||(n=r(n,e.ownerDocument));var o=e.firstChild;return o?e.insertBefore(n,o):e.appendChild(n),n}}function u(n,e,t){return t||(n=r(n,e.ownerDocument)),e.parentNode?(e.parentNode.insertBefore(n,e),n):void 0}function c(n,e,t){var o=e.parentNode;if(o){t||(n=r(n,e.ownerDocument));var i=e.nextSibling;return i?o.insertBefore(n,i):o.appendChild(n),n}}function f(n,e,t){t||(n=r(n,e.ownerDocument)),e.parentNode&&e.parentNode.replaceChild(n,e)}function a(n,e,t,o){for(var i,u=0;u<n.length;u++)o&&o.call(n,n[u],u)===!1||(i||(i=r(e)),t.call(n,u<n.length-1?C(i):i,n[u]));return i=null,n}function d(n,e,r,o){var i,u=[];n="string"==typeof n?v(n):h.isNode(n)?[n]:s.toArray(n);for(var c=0;c<n.length;c++)o&&o.call(n,n[c],c)===!1||(i=c<n.length-1?e.clone():e,i.forEach(function(n){u.push(n)}),r.call(n,t(i),n[c]));return v.uniqueSort(u)}function l(n){var e=h.uniqueId(n,!1);e&&(p.removeData(n),m.off(n),h.removeUniqueId(n))}var s=n("base/1.0.x/"),h=n("./dom-base"),p=n("./dom-data"),m=n("./dom-event"),v=n("./sizzle"),g=function(){var n=document.createElement("span");n._expando_=1;var e="_expando_"in n.cloneNode(!1);return n=null,e}(),C=g?function(n){var e=document.createElement("div");e.innerHTML=n.outerHTML;var t=e.firstChild;return e.removeChild(e.firstChild),e=null,t}:function(n){return n.cloneNode(!0)};return{create:e,buildFragment:t,appendChild:o,prependChild:i,insertBefore:u,insertAfter:c,replaceWith:f,shortcuts:{append:function(n){return a(this,n,function(n,e){o(n,e,!0)},function(n){return 1===n.nodeType})},appendTo:function(n){return new this.constructor(d(n,this,function(n,e){o(n,e,!0)},function(n){return 1===n.nodeType}))},prepend:function(n){return a(this,n,function(n,e){i(n,e,!0)},function(n){return 1===n.nodeType})},prependTo:function(n){return new this.constructor(d(n,this,function(n,e){i(n,e,!0)},function(n){return 1===n.nodeType}))},after:function(n){return a(this,n,function(n,e){c(n,e,!0)})},insertAfter:function(n){return new this.constructor(d(n,this,function(n,e){c(n,e,!0)}))},before:function(n){return a(this,n,function(n,e){u(n,e,!0)})},insertBefore:function(n){return new this.constructor(d(n,this,function(n,e){u(n,e,!0)}))},replaceWith:function(n){return a(this,n,function(n,e){f(n,e,!0)})},replaceAll:function(n){return new this.constructor(d(n,this,function(n,e){f(n,e,!0)}))},detach:function(){return this.forEach(function(n){n.parentNode.removeChild(n)}),this},remove:function(){return this.forEach(function(n){if(1===n.nodeType)for(var e=n.getElementsByTagName("*"),t=e.length-1;t>=0;t--)l(e[t]);l(n),n.parentNode&&n.parentNode.removeChild(n)}),this},empty:function(){return this.forEach(function(n){if(1===n.nodeType)for(var e=n.getElementsByTagName("*"),t=e.length-1;t>=0;t--)l(e[t]);for(;n.firstChild;)n.removeChild(n.firstChild);n.options&&"SELECT"===n.nodeName&&(n.options.length=0)}),this},clone:function(){var n=[];return this.forEach(function(e,t){n[t]=C(e)}),new this.constructor(n)}}}});