/*!
 * JRaiser 2 Javascript Library
 * dom-animation - v1.1.0 (2014-12-25T10:01:03+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("dom/1.1.x/dom-animation",["base/1.0.x/","animation/1.0.x/","dom/1.1.x/dom-base","dom/1.1.x/dom-data","dom/1.1.x/dom-style","dom/1.1.x/sizzle","dom/1.1.x/dom-offset",null],function(t){"use strict";function e(t,e){return"string"==typeof e&&(l.test(e)?e=parseFloat(e,10)||0:g.test(t)?d.test(e)?e=[parseInt(e.substr(1,2),16),parseInt(e.substr(3,2),16),parseInt(e.substr(5,2),16)]:m.test(e)&&(e=[Number(RegExp.$1),Number(RegExp.$2),Number(RegExp.$3)]):e=e.toLowerCase()),e}function r(t,r){var n,o={};for(var s in r)r.hasOwnProperty(s)&&(n="width"===s||"height"===s?c.getSize(t,s):p.test(s)?f.getScroll(t,RegExp.$1):e(s,c.getStyle(t,s)),o[s]=n);return o}function n(t,r){var n,o={};for(n in t)o[n]=c.rRelNumber.test(t[n])?(parseFloat(r[n],10)||0)+Number(RegExp.$1+RegExp.$2):e(n,t[n]);return o}function o(t,e,o){if(i.isHTMLElement(t)){o=o||{};var u=r(t,e);e=n(e,u),s(t);var l=a.add({startValue:u,endValue:e,duration:o.duration,easing:o.easing,step:function(e,r){p.test(r)?f.setScroll(t,RegExp.$1,e):c.setStyle(t,r,g.test(r)?"rgb("+e.map(function(t){return Math.min(255,Math.round(t))}).join(", ")+")":e)},onprogress:function(){o.onprogress&&o.onprogress.apply(t,arguments)},oncomplete:function(){b.clear(t),o.oncomplete&&o.oncomplete.call(t)}});b.set(t,"taskId",l)}}function s(t,e){if(i.isHTMLElement(t)){var r=b.get(t,"taskId");r&&(a.remove(r,e),b.clear(t))}}var a=(t("base/1.0.x/"),t("animation/1.0.x/")),i=t("./dom-base"),u=t("./dom-data"),c=t("./dom-style"),f=t("./dom-offset"),l=/^[+-]?\d+(?:\.\d+)?[^\s]*$/,p=/^scroll(Top|Left)$/,g=/color$/i,d=/^#[0-9a-f]{6}$/i,m=/^rgb\((\d+),\s(\d+),\s(\d+)\)$/,b=u.createDataSpace({cloneable:!1});return{shortcuts:{animate:function(t,r){for(var n in t)t[n]=e(n,t[n]);return this.forEach(function(e){o(e,t,r)}),this},stop:function(t){return this.forEach(function(e){s(e,t)}),this}}}});