$(document).ready(function() {
 $('.navMenu').click(function() {
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
	};
 }); // окончание click
}); // окончание ready