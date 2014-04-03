/*!
 * jRaiser 2 Javascript Library
 * fixedlayer - v1.0.0 (2013-03-16T19:41:36+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("fixedlayer/1.0.x/",["underscore/1.4.x/","widget/1.0.x/","dom/1.0.x/",null],function(t){"use strict";var o=t("base/1.0.x/"),e=t("underscore/1.4.x/"),i=t("widget/1.0.x/"),n=t("dom/1.0.x/"),s=n(window),r=!(/MSIE\s(\d+)/.test(window.navigator.userAgent)&&parseInt(RegExp.$1,10)<7),c=i.create(function(t){var e=o.extend({},t.position),i=t.wrapper.get(0);["top","bottom","left","right"].forEach(function(t){if(!e[t]){var o=i.style[t];o&&(e[t]=parseFloat(o))}}),t.position=e},{_init:function(t){var i=this,n=t.wrapper,c=/^center$/i;if(i._originalPosition=n.css("position"),r&&t.useFixed){n.css("position","fixed");var a;o.each(t.position,function(t,o){c.test(t)?a=!0:n.css(o,t)}),a&&(i.computePosition=i.computePosition||function(){var o=t.position,e=document.documentElement,i={};return(c.test(o.top)||c.test(o.bottom))&&(i.top=(e.clientHeight-n.outerHeight(!0))/2),(c.test(o.left)||c.test(o.right))&&(i.left=(e.clientWidth-n.outerWidth(!0))/2),i})}else{n.css("position","absolute");var l=n.offsetParent(),p=l.offset();"BODY"===l.prop("tagName")&&(p.top-=parseFloat(l.css("marginTop")),p.left-=parseFloat(l.css("marginLeft"))),i.computePosition=i.computePosition||function(){var o=document.documentElement,e=document.body,i=t.position,s=o.scrollTop||e.scrollTop||0,r=o.scrollLeft||e.scrollLeft||0;c.test(i.top)||c.test(i.bottom)?s+=(o.clientHeight-n.outerHeight(!0))/2:null!=i.top?s+=i.top:null!=i.bottom&&(s+=o.clientHeight-i.bottom-n.outerHeight(!0)),c.test(i.left)||c.test(i.right)?r+=(o.clientWidth-n.outerWidth(!0))/2:null!=i.left?r+=i.left:null!=i.right&&(r+=o.clientWidth-i.right-n.outerWidth(!0));var a={top:s-p.top,left:r-p.left},l=n.css("right");return l&&"auto"!==l&&n.css({left:a.left,right:"auto"}),l=n.css("bottom"),l&&"auto"!==l&&n.css({top:a.top,bottom:"auto"}),a}}if(i.computePosition){switch(t.effect){case"move":i.moveToPosition=e.throttle(function(){n.animate(i.computePosition(),{duration:t.duration,callback:function(){i._inited||delete i.computePosition}})},t.redrawDelay);break;case"none":i.moveToPosition=function(){n.css(i.computePosition())};break;default:throw new Error("effect("+t.effect+") is invalid")}i.moveToPosition(),r&&t.useFixed||s.on("scroll",i.moveToPosition),s.on("resize",i.moveToPosition)}},_destroy:function(t){var o=this;t.wrapper.css("position",o._originalPosition),delete o._originalPosition,o.moveToPosition&&(s.off("scroll",o.moveToPosition),s.off("resize",o.moveToPosition),"none"===t.effect&&delete o.computePosition,delete o.moveToPosition)},reposition:function(){var t=this,o=t._options.wrapper,e={};["Top","Left"].forEach(function(i){var n=o.css(i.toLowerCase());n&&(e[i.toLowerCase()]=parseFloat(n)-(r&&t._options.useFixed?0:s["scroll"+i]()))}),t.options({position:e})}},{effect:"move",redrawDelay:80,useFixed:!0});return c.nativeSupport=r,c});