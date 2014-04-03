/*!
 * jRaiser 2 Javascript Library
 * popuplayer - v1.0.0 (2013-03-28T15:43:03+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("popuplayer/1.0.x/",["base/1.0.x/","widget/1.0.x/","dom/1.0.x/dom-event-arg",null],function(e){"use strict";var i=e("base/1.0.x/"),o=e("widget/1.0.x/");return o.create(function(e){var i=this,o=i._wrapper=e.wrapper;i._popupTrigger=o.find(".popup-trigger"),i._popupContent=o.find(".popup-content"),i._popupTrigger.length||(i._popupTrigger=o),i._popupContent.length||(i._popupContent=o)},{_init:function(e){var o=this;o.popup=function(){o._cancelCloseTimer(),o._visible!==!0&&o._doAction(!0)},o.close=function(){o._cancelCloseTimer();var i=function(){o._visible!==!1&&o._doAction(!1)};e.closeDelay?o._closeTimer=setTimeout(i,e.closeDelay):i()},o.toggle=function(){o._visible===!0?o.close():o.popup()},o._popupTrigger&&e.popupWhen&&(e.popupWhen===e.closeWhen?o._popupTrigger.on(e.popupWhen,o.toggle):o._popupTrigger.on(e.popupWhen,o.popup).on(e.closeWhen,o.close)),o._popupStyle=i.extend({},e.popupStyle),o._closedStyle=i.extend({},e.closedStyle),e.visible?o.popup():o.close()},_destroy:function(e){var i=this;i._popupTrigger&&i._popupTrigger.off(e.popupWhen,i.toggle).off(e.popupWhen,i.popup).off(e.closeWhen,i.close),delete i.toggle,delete i.popup,delete i.close,delete i._popupStyle,delete i._closedStyle,delete i._visible,i._cancelCloseTimer()},_cancelCloseTimer:function(){this._closeTimer&&(clearTimeout(this._closeTimer),delete this._closeTimer)},_computeStyle:function(e){var i=this,o=i._popupContent,t=i["_"+e],p=i._options[e];if("none"!==o.css("display")&&"hidden"===o.css("visibility")){var n,l=o.get(0);(""===p.width||""===p.height)&&(n={width:l.style.width,height:l.style.height,visibility:"hidden"},o.css({width:p.width,height:p.height,visibility:"visible"}),["width","height"].forEach(function(e){""===i._popupStyle[e]&&(t[e]=o[e]())}),o.css(n))}},_doAction:function(e){if(e!==this._visible){var o=this,t=o.trigger(e?"beforepopup":"beforeclose");if(!t.isDefaultPrevented()){var p=o._options.animation,n=e?"popupStyle":"closedStyle",l=o["_"+n];o._computeStyle(n),p?o._popupContent.animate(l,i.mix({callback:o._actionDone.bind(o,e)},p,{overwrite:!1})):(o._popupContent.css(l),o._actionDone(e))}}},_actionDone:function(e){this._visible=e,this.trigger(e?"aftershow":"afterclose")}},{wrapper:null,visible:!1,popupWhen:"mouseenter",closeWhen:"mouseleave",popupStyle:{width:"",height:"",visibility:"visible"},closedStyle:{width:0,height:0,visibility:"hidden"},animation:null,closeDelay:50})});