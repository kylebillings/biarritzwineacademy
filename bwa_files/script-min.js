/* Scrolled From Top
---------------------------------------------------------------------------------------------------- */
/* Social Sharing
---------------------------------------------------------------------------------------------------- */
function PopupCenter(e,o,n,t){var i=null!=window.screenLeft?window.screenLeft:screen.left,c=null!=window.screenTop?window.screenTop:screen.top,l,d,r=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-n/2+i,s=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-t/2+c,w=window.open(e,o,"scrollbars=yes, width="+n+", height="+t+", top="+s+", left="+r);window.focus&&w.focus()}$(window).on("scroll",function(){150<$(this).scrollTop()&&$("body").removeClass("scrolled-top"),$(this).scrollTop()<150&&$("body").addClass("scrolled-top")}),
/* Scrolled to Bottom
---------------------------------------------------------------------------------------------------- */
$(window).on("scroll",function(){$(window).scrollTop()+$(window).height()>$(document).height()-50&&$("body").addClass("scrolled-bottom"),$(window).scrollTop()+$(window).height()<$(document).height()-50&&$("body").removeClass("scrolled-bottom")}),
/* Smooth Scrolling
---------------------------------------------------------------------------------------------------- */
$(document).on("click",".scroll",function(){var e=$(this.getAttribute("href"));return e.length&&$("html, body").stop().animate({scrollTop:e.offset().top-0},1e3),!1}),
/* In View Detection
---------------------------------------------------------------------------------------------------- */
$(document).ready(function(){function e(){var e=n.height(),i=n.scrollTop(),c=i+e;$.each(o,function(){var e=$(this),o=e.outerHeight(),n=e.offset().top,t;
//check to see if this current container is within viewport
i<=n+o&&n<=c?e.addClass("in-view in-view-viewed"):e.removeClass("in-view")})}var o=$(".in-view-detect"),n=$(window);n.on("scroll resize",e),n.trigger("scroll")}),$(document).on("click",".social-share",function(){var e;return PopupCenter($(this).attr("href"),"xtf","600","440"),!1});