/*!
 * jRaiser 2 Javascript Library
 * scrollbar - v1.0.0 (2014-01-24T16:01:54+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("scrollbar/1.0.x/",["dom/1.0.x/","widget/1.0.x/","draggable/1.0.x/",null],function(l){var r,o=(l("base/1.0.x/"),l("dom/1.0.x/")),e=l("widget/1.0.x/"),s=l("draggable/1.0.x/"),a='<div class="scrollbar"><div class="scrollbar-track"><div class="scrollbar-thumb"></div></div></div>';r="onmousewheel"in document.body?"mousewheel":"DOMMouseScroll";var c="webkitOverflowScrolling"in document.body.style;return e.create(function(){},{_init:function(l){var e=l.axis;if(!e)throw new Error("please specify the axis of scrollbar");e=e.toLowerCase();var s=this;if(s._axis=e,s._scrollBody=l.scrollBody,c){s._overflowStyle={webkitOverflowScrolling:"touch"};var t;switch(s._axis){case"x":s._overflowStyle.overflowX="scroll",t="scrollLeft";break;case"y":s._overflowStyle.overflowY="scroll",t="scrollTop"}return s._onOverflowScroll=function(){s.trigger("scroll",{scrollBodyPosition:this[t]})},void s._scrollBody.parent().css(s._overflowStyle).on("scroll",s._onOverflowScroll)}switch(s._scrollOuter=l.scrollOuter,s._scrollbar=o(a).click(function(l){if(s._scrollbarEnabled&&!o(l.target).hasClass("scrollbar-thumb")){var r;switch(s._axis){case"x":r=(l.offsetX-s._scrollThumb.width()/2)/s._scrollbar.outerWidth()*s._scrollBody.outerWidth(!0);break;case"y":r=(l.offsetY-s._scrollThumb.height()/2)/s._scrollbar.outerHeight()*s._scrollBody.outerHeight(!0)}s.scrollTo(r)}}),e){case"x":s._scrollbar.addClass("scrollbar-horizontal");break;case"y":s._scrollbar.addClass("scrollbar-vertical")}s._scrollThumb=s._scrollbar.find(".scrollbar-thumb"),s._scrollOuter.append(s._scrollbar),l.mouseWheelStep&&(s.onMouseWheel=function(r){r.preventDefault();var o=r.originalEvent,e=1;o.wheelDelta?o.wheelDelta>0&&(e=-1):o.detail&&o.detail<0&&(e=-1),s.scroll(e*l.mouseWheelStep)},s._scrollOuter.on(r,s.onMouseWheel)),s.refresh()},_destroy:function(){var l=this;delete l._axis,l.onMouseWheel&&(l._scrollOuter.off(r,l.onMouseWheel),delete l.onMouseWheel),delete l._scrollOuter,l._draggable&&(l._draggable.destroy(),delete l._draggable),l._scrollbar&&(l._scrollbar.remove(),delete l._scrollbar);var o=l._scrollBody.parent();if(l._overflowStyle){for(var e in l._overflowStyle)l._overflowStyle[e]="";o.css(l._overflowStyle)}l._onOverflowScroll&&(o.off("scroll",l._onOverflowScroll),delete l._onOverflowScroll),delete l._scrollbarEnabled,delete l._scrollThumbLimit,delete l._scrollBodyLimit,delete l._scrollThumb,delete l._scrollBody},refresh:function(){var l,r,o=this;switch(o._axis){case"x":l=o._scrollBody.outerWidth(!0),r=o._scrollBody.parent().outerWidth();break;case"y":l=o._scrollBody.outerHeight(!0),r=o._scrollBody.parent().outerHeight()}if(o.trigger("beforerefresh",{viewportSize:r,scrollBodySize:l,scrollbar:o._scrollbar}),l>r){var e,a,c=r/l;switch(o._axis){case"x":e=o._scrollbar.outerWidth(),a=Math.max(c*e,o._options.minThumbSize),o._scrollThumb.width(a),o._scrollThumbLimit=e-a;break;case"y":e=o._scrollbar.outerHeight(),a=Math.max(c*e,o._options.minThumbSize),o._scrollThumb.height(a),o._scrollThumbLimit=e-a}o._scrollBodyLimit=l-r,o._draggable=o._draggable||new s({wrapper:o._scrollThumb,boundary:o._scrollbar,events:{drag:function(l){var r;switch(o._axis){case"x":r=l.position.left;break;case"y":r=l.position.top}o.scrollTo(o._scrollBodyLimit*r/o._scrollThumbLimit)}}}),o._scrollbar.removeClass("scrollbar-disabled"),o._scrollbarEnabled=!0,o.scroll(0)}else o._draggable&&(o._draggable.destroy(),delete o._draggable()),o._scrollbar.addClass("scrollbar-disabled"),o._scrollbarEnabled=!1;return o.trigger("afterrefresh",{viewportSize:r,scrollBodySize:l,scrollbar:o._scrollbar,scrollbarEnabled:o._scrollbarEnabled}),o._scrollbarEnabled},scroll:function(l){var r,o=this;switch(o._axis){case"x":r="left";break;case"y":r="top"}o.scrollTo(-(parseFloat(o._scrollBody.css(r))||0)+l)},scrollTo:function(l){var r=this;if(r._scrollbarEnabled){0>l?l=0:l>r._scrollBodyLimit&&(l=r._scrollBodyLimit);var o;switch(r._axis){case"x":o="left";break;case"y":o="top"}r._scrollBody.css(o,-l);var e=l/r._scrollBodyLimit*r._scrollThumbLimit;r._scrollThumb.css(o,e),r.trigger("scroll",{scrollbar:r._scrollbar,scrollBodyPosition:l,scrollThumbPosition:e})}}},{axis:"y",minThumbSize:20,mouseWheelStep:100})});