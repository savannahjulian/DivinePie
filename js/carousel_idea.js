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

	// Compensate for spaces in inline-block situations:
	var win_width = ( $(window).width() + 15 );
	var qty = $('.praise_module').length;

	var width = ( ( qty + 1 ) * 320) + 'px';
	var scroll_reset = (qty * 320) - win_width + 20;
	var pos = 0;

	$('.carousel_wrapper').css({'width': width});

	$('.next').click(function(){
		$('.prev').show();

		pos = ( ( pos + 1 ) % ( qty - 1 ) );
		console.log(pos);

		$('.carousel_wrapper').animate({
			left: - $($('.praise_module')[pos]).position().left
		} , 800);

		if ( win_width <= 320 ) {
			
			$('.carousel_wrapper').animate({
				height: $($('.praise_module')[pos]).height() + 75
			});

			$('.view_target').animate({
				height: $($('.praise_module')[pos]).height() + 75
			});

		}
		
	});

	$('.prev').click(function(){
		pos = ( ( ( pos - 1 ) % ( qty - 1 ) ) < 0 ) ? 0 : ( pos - 1 );
		console.log(pos);
		$('.carousel_wrapper').animate({
			left: $($('.praise_module')[pos]).position().left
		}, 800);
		
		$('.next').show();

		if ( win_width <= 320 ) {
			$('.carousel_wrapper').animate({
				height: $($('.praise_module')[pos]).height() + 75
			});

			$('.view_target').animate({
				height: $($('.praise_module')[pos]).height() + 75
			});
		}
	});

});



function slideshowSetup(){
	$('.slides').height( $(window).height() - $('.navBar').height());
}



