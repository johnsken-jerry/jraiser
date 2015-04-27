/*!
 * JRaiser 2 Javascript Library
 * micro-templating - v2.1.2 (2015-04-27T15:27:22+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("tmpl/2.1.x/",["base/1.1.x/"],function(e,t,n){"use strict";function r(e){return String(e).replace(l,function(e){return u[e]})}function i(e){if(!e)return p["default"];var t=e.join("|");if(!p[t]){var n={delimiter_begin:e[0],delimiter_end:e[1]};n.re_evaluate=new RegExp("((^|"+e[1]+")[^\\t]*)'","g"),n.re_value=new RegExp("\\t-(.*?)"+e[1],"g"),n.re_escaped_value=new RegExp("\\t=(.*?)"+e[1],"g"),p[t]=n}return p[t]}function a(e,t){return"var __result__='';__result__+='"+e.replace(/[\r\t\n]/g," ").split(t.delimiter_begin).join("	").replace(t.re_evaluate,"$1\r").replace(t.re_value,"'+$1+'").replace(t.re_escaped_value,"'+__escape__($1)+'").split("	").join("';").split(t.delimiter_end).join("__result__+='").split("\r").join("\\'")+"';return __result__"}var s=e("base/1.1.x/"),l=[],u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"};for(var _ in u)l.push(_);var l=new RegExp("["+l.join("")+"]","g"),p={};p["default"]=i(["<%","%>"]);var o,c=s.createClass(function(e,t){this._templates={},this._settings=i(t?t.delimiters:null),this.add(e)},{add:function(e,t){switch(typeof e){case"string":this._templates[e]=t;break;case"object":s.extend(this._templates,e)}},has:function(e){return this._templates.hasOwnProperty(e)},render:function(e,t,n){var i=this._templates[e];if(null==i)throw new Error('template "'+e+'" does not exist');s.isObject(i)||(i=this._templates[e]={fnBody:a(i,this._settings),fnCache:{}});var l=[],u=[];if(null!=t)for(var _ in t)t.hasOwnProperty(_)&&(l.push(_),u.push(t[_]));var p=l.toString(),o=i.fnCache[p];return o||(l.push("__escape__"),o=i.fnCache[p]=new Function(l,i.fnBody)),n===!1&&this.clear(e),u.push(r),o.apply(t,u)},clear:function(e){e?delete this._templates[e]:this._templates={}}});return c.render=function(e,t,n){return o=o||new c,o.has(e)||o.add(e,e),o.render(e,t,n)},c.escape=r,c.fromScripts=function(e){!e||"nodeType"in e||"function"!=typeof e.get||(e=e.get(0)),e&&1===e.nodeType||(e=document);for(var t=e.getElementsByTagName("script"),n={},r=0,i=t.length;i>r;r++)"text/template"===t[r].type&&(n[t[r].getAttribute("data-key")||""]=t[r].innerHTML.trim());return n},c});