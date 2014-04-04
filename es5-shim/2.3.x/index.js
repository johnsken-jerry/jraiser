/*!
 * JRaiser 2 Javascript Library
 * es5-shim - v2.3.0 (2014-03-25T15:33:29+0800)
 * http://jraiser.org/ | Released under MIT license
 *
 * Include es5-shim (https://github.com/kriskowal/es5-shim)
 */
define("es5-shim/2.3.x/",null,function(){function t(){}function r(t){return t=+t,t!==t?t=0:0!==t&&t!==1/0&&t!==-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t))),t}function e(t){var r=typeof t;return null===t||"undefined"===r||"boolean"===r||"number"===r||"string"===r}function n(t){var r,n,o;if(e(t))return t;if(n=t.valueOf,"function"==typeof n&&(r=n.call(t),e(r)))return r;if(o=t.toString,"function"==typeof o&&(r=o.call(t),e(r)))return r;throw new TypeError}8!==parseInt("08")&&(parseInt=function(t){var r=/^0[xX]/;return function(e,n){return e=String(e).trim(),+n||(n=r.test(e)?16:10),t(e,n)}}(parseInt)),Function.prototype.bind||(Function.prototype.bind=function(r){var e=this;if("function"!=typeof e)throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var n=f.call(arguments,1),o=function(){if(this instanceof p){var t=e.apply(this,n.concat(f.call(arguments)));return Object(t)===t?t:this}return e.apply(r,n.concat(f.call(arguments)))},i=Math.max(0,e.length-n.length),a=[],u=0;i>u;u++)a.push("$"+u);var p=Function("binder","return function("+a.join(",")+"){return binder.apply(this,arguments)}")(o);return e.prototype&&(t.prototype=e.prototype,p.prototype=new t,t.prototype=null),p});var o,i,a,u,p,l=Function.prototype.call,s=Array.prototype,c=Object.prototype,f=s.slice,h=l.bind(c.toString),y=l.bind(c.hasOwnProperty);if((p=y(c,"__defineGetter__"))&&(o=l.bind(c.__defineGetter__),i=l.bind(c.__defineSetter__),a=l.bind(c.__lookupGetter__),u=l.bind(c.__lookupSetter__)),2!=[1,2].splice(0).length){var g=Array.prototype.splice,v=Array.prototype.push,d=Array.prototype.unshift;Array.prototype.splice=function(){function t(t){for(var r=[];t--;)r.unshift(t);return r}var r,e=[];return e.splice.bind(e,0,0).apply(null,t(20)),e.splice.bind(e,0,0).apply(null,t(26)),r=e.length,e.splice(5,0,"XXX"),r+1==e.length?!0:void 0}()?function(t,r){return arguments.length?g.apply(this,[void 0===t?0:t,void 0===r?this.length-t:r].concat(f.call(arguments,2))):[]}:function(t,r){var e,n=f.call(arguments,2),o=n.length;if(!arguments.length)return[];if(void 0===t&&(t=0),void 0===r&&(r=this.length-t),o>0){if(0>=r){if(t==this.length)return v.apply(this,n),[];if(0==t)return d.apply(this,n),[]}return e=f.call(this,t,t+r),n.push.apply(n,f.call(this,t+r,this.length)),n.unshift.apply(n,f.call(this,0,t)),n.unshift(0,this.length),g.apply(this,n),e}return g.call(this,t,r)}}if(1!=[].unshift(0)){var d=Array.prototype.unshift;Array.prototype.unshift=function(){return d.apply(this,arguments),this.length}}Array.isArray||(Array.isArray=function(t){return"[object Array]"==h(t)});var b=Object("a"),m="a"!=b[0]||!(0 in b),w=!0;if(Array.prototype.forEach&&Array.prototype.forEach.call("foo",function(t,r,e){"object"!=typeof e&&(w=!1)}),Array.prototype.forEach&&w||(Array.prototype.forEach=function(t){var r=R(this),e=m&&"[object String]"==h(this)?this.split(""):r,n=arguments[1],o=-1,i=e.length>>>0;if("[object Function]"!=h(t))throw new TypeError;for(;++o<i;)o in e&&t.call(n,e[o],o,r)}),Array.prototype.map||(Array.prototype.map=function(t){var r=R(this),e=m&&"[object String]"==h(this)?this.split(""):r,n=e.length>>>0,o=Array(n),i=arguments[1];if("[object Function]"!=h(t))throw new TypeError(t+" is not a function");for(var a=0;n>a;a++)a in e&&(o[a]=t.call(i,e[a],a,r));return o}),Array.prototype.filter||(Array.prototype.filter=function(t){var r,e=R(this),n=m&&"[object String]"==h(this)?this.split(""):e,o=n.length>>>0,i=[],a=arguments[1];if("[object Function]"!=h(t))throw new TypeError(t+" is not a function");for(var u=0;o>u;u++)u in n&&(r=n[u],t.call(a,r,u,e)&&i.push(r));return i}),Array.prototype.every||(Array.prototype.every=function(t){var r=R(this),e=m&&"[object String]"==h(this)?this.split(""):r,n=e.length>>>0,o=arguments[1];if("[object Function]"!=h(t))throw new TypeError(t+" is not a function");for(var i=0;n>i;i++)if(i in e&&!t.call(o,e[i],i,r))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(t){var r=R(this),e=m&&"[object String]"==h(this)?this.split(""):r,n=e.length>>>0,o=arguments[1];if("[object Function]"!=h(t))throw new TypeError(t+" is not a function");for(var i=0;n>i;i++)if(i in e&&t.call(o,e[i],i,r))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var r=R(this),e=m&&"[object String]"==h(this)?this.split(""):r,n=e.length>>>0;if("[object Function]"!=h(t))throw new TypeError(t+" is not a function");if(!n&&1==arguments.length)throw new TypeError("reduce of empty array with no initial value");var o,i=0;if(arguments.length>=2)o=arguments[1];else for(;;){if(i in e){o=e[i++];break}if(++i>=n)throw new TypeError("reduce of empty array with no initial value")}for(;n>i;i++)i in e&&(o=t.call(void 0,o,e[i],i,r));return o}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){var r=R(this),e=m&&"[object String]"==h(this)?this.split(""):r,n=e.length>>>0;if("[object Function]"!=h(t))throw new TypeError(t+" is not a function");if(!n&&1==arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var o,i=n-1;if(arguments.length>=2)o=arguments[1];else for(;;){if(i in e){o=e[i--];break}if(--i<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>i)return o;do i in this&&(o=t.call(void 0,o,e[i],i,r));while(i--);return o}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(t){var e=m&&"[object String]"==h(this)?this.split(""):R(this),n=e.length>>>0;if(!n)return-1;var o=0;for(arguments.length>1&&(o=r(arguments[1])),o=o>=0?o:Math.max(0,n+o);n>o;o++)if(o in e&&e[o]===t)return o;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(t){var e=m&&"[object String]"==h(this)?this.split(""):R(this),n=e.length>>>0;if(!n)return-1;var o=n-1;for(arguments.length>1&&(o=Math.min(o,r(arguments[1]))),o=o>=0?o:n-Math.abs(o);o>=0;o--)if(o in e&&t===e[o])return o;return-1}),!Object.keys){var S=!0,x=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],j=x.length;for(var A in{toString:null})S=!1;Object.keys=function C(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on a non-object");var C=[];for(var r in t)y(t,r)&&C.push(r);if(S)for(var e=0,n=j;n>e;e++){var o=x[e];y(t,o)&&C.push(o)}return C}}var O=-621987552e5,E="-000001";Date.prototype.toISOString&&-1!==new Date(O).toISOString().indexOf(E)||(Date.prototype.toISOString=function(){var t,r,e,n,o;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(n=this.getUTCFullYear(),o=this.getUTCMonth(),n+=Math.floor(o/12),o=(o%12+12)%12,t=[o+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],n=(0>n?"-":n>9999?"+":"")+("00000"+Math.abs(n)).slice(n>=0&&9999>=n?-4:-6),r=t.length;r--;)e=t[r],10>e&&(t[r]="0"+e);return n+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"});var T=!1;try{T=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(O).toJSON().indexOf(E)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(F){}T||(Date.prototype.toJSON=function(){var t,r=Object(this),e=n(r);if("number"==typeof e&&!isFinite(e))return null;if(t=r.toISOString,"function"!=typeof t)throw new TypeError("toISOString property is not callable");return t.call(r)}),Date=function(t){function r(e,n,o,i,a,u,p){var l=arguments.length;if(this instanceof t){var s=1==l&&String(e)===e?new t(r.parse(e)):l>=7?new t(e,n,o,i,a,u,p):l>=6?new t(e,n,o,i,a,u):l>=5?new t(e,n,o,i,a):l>=4?new t(e,n,o,i):l>=3?new t(e,n,o):l>=2?new t(e,n):l>=1?new t(e):new t;return s.constructor=r,s}return t.apply(this,arguments)}function e(t,r){var e=r>1?1:0;return i[r]+Math.floor((t-1969+e)/4)-Math.floor((t-1901+e)/100)+Math.floor((t-1601+e)/400)+365*(t-1970)}function n(r){return Number(new t(1970,0,1,0,0,0,r))}var o=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),i=[0,31,59,90,120,151,181,212,243,273,304,334,365];for(var a in t)r[a]=t[a];return r.now=t.now,r.UTC=t.UTC,r.prototype=t.prototype,r.prototype.constructor=r,r.parse=function(r){var i=o.exec(r);if(i){var a,u=Number(i[1]),p=Number(i[2]||1)-1,l=Number(i[3]||1)-1,s=Number(i[4]||0),c=Number(i[5]||0),f=Number(i[6]||0),h=Math.floor(1e3*Number(i[7]||0)),y=Boolean(i[4]&&!i[8]),g="-"===i[9]?1:-1,v=Number(i[10]||0),d=Number(i[11]||0);return(c>0||f>0||h>0?24:25)>s&&60>c&&60>f&&1e3>h&&p>-1&&12>p&&24>v&&60>d&&l>-1&&l<e(u,p+1)-e(u,p)&&(a=60*(24*(e(u,p)+l)+s+v*g),a=1e3*(60*(a+c+d*g)+f)+h,y&&(a=n(a)),a>=-864e13&&864e13>=a)?a:0/0}return t.parse.apply(this,arguments)},r}(Date),Date.now||(Date.now=function(){return(new Date).getTime()}),Number.prototype.toFixed&&"0.000"===8e-5.toFixed(3)&&"0"!==.9.toFixed(0)&&"1.25"===1.255.toFixed(2)&&"1000000000000000128"===0xde0b6b3a7640080.toFixed(0)||!function(){function t(t,r){for(var e=-1;++e<a;)r+=t*u[e],u[e]=r%i,r=Math.floor(r/i)}function r(t){for(var r=a,e=0;--r>=0;)e+=u[r],u[r]=Math.floor(e/t),e=e%t*i}function e(){for(var t=a,r="";--t>=0;)if(""!==r||0===t||0!==u[t]){var e=String(u[t]);""===r?r=e:r+="0000000".slice(0,7-e.length)+e}return r}function n(t,r,e){return 0===r?e:r%2===1?n(t,r-1,e*t):n(t*t,r/2,e)}function o(t){for(var r=0;t>=4096;)r+=12,t/=4096;for(;t>=2;)r+=1,t/=2;return r}var i,a,u;i=1e7,a=6,u=[0,0,0,0,0,0],Number.prototype.toFixed=function(i){var a,u,p,l,s,c,f,h;if(a=Number(i),a=a!==a?0:Math.floor(a),0>a||a>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(u=Number(this),u!==u)return"NaN";if(-1e21>=u||u>=1e21)return String(u);if(p="",0>u&&(p="-",u=-u),l="0",u>1e-21)if(s=o(u*n(2,69,1))-69,c=0>s?u*n(2,-s,1):u/n(2,s,1),c*=4503599627370496,s=52-s,s>0){for(t(0,c),f=a;f>=7;)t(1e7,0),f-=7;for(t(n(10,f,1),0),f=s-1;f>=23;)r(1<<23),f-=23;r(1<<f),t(1,1),r(2),l=e()}else t(0,c),t(1<<-s,0),l=e()+"0.00000000000000000000".slice(2,2+a);return a>0?(h=l.length,l=a>=h?p+"0.0000000000000000000".slice(0,a-h+2)+l:p+l.slice(0,h-a)+"."+l.slice(h-a)):l=p+l,l}}();var N=String.prototype.split;if(2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var t=void 0===/()??/.exec("")[1];String.prototype.split=function(r,e){var n=this;if(void 0===r&&0===e)return[];if("[object RegExp]"!==Object.prototype.toString.call(r))return N.apply(this,arguments);var o,i,a,u,p=[],l=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.extended?"x":"")+(r.sticky?"y":""),s=0,r=new RegExp(r.source,l+"g");for(n+="",t||(o=new RegExp("^"+r.source+"$(?!\\s)",l)),e=void 0===e?-1>>>0:e>>>0;(i=r.exec(n))&&(a=i.index+i[0].length,!(a>s&&(p.push(n.slice(s,i.index)),!t&&i.length>1&&i[0].replace(o,function(){for(var t=1;t<arguments.length-2;t++)void 0===arguments[t]&&(i[t]=void 0)}),i.length>1&&i.index<n.length&&Array.prototype.push.apply(p,i.slice(1)),u=i[0].length,s=a,p.length>=e)));)r.lastIndex===i.index&&r.lastIndex++;return s===n.length?(u||!r.test(""))&&p.push(""):p.push(n.slice(s)),p.length>e?p.slice(0,e):p}}():"0".split(void 0,0).length&&(String.prototype.split=function(t,r){return void 0===t&&0===r?[]:N.apply(this,arguments)}),"".substr&&"b"!=="0b".substr(-1)){var _=String.prototype.substr;String.prototype.substr=function(t,r){return _.call(this,0>t&&(t=this.length+t)<0?0:t,r)}}var M="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||M.trim()){M="["+M+"]";var I=new RegExp("^"+M+M+"*"),D=new RegExp(M+M+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(I,"").replace(D,"")}}var R=function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return Object(t)}});