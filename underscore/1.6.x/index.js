/*!
 * jRaiser 2 Javascript Library
 * underscore - v1.6.0 (2014-02-28T16:28:09+0800)
 * http://jraiser.org/ | Released under MIT license
 *
 * Include underscore.js (http://underscorejs.org/)
 */
define("underscore/1.6.x/",null,function(n,t,r){var e=this,u=e._,i={},a=Array.prototype,o=Object.prototype,c=Function.prototype,l=a.push,f=a.slice,s=a.concat,p=o.toString,h=o.hasOwnProperty,v=a.forEach,g=a.map,y=a.reduce,m=a.reduceRight,d=a.filter,b=a.every,w=a.some,_=a.indexOf,x=a.lastIndexOf,j=Array.isArray,A=Object.keys,O=c.bind,k=function(n){return n instanceof k?n:this instanceof k?void(this._wrapped=n):new k(n)};"undefined"!=typeof t?("undefined"!=typeof r&&r.exports&&(t=r.exports=k),t._=k):e._=k,k.VERSION="1.6.0";var E=k.each=k.forEach=function(n,t,r){if(null==n)return n;if(v&&n.forEach===v)n.forEach(t,r);else if(n.length===+n.length){for(var e=0,u=n.length;u>e;e++)if(t.call(r,n[e],e,n)===i)return}else for(var a=k.keys(n),e=0,u=a.length;u>e;e++)if(t.call(r,n[a[e]],a[e],n)===i)return;return n};k.map=k.collect=function(n,t,r){var e=[];return null==n?e:g&&n.map===g?n.map(t,r):(E(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var F="Reduce of empty array with no initial value";k.reduce=k.foldl=k.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),y&&n.reduce===y)return e&&(t=k.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(E(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(F);return r},k.reduceRight=k.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),m&&n.reduceRight===m)return e&&(t=k.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=k.keys(n);i=a.length}if(E(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(F);return r},k.find=k.detect=function(n,t,r){var e;return M(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},k.filter=k.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(E(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},k.reject=function(n,t,r){return k.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},k.every=k.all=function(n,t,r){t||(t=k.identity);var e=!0;return null==n?e:b&&n.every===b?n.every(t,r):(E(n,function(n,u,a){return(e=e&&t.call(r,n,u,a))?void 0:i}),!!e)};var M=k.some=k.any=function(n,t,r){t||(t=k.identity);var e=!1;return null==n?e:w&&n.some===w?n.some(t,r):(E(n,function(n,u,a){return e||(e=t.call(r,n,u,a))?i:void 0}),!!e)};k.contains=k.include=function(n,t){return null==n?!1:_&&n.indexOf===_?-1!=n.indexOf(t):M(n,function(n){return n===t})},k.invoke=function(n,t){var r=f.call(arguments,2),e=k.isFunction(t);return k.map(n,function(n){return(e?t:n[t]).apply(n,r)})},k.pluck=function(n,t){return k.map(n,k.property(t))},k.where=function(n,t){return k.filter(n,k.matches(t))},k.findWhere=function(n,t){return k.find(n,k.matches(t))},k.max=function(n,t,r){if(!t&&k.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);var e=-1/0,u=-1/0;return E(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;o>u&&(e=n,u=o)}),e},k.min=function(n,t,r){if(!t&&k.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);var e=1/0,u=1/0;return E(n,function(n,i,a){var o=t?t.call(r,n,i,a):n;u>o&&(e=n,u=o)}),e},k.shuffle=function(n){var t,r=0,e=[];return E(n,function(n){t=k.random(r++),e[r-1]=e[t],e[t]=n}),e},k.sample=function(n,t,r){return null==t||r?(n.length!==+n.length&&(n=k.values(n)),n[k.random(n.length-1)]):k.shuffle(n).slice(0,Math.max(0,t))};var R=function(n){return null==n?k.identity:k.isFunction(n)?n:k.property(n)};k.sortBy=function(n,t,r){return t=R(t),k.pluck(k.map(n,function(n,e,u){return{value:n,index:e,criteria:t.call(r,n,e,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||void 0===r)return 1;if(e>r||void 0===e)return-1}return n.index-t.index}),"value")};var S=function(n){return function(t,r,e){var u={};return r=R(r),E(t,function(i,a){var o=r.call(e,i,a,t);n(u,o,i)}),u}};k.groupBy=S(function(n,t,r){k.has(n,t)?n[t].push(r):n[t]=[r]}),k.indexBy=S(function(n,t,r){n[t]=r}),k.countBy=S(function(n,t){k.has(n,t)?n[t]++:n[t]=1}),k.sortedIndex=function(n,t,r,e){r=R(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},k.toArray=function(n){return n?k.isArray(n)?f.call(n):n.length===+n.length?k.map(n,k.identity):k.values(n):[]},k.size=function(n){return null==n?0:n.length===+n.length?n.length:k.keys(n).length},k.first=k.head=k.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:0>t?[]:f.call(n,0,t)},k.initial=function(n,t,r){return f.call(n,0,n.length-(null==t||r?1:t))},k.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:f.call(n,Math.max(n.length-t,0))},k.rest=k.tail=k.drop=function(n,t,r){return f.call(n,null==t||r?1:t)},k.compact=function(n){return k.filter(n,k.identity)};var T=function(n,t,r){return t&&k.every(n,k.isArray)?s.apply(r,n):(E(n,function(n){k.isArray(n)||k.isArguments(n)?t?l.apply(r,n):T(n,t,r):r.push(n)}),r)};k.flatten=function(n,t){return T(n,t,[])},k.without=function(n){return k.difference(n,f.call(arguments,1))},k.partition=function(n,t,r){t=R(t);var e=[],u=[];return E(n,function(n){(t.call(r,n)?e:u).push(n)}),[e,u]},k.uniq=k.unique=function(n,t,r,e){k.isFunction(t)&&(e=r,r=t,t=!1);var u=r?k.map(n,r,e):n,i=[],a=[];return E(u,function(r,e){(t?e&&a[a.length-1]===r:k.contains(a,r))||(a.push(r),i.push(n[e]))}),i},k.union=function(){return k.uniq(k.flatten(arguments,!0))},k.intersection=function(n){var t=f.call(arguments,1);return k.filter(k.uniq(n),function(n){return k.every(t,function(t){return k.contains(t,n)})})},k.difference=function(n){var t=s.apply(a,f.call(arguments,1));return k.filter(n,function(n){return!k.contains(t,n)})},k.zip=function(){for(var n=k.max(k.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=k.pluck(arguments,""+r);return t},k.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},k.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=k.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(_&&n.indexOf===_)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},k.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(x&&n.lastIndexOf===x)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},k.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var I=function(){};k.bind=function(n,t){var r,e;if(O&&n.bind===O)return O.apply(n,f.call(arguments,1));if(!k.isFunction(n))throw new TypeError;return r=f.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(f.call(arguments)));I.prototype=n.prototype;var u=new I;I.prototype=null;var i=n.apply(u,r.concat(f.call(arguments)));return Object(i)===i?i:u}},k.partial=function(n){var t=f.call(arguments,1);return function(){for(var r=0,e=t.slice(),u=0,i=e.length;i>u;u++)e[u]===k&&(e[u]=arguments[r++]);for(;r<arguments.length;)e.push(arguments[r++]);return n.apply(this,e)}},k.bindAll=function(n){var t=f.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return E(t,function(t){n[t]=k.bind(n[t],n)}),n},k.memoize=function(n,t){var r={};return t||(t=k.identity),function(){var e=t.apply(this,arguments);return k.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},k.delay=function(n,t){var r=f.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},k.defer=function(n){return k.delay.apply(k,[n,1].concat(f.call(arguments,1)))},k.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:k.now(),a=null,i=n.apply(e,u),e=u=null};return function(){var l=k.now();o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u),e=u=null):a||r.trailing===!1||(a=setTimeout(c,f)),i}},k.debounce=function(n,t,r){var e,u,i,a,o,c=function(){var l=k.now()-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u),i=u=null))};return function(){i=this,u=arguments,a=k.now();var l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u),i=u=null),o}},k.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},k.wrap=function(n,t){return k.partial(t,n)},k.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},k.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},k.keys=function(n){if(!k.isObject(n))return[];if(A)return A(n);var t=[];for(var r in n)k.has(n,r)&&t.push(r);return t},k.values=function(n){for(var t=k.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},k.pairs=function(n){for(var t=k.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},k.invert=function(n){for(var t={},r=k.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},k.functions=k.methods=function(n){var t=[];for(var r in n)k.isFunction(n[r])&&t.push(r);return t.sort()},k.extend=function(n){return E(f.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},k.pick=function(n){var t={},r=s.apply(a,f.call(arguments,1));return E(r,function(r){r in n&&(t[r]=n[r])}),t},k.omit=function(n){var t={},r=s.apply(a,f.call(arguments,1));for(var e in n)k.contains(r,e)||(t[e]=n[e]);return t},k.defaults=function(n){return E(f.call(arguments,1),function(t){if(t)for(var r in t)void 0===n[r]&&(n[r]=t[r])}),n},k.clone=function(n){return k.isObject(n)?k.isArray(n)?n.slice():k.extend({},n):n},k.tap=function(n,t){return t(n),n};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof k&&(n=n._wrapped),t instanceof k&&(t=t._wrapped);var u=p.call(n);if(u!=p.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(k.isFunction(a)&&a instanceof a&&k.isFunction(o)&&o instanceof o)&&"constructor"in n&&"constructor"in t)return!1;r.push(n),e.push(t);var c=0,l=!0;if("[object Array]"==u){if(c=n.length,l=c==t.length)for(;c--&&(l=N(n[c],t[c],r,e)););}else{for(var f in n)if(k.has(n,f)&&(c++,!(l=k.has(t,f)&&N(n[f],t[f],r,e))))break;if(l){for(f in t)if(k.has(t,f)&&!c--)break;l=!c}}return r.pop(),e.pop(),l};k.isEqual=function(n,t){return N(n,t,[],[])},k.isEmpty=function(n){if(null==n)return!0;if(k.isArray(n)||k.isString(n))return 0===n.length;for(var t in n)if(k.has(n,t))return!1;return!0},k.isElement=function(n){return!(!n||1!==n.nodeType)},k.isArray=j||function(n){return"[object Array]"==p.call(n)},k.isObject=function(n){return n===Object(n)},E(["Arguments","Function","String","Number","Date","RegExp"],function(n){k["is"+n]=function(t){return p.call(t)=="[object "+n+"]"}}),k.isArguments(arguments)||(k.isArguments=function(n){return!(!n||!k.has(n,"callee"))}),"function"!=typeof/./&&(k.isFunction=function(n){return"function"==typeof n}),k.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},k.isNaN=function(n){return k.isNumber(n)&&n!=+n},k.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==p.call(n)},k.isNull=function(n){return null===n},k.isUndefined=function(n){return void 0===n},k.has=function(n,t){return h.call(n,t)},k.noConflict=function(){return e._=u,this},k.identity=function(n){return n},k.constant=function(n){return function(){return n}},k.property=function(n){return function(t){return t[n]}},k.matches=function(n){return function(t){if(t===n)return!0;for(var r in n)if(n[r]!==t[r])return!1;return!0}},k.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},k.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},k.now=Date.now||function(){return(new Date).getTime()};var q={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};q.unescape=k.invert(q.escape);var B={escape:new RegExp("["+k.keys(q.escape).join("")+"]","g"),unescape:new RegExp("("+k.keys(q.unescape).join("|")+")","g")};k.each(["escape","unescape"],function(n){k[n]=function(t){return null==t?"":(""+t).replace(B[n],function(t){return q[n][t]})}}),k.result=function(n,t){if(null==n)return void 0;var r=n[t];return k.isFunction(r)?r.call(n):r},k.mixin=function(n){E(k.functions(n),function(t){var r=k[t]=n[t];k.prototype[t]=function(){var n=[this._wrapped];return l.apply(n,arguments),U.call(this,r.apply(k,n))}})};var D=0;k.uniqueId=function(n){var t=++D+"";return n?n+t:t},k.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var z=/(.)^/,C={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},P=/\\|'|\r|\n|\t|\u2028|\u2029/g;k.template=function(n,t,r){var e;r=k.defaults({},r,k.templateSettings);var u=new RegExp([(r.escape||z).source,(r.interpolate||z).source,(r.evaluate||z).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(P,function(n){return"\\"+C[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,k);var c=function(n){return e.call(this,n,k)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},k.chain=function(n){return k(n).chain()};var U=function(n){return this._chain?k(n).chain():n};return k.mixin(k),E(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=a[n];k.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],U.call(this,r)}}),E(["concat","join","slice"],function(n){var t=a[n];k.prototype[n]=function(){return U.call(this,t.apply(this._wrapped,arguments))}}),k.extend(k.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),k});