/* Plugin Name: Parallax
   Plugin Author: Chayon Shaah
   Plugin Verson:1.0
   Description: This is a nice fixed background parallax scroller
   
   Usage : Creat a section and set a background image . Then call the section in parallax() function . As like given below . u   can use a class or id of the section and use that class name or id as selector . That's it.         
           
		   $('selector').parallax('selector')
		   
		   this has only one property for parllax speed . 0 for fixed background and 1 for full speed background (simillar of           content). you can  define any amount between 0 and 1 using deceimel to creat nice parallax effect . by difault it is           0.5 . That means parallax will scroll 50% slower than content , if you use 0.7 then it means parallax will scroll 30%           slower than content. see the           
		   usage ---
		   
		   $('selector').parallax('selector',{speed:0.7})
   
   */  
(function( $ ){
$( document ).ready(function() {
$.fn.parallax = function(selector,options){	
parallaxSettings = $.extend({
// These are the defaults.
speed:0.5
}, options );
	
$( document ).scroll(function(options) {
	
	
var offset = $(selector).offset().top;	
var goTop = -($(document).scrollTop()-offset);
	
$(selector).css({"background-position":'0px '+goTop*parallaxSettings.speed+'px','background-attachment':'fixed'});
});	
return this;	
}
});
}( jQuery ));
