/*!
 * jRaiser 2 Javascript Library
 * es5-shim - v2.1.0 (2014-03-25T15:33:29+0800)
 * http://jraiser.org/ | Released under MIT license
 *
 * Include es5-shim (https://github.com/kriskowal/es5-shim)
 */
define("es5-shim/2.1.x/",null,function(){function t(){}function r(t){return t=+t,t!==t?t=0:0!==t&&t!==1/0&&t!==-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t))),t}function e(t){var r=typeof t;return null===t||"undefined"===r||"boolean"===r||"number"===r||"string"===r}function n(t){var r,n,i;if(e(t))return t;if(n=t.valueOf,"function"==typeof n&&(r=n.call(t),e(r)))return r;if(i=t.toString,"function"==typeof i&&(r=i.call(t),e(r)))return r;throw new TypeError}Function.prototype.bind||(Function.prototype.bind=function(r){var e=this;if("function"!=typeof e)throw new TypeError("Function.prototype.bind called on incompatible "+e);var n=f.call(arguments,1),i=function(){if(this instanceof i){var t=e.apply(this,n.concat(f.call(arguments)));return Object(t)===t?t:this}return e.apply(r,n.concat(f.call(arguments)))};return e.prototype&&(t.prototype=e.prototype,i.prototype=new t,t.prototype=null),i});var i,o,a,u,l,p=Function.prototype.call,s=Array.prototype,c=Object.prototype,f=s.slice,h=p.bind(c.toString),y=p.bind(c.hasOwnProperty);if((l=y(c,"__defineGetter__"))&&(i=p.bind(c.__defineGetter__),o=p.bind(c.__defineSetter__),a=p.bind(c.__lookupGetter__),u=p.bind(c.__lookupSetter__)),2!=[1,2].splice(0).length){var g=Array.prototype.splice;Array.prototype.splice=function(){function t(t){for(var r=[];t--;)r.unshift(t);return r}var r,e=[];return e.splice.bind(e,0,0).apply(null,t(20)),e.splice.bind(e,0,0).apply(null,t(26)),r=e.length,e.splice(5,0,"XXX"),r+1==e.length?!0:void 0}()?function(t,r){return arguments.length?g.apply(this,[void 0===t?0:t,void 0===r?this.length-t:r].concat(f.call(arguments,2))):[]}:function(t,r){var e,n=f.call(arguments,2),i=n.length;if(!arguments.length)return[];if(void 0===t&&(t=0),void 0===r&&(r=this.length-t),i>0){if(0>=r){if(t==this.length)return this.push.apply(this,n),[];if(0==t)return this.unshift.apply(this,n),[]}return e=f.call(this,t,t+r),n.push.apply(n,f.call(this,t+r,this.length)),n.unshift.apply(n,f.call(this,0,t)),n.unshift(0,this.length),g.apply(this,n),e}return g.call(this,t,r)}}if(1!=[].unshift(0)){var v=Array.prototype.unshift;Array.prototype.unshift=function(){return v.apply(this,arguments),this.length}}Array.isArray||(Array.isArray=function(t){return"[object Array]"==h(t)});var d=Object("a"),b="a"!=d[0]||!(0 in d);if(Array.prototype.forEach||(Array.prototype.forEach=function(t){var r=D(this),e=b&&"[object String]"==h(this)?this.split(""):r,n=arguments[1],i=-1,o=e.length>>>0;if("[object Function]"!=h(t))throw new TypeError;for(;++i<o;)i in e&&t.call(n,e[i],i,r)}),Array.prototype.map||(Array.prototype.map=function(t){var r=D(this),e=b&&"[object String]"==h(this)?this.split(""):r,n=e.length>>>0,i=Array(n),o=arguments[1];if("[object Function]"!=h(t))throw new TypeError(t+" is not a function");for(var a=0;n>a;a++)a in e&&(i[a]=t.call(o,e[a],a,r));return i}),Array.prototype.filter||(Array.prototype.filter=function(t){var r,e=D(this),n=b&&"[object String]"==h(this)?this.split(""):e,i=n.length>>>0,o=[],a=arguments[1];if("[object Function]"!=h(t))throw new TypeError(t+" is not a function");for(var u=0;i>u;u++)u in n&&(r=n[u],t.call(a,r,u,e)&&o.push(r));return o}),Array.prototype.every||(Array.prototype.every=function(t){var r=D(this),e=b&&"[object String]"==h(this)?this.split(""):r,n=e.length>>>0,i=arguments[1];if("[object Function]"!=h(t))throw new TypeError(t+" is not a function");for(var o=0;n>o;o++)if(o in e&&!t.call(i,e[o],o,r))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(t){var r=D(this),e=b&&"[object String]"==h(this)?this.split(""):r,n=e.length>>>0,i=arguments[1];if("[object Function]"!=h(t))throw new TypeError(t+" is not a function");for(var o=0;n>o;o++)if(o in e&&t.call(i,e[o],o,r))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var r=D(this),e=b&&"[object String]"==h(this)?this.split(""):r,n=e.length>>>0;if("[object Function]"!=h(t))throw new TypeError(t+" is not a function");if(!n&&1==arguments.length)throw new TypeError("reduce of empty array with no initial value");var i,o=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in e){i=e[o++];break}if(++o>=n)throw new TypeError("reduce of empty array with no initial value")}for(;n>o;o++)o in e&&(i=t.call(void 0,i,e[o],o,r));return i}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){var r=D(this),e=b&&"[object String]"==h(this)?this.split(""):r,n=e.length>>>0;if("[object Function]"!=h(t))throw new TypeError(t+" is not a function");if(!n&&1==arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var i,o=n-1;if(arguments.length>=2)i=arguments[1];else for(;;){if(o in e){i=e[o--];break}if(--o<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>o)return i;do o in this&&(i=t.call(void 0,i,e[o],o,r));while(o--);return i}),Array.prototype.indexOf&&-1==[0,1].indexOf(1,2)||(Array.prototype.indexOf=function(t){var e=b&&"[object String]"==h(this)?this.split(""):D(this),n=e.length>>>0;if(!n)return-1;var i=0;for(arguments.length>1&&(i=r(arguments[1])),i=i>=0?i:Math.max(0,n+i);n>i;i++)if(i in e&&e[i]===t)return i;return-1}),Array.prototype.lastIndexOf&&-1==[0,1].lastIndexOf(0,-3)||(Array.prototype.lastIndexOf=function(t){var e=b&&"[object String]"==h(this)?this.split(""):D(this),n=e.length>>>0;if(!n)return-1;var i=n-1;for(arguments.length>1&&(i=Math.min(i,r(arguments[1]))),i=i>=0?i:n-Math.abs(i);i>=0;i--)if(i in e&&t===e[i])return i;return-1}),!Object.keys){var w=!0,m=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],S=m.length;for(var x in{toString:null})w=!1;Object.keys=function I(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on a non-object");var I=[];for(var r in t)y(t,r)&&I.push(r);if(w)for(var e=0,n=S;n>e;e++){var i=m[e];y(t,i)&&I.push(i)}return I}}var O=-621987552e5,j="-000001";Date.prototype.toISOString&&-1!==new Date(O).toISOString().indexOf(j)||(Date.prototype.toISOString=function(){var t,r,e,n,i;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(n=this.getUTCFullYear(),i=this.getUTCMonth(),n+=Math.floor(i/12),i=(i%12+12)%12,t=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],n=(0>n?"-":n>9999?"+":"")+("00000"+Math.abs(n)).slice(n>=0&&9999>=n?-4:-6),r=t.length;r--;)e=t[r],10>e&&(t[r]="0"+e);return n+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"});var A=!1;try{A=Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(O).toJSON().indexOf(j)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(T){}A||(Date.prototype.toJSON=function(){var t,r=Object(this),e=n(r);if("number"==typeof e&&!isFinite(e))return null;if(t=r.toISOString,"function"!=typeof t)throw new TypeError("toISOString property is not callable");return t.call(r)}),Date=function(t){function r(e,n,i,o,a,u,l){var p=arguments.length;if(this instanceof t){var s=1==p&&String(e)===e?new t(r.parse(e)):p>=7?new t(e,n,i,o,a,u,l):p>=6?new t(e,n,i,o,a,u):p>=5?new t(e,n,i,o,a):p>=4?new t(e,n,i,o):p>=3?new t(e,n,i):p>=2?new t(e,n):p>=1?new t(e):new t;return s.constructor=r,s}return t.apply(this,arguments)}function e(t,r){var e=r>1?1:0;return i[r]+Math.floor((t-1969+e)/4)-Math.floor((t-1901+e)/100)+Math.floor((t-1601+e)/400)+365*(t-1970)}var n=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),i=[0,31,59,90,120,151,181,212,243,273,304,334,365];for(var o in t)r[o]=t[o];return r.now=t.now,r.UTC=t.UTC,r.prototype=t.prototype,r.prototype.constructor=r,r.parse=function(r){var i=n.exec(r);if(i){var o,a=Number(i[1]),u=Number(i[2]||1)-1,l=Number(i[3]||1)-1,p=Number(i[4]||0),s=Number(i[5]||0),c=Number(i[6]||0),f=Math.floor(1e3*Number(i[7]||0)),h=!i[4]||i[8]?0:Number(new t(1970,0)),y="-"===i[9]?1:-1,g=Number(i[10]||0),v=Number(i[11]||0);return(s>0||c>0||f>0?24:25)>p&&60>s&&60>c&&1e3>f&&u>-1&&12>u&&24>g&&60>v&&l>-1&&l<e(a,u+1)-e(a,u)&&(o=60*(24*(e(a,u)+l)+p+g*y),o=1e3*(60*(o+s+v*y)+c)+f+h,o>=-864e13&&864e13>=o)?o:0/0}return t.parse.apply(this,arguments)},r}(Date),Date.now||(Date.now=function(){return(new Date).getTime()}),Number.prototype.toFixed&&"0.000"===8e-5.toFixed(3)&&"0"!==.9.toFixed(0)&&"1.25"===1.255.toFixed(2)&&"1000000000000000128"===0xde0b6b3a7640080.toFixed(0)||!function(){function t(t,r){for(var e=-1;++e<a;)r+=t*u[e],u[e]=r%o,r=Math.floor(r/o)}function r(t){for(var r=a,e=0;--r>=0;)e+=u[r],u[r]=Math.floor(e/t),e=e%t*o}function e(){for(var t=a,r="";--t>=0;)if(""!==r||0===t||0!==u[t]){var e=String(u[t]);""===r?r=e:r+="0000000".slice(0,7-e.length)+e}return r}function n(t,r,e){return 0===r?e:r%2===1?n(t,r-1,e*t):n(t*t,r/2,e)}function i(t){for(var r=0;t>=4096;)r+=12,t/=4096;for(;t>=2;)r+=1,t/=2;return r}var o,a,u;o=1e7,a=6,u=[0,0,0,0,0,0],Number.prototype.toFixed=function(o){var a,u,l,p,s,c,f,h;if(a=Number(o),a=a!==a?0:Math.floor(a),0>a||a>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(u=Number(this),u!==u)return"NaN";if(-1e21>=u||u>=1e21)return String(u);if(l="",0>u&&(l="-",u=-u),p="0",u>1e-21)if(s=i(u*n(2,69,1))-69,c=0>s?u*n(2,-s,1):u/n(2,s,1),c*=4503599627370496,s=52-s,s>0){for(t(0,c),f=a;f>=7;)t(1e7,0),f-=7;for(t(n(10,f,1),0),f=s-1;f>=23;)r(1<<23),f-=23;r(1<<f),t(1,1),r(2),p=e()}else t(0,c),t(1<<-s,0),p=e()+"0.00000000000000000000".slice(2,2+a);return a>0?(h=p.length,p=a>=h?l+"0.0000000000000000000".slice(0,a-h+2)+p:l+p.slice(0,h-a)+"."+p.slice(h-a)):p=l+p,p}}();var E=String.prototype.split;if(2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||0==="".split(/.?/).length||".".split(/()()/).length>1?!function(){var t=void 0===/()??/.exec("")[1];String.prototype.split=function(r,e){var n=this;if(void 0===r&&0===e)return[];if("[object RegExp]"!==Object.prototype.toString.call(r))return E.apply(this,arguments);var i,o,a,u,l=[],p=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.extended?"x":"")+(r.sticky?"y":""),s=0,r=new RegExp(r.source,p+"g");for(n+="",t||(i=new RegExp("^"+r.source+"$(?!\\s)",p)),e=void 0===e?-1>>>0:e>>>0;(o=r.exec(n))&&(a=o.index+o[0].length,!(a>s&&(l.push(n.slice(s,o.index)),!t&&o.length>1&&o[0].replace(i,function(){for(var t=1;t<arguments.length-2;t++)void 0===arguments[t]&&(o[t]=void 0)}),o.length>1&&o.index<n.length&&Array.prototype.push.apply(l,o.slice(1)),u=o[0].length,s=a,l.length>=e)));)r.lastIndex===o.index&&r.lastIndex++;return s===n.length?(u||!r.test(""))&&l.push(""):l.push(n.slice(s)),l.length>e?l.slice(0,e):l}}():"0".split(void 0,0).length&&(String.prototype.split=function(t,r){return void 0===t&&0===r?[]:E.apply(this,arguments)}),"".substr&&"b"!=="0b".substr(-1)){var N=String.prototype.substr;String.prototype.substr=function(t,r){return N.call(this,0>t&&(t=this.length+t)<0?0:t,r)}}var F="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||F.trim()){F="["+F+"]";var _=new RegExp("^"+F+F+"*"),M=new RegExp(F+F+"*$");String.prototype.trim=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(_,"").replace(M,"")}}var D=function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return Object(t)}});