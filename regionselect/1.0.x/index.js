/*!
 * JRaiser 2 Javascript Library
 * regionselect - v1.0.0 (2015-04-24T09:40:11+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("regionselect/1.0.x/",["dom/1.0.x/","base/1.1.x/","ajax/1.1.x/","widget/1.0.x/","tmpl/2.0.x/","uadetector/1.0.x/","draggable/1.0.x/","scrollbar/1.0.x/","selectmenu/1.0.x/"],function(e,n,t){"use strict";var c=e("base/1.0.x/"),r=(e("dom/1.0.x/"),e("ajax/1.1.x/")),i=e("widget/1.0.x/"),o=e("selectmenu/1.0.x/"),u=function(){var n,t=0,c=[];return function(i){2>t?(c.push(i),t||(r.jsonp(e.resolve("regionselect/data/1.x/provinces-and-cities").replace("-debug.js",".js"),{nocache:!1,callbackName:"jsonp_region_provincesAndCities",onsuccess:function(e){n=e,c.forEach(function(n){n.call(window,e)}),c=null,t=2}}),t=1)):i.call(window,n)}}(),l=function(){var n={},t={},c={};return function(i,o){var u=n[i]||0;if(2>u){var l=c[i]=c[i]||[];l.push(o),u||(r.jsonp(e.resolve("regionselect/data/1.x/counties-of-"+i).replace("-debug.js",".js"),{nocache:!1,callbackName:"jsonp_region_countiesOf"+i,onsuccess:function(e){t[i]=e,l.forEach(function(n){n.call(window,e)}),delete c[i],n[i]=2}}),n[i]=1)}else o.call(window,t[i])}}();return i.create(function(){},{_init:function(e){var n=this;n._specifiedValue={},e.value&&n.val(e.value),u(function(t){n._provinceSelect=new o(c.extend(e.province,{optionItems:t.map(function(n){return{text:n.name,value:n[e.valueType]}}),value:n._specifiedValue.province,events:{change:function(e){delete n._currentProvince,delete n._currentCity,delete n._currentCounty;for(var c=0;c<t.length;c++)if(t[c].code==e.newValue||t[c].name==e.newValue){n._currentProvince=t[c];break}n._options.city&&n._renderCities(n._currentProvince&&n._currentProvince.cities?n._currentProvince.cities:null),n._triggerChange()}}})),delete n._specifiedValue.province})},_destroy:function(){var e=this;e._provinceSelect&&e._provinceSelect.destroy(),e._citySelect&&e._citySelect.destroy(),e._countySelect&&e._countySelect.destroy(),delete e._currentProvince,delete e._currentCity,delete e._specifiedValue},_triggerChange:function(){var e=function(e){var n;return e&&(n={name:e.name,code:e.code},e.end&&(n.end=e.end)),n};this.trigger("change",{currentProvince:e(this._currentProvince),currentCity:e(this._currentCity),currentCounty:e(this._currentCounty)})},_renderCities:function(e){var n=this;n._citySelect&&n._citySelect.destroy(),e&&(n._citySelect=new o(c.extend(n._options.city,{optionItems:e.map(function(e){return{text:e.name,value:e[n._options.valueType]}}),value:n._specifiedValue.city,events:{change:function(e){delete n._currentCity,delete n._currentCounty;for(var t=n._currentProvince.cities,c=0;c<t.length;c++)if(t[c].code==e.newValue||t[c].name==e.newValue){n._currentCity=t[c];break}n._options.county&&(!n._currentCity||n._currentCity.end?n._renderCounties():n._renderCounties(n._currentProvince.code,n._currentCity.code)),n._triggerChange()}}})),delete n._specifiedValue.city),n._countySelect&&n._countySelect.destroy()},_renderCounties:function(e,n){var t=this;t._countySelect&&t._countySelect.destroy(),e&&n&&l(e,function(e){if(t._currentCity&&t._currentCity.code==n){var r=e[n];t._countySelect=new o(c.extend(t._options.county,{optionItems:r.map(function(e){return{text:e.name,value:e[t._options.valueType]}}),value:t._specifiedValue.county,events:{change:function(e){delete t._currentCounty;for(var n=0;n<r.length;n++)if(r[n].code==e.newValue||r[n].name==e.newValue){t._currentCounty=r[n];break}t._triggerChange()}}})),delete t._specifiedValue.county}})},val:function(e){var n=this;return arguments.length?(e.hasOwnProperty("city")&&(n._specifiedValue.city=e.city),e.hasOwnProperty("county")&&(n._specifiedValue.county=e.county),e.hasOwnProperty("province")&&(n._provinceSelect?n._provinceSelect.val(e.province):n._specifiedValue.province=e.province),void 0):{province:n._provinceSelect?n._provinceSelect.val():null,city:n._citySelect?n._citySelect.val():null,county:n._countySelect?n._countySelect.val():null}}},{valueType:"code"})});