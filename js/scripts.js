$(document).ready(function() {

/* MAIN SLIDESHOW */

 	$('.flexslider').flexslider({
    	animation: "slide"
    });

/* LIGHTBOX */

	$(".boxer").boxer({
    fixed: true
	});

/*  STICKY HEADER/NAV CODE  */

	slideshowSetup();
	$(window).resize(slideshowSetup);

	$('header').waypoint('sticky');

/* scrollTo function */

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

/* LOVE US SECTION CAROUSEL */

	var module_width = $('.praise_module').width();
	var qty = $('.praise_module').length;
	var width = (qty * 334) + 'px';
	var scroll_reset = (qty * 334) - win_width + 20;
	var pos = 3;
	var next_reset = 0 + (win_width / 2) - 168;
	var dev_next_reset = 0 + (win_width / 2) - 172;
	var prev_reset = (qty * 334) - (win_width / 2 + 276);
	var dev_prev_reset = (qty * 334) - (win_width / 2 + 156);

	$('.carousel_wrapper').css({'width': width});

	$('.next').click(function(){
		if (module_width > 240) {

			if (pos == qty - 1) {
				$('.carousel_wrapper').animate( {left: next_reset}, 800);
				$('.prev').hide();
				pos = 0;

			} else {

				$('.carousel_wrapper').animate( {left:'-=318'}, 800);
				$('.prev').show();
				pos += 1;

			}

		} else {

			if (pos == qty - 1) {

				$('.carousel_wrapper').animate( {left: dev_next_reset}, 800);
				$('.prev').hide();
				pos = 0;

			} else {

				$('.carousel_wrapper').animate( {left:'-=334'}, 800);
				$('.prev').show();
				pos += 1;
			}
		}
	});

	$('.prev').click(function(){

		if (module_width > 240) {

			if (pos == 0) {
				$('.carousel_wrapper').animate( {left: -prev_reset}, 800);
				$('.next').hide();
				pos = qty - 1;

			} else {

				$('.carousel_wrapper').animate( {left:'+=318'}, 800);
				$('.next').show();
				pos -= 1;
			};

		} else {

			if (pos == 0) {

				$('.carousel_wrapper').animate( {left: -dev_prev_reset}, 800);
				$('.next').hide();
				pos = qty - 1;

			} else {

				$('.carousel_wrapper').animate( {left:'+=334'}, 800);
				$('.next').show();
				pos -= 1;
			};
		};
	});

/* FORM STYLES FOR IE */
	$('.nameInput').bind('focus',function(){
		if($(this).val()=='Name'){
			$(this).val('');
		}
	}).bind('blur',function(){
		if($(this).val()==''){
			$(this).val('Name');
		}
	});

	$('.emailInput').bind('focus',function(){
		if($(this).val()=='E-mail'){
			$(this).val('');
		}
	}).bind('blur',function(){
		if($(this).val()==''){
			$(this).val('E-mail');
		}
	});

});

var win_width = $(window).width();

function slideshowSetup(){
	$('.slides').height( $(window).height() - $('.navBar').height());
}