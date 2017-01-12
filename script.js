$(document).ready(function() {
	$('.autoplay').slick({ 							 //activate and tune a slider
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		arrows:false,
		dots: true,
	});//end autoplay
	
	$('.navMenu').click(function() {			//for hide and tougle menu on extra-small screens
		var menu = $(".navItem");
		var nav = $(this);
		if (menu.is(':hidden')) {
			$(menu).each(function() {
				$(this).removeClass('hidden-xs').css("border-bottom", "0.5px dotted black");
				console.log("+++");
			});//end each
			nav.css("border-bottom", "0.5px solid black");
			$("#navigation").css("border-bottom", "none");
		} else {
			$(menu).each(function() {
				$(this).addClass('hidden-xs').css("border-bottom", "none");
				console.log("---");
			});//end each
			nav.css("border-bottom", "none");
			$("#navigation").css("border-bottom", "0.5px solid black");
		};//end if
	}); //end click
	
	
}); //end ready