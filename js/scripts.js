$(document).ready(function() {

/* MAIN SLIDESHOW */
 	$('.flexslider').flexslider({
    	animation: "slide"
    });

/*  STICKY HEADER/NAV CODE  */

	slideshowSetup();
	window.addEventListener('resize',slideshowSetup);

	$('header').waypoint('sticky');

/* ABOUT SECTION */

	$('.aboutTwo').hide();
	$('.aboutThree').hide();

  	$('.ingredients').click(function(){
	    $('div.showhide,.aboutOne').hide();
	    $('div.showhide,.aboutThree').hide();
	    $('div.showhide,.aboutTwo').show();

	});

	$('.benefits').click(function(){
	    $('div.showhide,.aboutTwo').hide();
	    $('div.showhide,.aboutOne').hide();
	    $('div.showhide,.aboutThree').show();

	});

	$('.story').click(function(){
	    $('div.showhide,.aboutTwo').hide();
	    $('div.showhide,.aboutThree').hide();
	    $('div.showhide,.aboutOne').show();

	});	
   	
});

function slideshowSetup(){
	$('.slides').height( $(window).height() - $('.navBar').height());
}



