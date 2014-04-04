/*!
 * JRaiser 2 Javascript Library
 * dom-animation - v1.0.0 (2014-01-07T17:57:30+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("dom/1.0.x/dom-animation",["base/1.0.x/","dom/1.0.x/dom-base","dom/1.0.x/dom-style",null],function(t,e){"use strict";function r(t){var e=y.push(t)-1;return c||(c=setInterval(function(){for(var t=0,e=y.length;e>t;t++)y[t]&&y[t]()},13)),e}function n(t){y[t]=null,""===y.join("")&&(y=[],c&&(clearInterval(c),c=null))}function i(t){return"string"==typeof t&&(t=v.test(t)?parseFloat(t,10)||0:h.test(t)?[parseInt(t.substr(1,2),16),parseInt(t.substr(3,2),16),parseInt(t.substr(5,2),16)]:I.test(t)?[parseInt(RegExp.$1,10),parseInt(RegExp.$2,10),parseInt(RegExp.$3,10)]:t.toLowerCase()),t}function s(t,e){var r,n={};for(var s in e)r="width"===s||"height"===s?d.getSize(t,s):w.test(s)?d.getScroll(t,s.replace(w,"")):i(d.getStyle(t,s)),""===r&&S.hasOwnProperty(s)&&(r=S[s]),n[s]=r;return n}function a(t){return p.isWindow(t)||1===t.nodeType&&!p.isXMLNode(t)}function o(t,e,r,n){var i;return"number"==typeof t?("string"==typeof e&&b.test(e)&&(e=t+parseFloat(e,10)),"number"==typeof e&&(i=t+(e-t)*r(0,1,n),(e>t&&i>e||t>e&&e>i)&&(i=e))):f.isArray(t)&&f.isArray(e)&&(i=[],t.forEach(function(t,s){i[s]=parseInt(o(t,e[s],r,n),10)})),i||e}function l(t,e,n,l){if(a(t)){n=f.mix({duration:400,easing:"linear"},n,{ignoreNull:!0});var c=n.easing;if("string"==typeof c&&(c=$[c]),!c)throw new Error("please specify easing");if(!l)for(var y in e)e[y]=i(e[y]);var v=s(t,e);u(t),"visible"===e.visibility&&d.setStyle(t,"visibility","visible"),"block"===e.display&&d.setStyle(t,"display","block");var b=p.uniqueId(t),h=+new Date,I=r(function(){var r,i,s,a=new Date-h,l=a/n.duration;for(var f in e)"visibility"!==f&&"display"!==f&&(r=v[f],i=e[f],r!=i&&(s=o(r,i,c,l),w.test(f)?d.setScroll(t,f.replace(w,""),s):d.setStyle(t,f,g.test(f)?"rgb("+s.join(", ")+")":s)));if(a>=n.duration){u(t);for(var p in e)d.setStyle(t,p,g.test(p)?"rgb("+e[p]+")":e[p]);n.callback&&n.callback.call(t)}});E[b]=I}}function u(t){if(a(t)){var e=p.uniqueId(t),r=E[e];null!=r&&(n(r),delete E[e])}}var c,f=t("base/1.0.x/"),p=t("./dom-base"),d=t("./dom-style"),y=[],v=/^[+-]?\d+(?:\.\d+)?[^\s]*$/,b=/^([+-])?(\d+(?:\.\d+)?)[^\s]*$/,g=/color$/i,h=/^#[a-f0-9]{6}$/i,I=/^rgb\((\d+),\s(\d+),\s(\d+)\)$/,w=/^scroll/,S={opacity:1},$={linear:function(t,e,r){return t+e*r},swing:function(t,e,r){return(-Math.cos(r*Math.PI)/2+.5)*e+t}},E={};e.start=l,e.stop=u,e.shortcuts={animate:function(t,e){for(var r in t)t[r]=i(t[r]);return this.forEach(function(r){l(r,t,e,!0)}),this},stop:function(){return this.forEach(function(t){u(t)}),this}}});