# Chayon-Shaah-Background-Parallax-Scroller-

   Plugin Name: Chayon-Shaah-Background-Parallax-Scroller
   Plugin Author: Chayon Shaah
   Plugin Verson:1.0
   Website : http://chayonshaah.com
   Description: This is a nice lightweight fixed background parallax scroller jquery plugin , developed by Chayon Shaah                   Mymensingh , Bangladesh.
   
Usage : Download the Parallax.js plugin file and keep it in your js directory . Call it in your HTML page after   jquery. Create a section and set a background image (No need to apply any attachment style for background). Then call the section name as a selector in parallax() function . As like given below . You can use a class or id of the section and use that class name or id as selector . That's it.         
        
           
		   $('selector').parallax('selector')
		   
		  suppose your section is like this ---
		  
		  <section class="banner"> 
		  
		  // Your all section Content 
		  
		  </section>
		   
		   The Script will be ---
		   
		   
		   $('.banner').parallax('.banner');
		   
		   
	This has only one property for parllax speed . 0 for fixed background and 1 for full speed background (simillar of   content). you can  define any amount between 0 and 1 using deceimel to creat nice parallax effect . by difault it is  0.5 . That means parallax will scroll 50% slower than content , if you use 0.7 then it means parallax will scroll 30%    slower than content. see the usage ---
		   
		   $('selector').parallax('selector',{speed:0.7})


I think this is very easy to understand , and try it yourself ... :)
Thank You 
Best Regards 
Chayon Shaah
Mymensingh , Dhaka , Bangladesh.
