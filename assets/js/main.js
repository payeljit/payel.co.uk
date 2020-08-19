$(document).ready(function(){


// Scroll Magic ==============================================================================================================================================

	//Init scroll ScrollMagic
	var controller = new ScrollMagic.Controller();
	// Pin Header section
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#header',
		triggerHook: 0
	})
	.setPin('#header')
	.addTo(controller);

	// Built a scene SKILLS
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#skills',
		reverse: false

	})
	.setClassToggle('#skills', 'fade-in') //add class to the project01
	.addTo(controller);


	// Built a scene EXPERIENCES
	var ourScene2 = new ScrollMagic.Scene({
		triggerElement: '#experiences',
		reverse: false

	})
	.setClassToggle('#experiences', 'fade-in') //add class to the project01
	.addTo(controller);

	// Built a scene PORTFOLIO
	var ourScene3 = new ScrollMagic.Scene({
		triggerElement: '#portfolio',
		reverse: false

	})
	.setClassToggle('#portfolio', 'fade-in') //add class to the project01
	.addTo(controller);

	// Built a scene CONTACT
	var ourScene3 = new ScrollMagic.Scene({
		triggerElement: '#contact',
		reverse: false

	})
	.setClassToggle('#contact', 'fade-in') //add class to the project01
	.addTo(controller);

$(".images").hover(over, out);
function over(){
  TweenMax.to(this, 0.5, {width:"250px"});
}

function out(){
  TweenMax.to(this, 0.5, {width:"100%"});
}


// Scroll Magic ends ==============================================================================================================================================
// NAV MENU STYLE ON CLICK

	var menu_items_links = $(".nav li a");
			menu_items_links.each(function () {
				if ($(this).is('[href*="#"')) {
					$(this).parent().removeClass('current-menu-item current-menu-ancestor');
					$(this).click(function () {
						var current_index = $(this).parent().index(),
							parent_element = $(this).closest('ul');
						parent_element.find('li').not(':eq(' + current_index + ')').removeClass('current-menu-item current-menu-ancestor');
						$(this).parent().addClass('current-menu-item current-menu-ancestor');
					})
				}
			})


	// Go top button don't show when reach too

	var btn = $('#go');

	  $(window).scroll(function() {
	    if ($(window).scrollTop() > 300) {
	      btn.css('display', 'block');
	    } else {
	      btn.css('display', 'none');
	    }
	  });

		// Nav menu display on click

				$('.navbar .navbar-toggler').on('click', function(){
				    $('.navbar-collapse').css('display','block').css( 'text-align', 'left');
						$('#menu-menu-1').css('background', 'rgb(255, 255, 255, 0.5)').css('padding-right', '50px').css('right', '-16px');

				});
				
});
