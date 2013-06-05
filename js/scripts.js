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

	$('.dp_logo').click(function(){
		$(window).scrollTo('.container' , 800 );

	});

	$('.wholesaleButton').click(function(){
		$(window).scrollTo('.contact' , 800 , {offset:{top:-75}});

	});

/* ABOUT SECTION */

	$('.aboutTwo').hide();
	$('.aboutThree').hide();

  	$('.ingredients').click(function(){

  		$('.story,.benefits').removeClass('active');
  		$(this).addClass('active');

	    $('div.showhide,.aboutOne').hide();
	    $('div.showhide,.aboutThree').hide();
	    $('div.showhide,.aboutTwo').show();

	});

	$('.benefits').click(function(){

		$('.story,.ingredients').removeClass('active');
  		$(this).addClass('active');

	    $('div.showhide,.aboutTwo').hide();
	    $('div.showhide,.aboutOne').hide();
	    $('div.showhide,.aboutThree').show();

	});

	$('.story').click(function(){

		$('.benefits,.ingredients').removeClass('active');
  		$(this).addClass('active');

	    $('div.showhide,.aboutTwo').hide();
	    $('div.showhide,.aboutThree').hide();
	    $('div.showhide,.aboutOne').show();

	});

/* FACEBOOK TOGGLE */

/* LOVE US SECTION CAROUSEL */

	var qty = $('.praise_module').length;

	var width = (qty * 320) + 'px';
	var scroll_reset = (qty * 320) - win_width + 20;
	var pos = 6;

	$('.carousel_wrapper').css({'width': width});

	$('.next').click(function(){
		if (pos > qty - 1) {
			$('.carousel_wrapper').animate( {left: '0'}, 800);
			$('.prev').hide();
			pos = 3;
		} else {
			$('.carousel_wrapper').animate( {left:'-=320'}, 800);
			$('.prev').show();
			pos += 1;

		};
	});

	$('.prev').click(function(){
		if (pos == 3) {
			$('.carousel_wrapper').animate( {left: -scroll_reset}, 800);
			$('.next').hide();
			pos = qty;
		} else {
			$('.carousel_wrapper').animate( {left:'+=320'}, 800);
			$('.next').show();
			pos -= 1;
		};
	});

});


var win_width = $(window).width();

function slideshowSetup(){
	$('.slides').height( $(window).height() - $('.navBar').height());
}



