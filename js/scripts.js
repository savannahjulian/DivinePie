$(document).ready(function() {

/* MAIN SLIDESHOW */

 	$('.flexslider').flexslider({
    	animation: "slide"
    });

/*  STICKY HEADER/NAV CODE  */

	slideshowSetup();
	window.addEventListener('resize',slideshowSetup);

	$('header').waypoint('sticky');

/* scroll to function */

	$('#flavorsLink').click(function(){
		$(window).scrollTo('.wholesaleFlavors' , 800 , {offset:{top:-75}});

	});

	$('#aboutLink').click(function(){
		$(window).scrollTo('.about' , 800 , {offset:{top:-75}});

	});

	$('#newsLink').click(function(){
		$(window).scrollTo('.news' , 800 , {offset:{top:-75}});

	});

	$('#findUsLink').click(function(){
		$(window).scrollTo('.findUs' , 800 , {offset:{top:-75}});

	});

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

/* FACEBOOK TOGGLE */

/* LOVE US SECTION CAROUSEL */

	$('.carousel').cycle({
		fx: 'scrollRight',
		speed: 1000,
		timeout: 0,
		prev: '.prev',
		next: '.next',
		fit: true
	});

});

function slideshowSetup(){
	$('.slides').height( $(window).height() - $('.navBar').height());
}



