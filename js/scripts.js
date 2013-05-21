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





/*
	Watch for browser size change:
*/
/*window.addEventListener( 'scroll' , stickyMe );

window.addEventListener( 'resize' , slideAdjust );


function stickyMe( )  {
	var scrolled = window.scrollY;
	if ( scrolled > ( window.innerHeight - 46 ) ) {
		// alert("fuck!");
		// document.getElementById('nav').classList.add('sticky');
	} else {
		// document.getElementById('nav').classList.remove('sticky');
	}
}

function slideAdjust ( ) {
	$('.hero-image').width( document.body.offsetWidth ).height(window.innerHeight);
	$('#slideshow').height( window.innerHeight ).width("100%");
}

$(document).ready(function() {

	// MAINPAGE SLIDESHOW //
	$('#slideshow').height(window.innerHeight);

	$('#slideshow').cycle({

		fx: 'fade',
		speed: 1000,
		before: slideAdjust,
		after: slideAdjust,
		timeout: 5000,
		prev: '#prev',
		next: '#next'
	});
}); */