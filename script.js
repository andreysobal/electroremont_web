$(document).ready(function() {
	$('.autoplay').slick({ 							 //activate and tune a slider
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows:false,
		dots: true,
	});//end autoplay
	
		$('.slider-for').slick({ 							 //activate and tune a slider
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		centerMode: true,
		arrows: false,
		focusOnSelect: true
});//end lowerSlider
	
	$('.navMenu').click(function() {			//for hide and tougle menu on extra-small screens
		var menu = $(".hidMenu");
		var nav = $(this);
		if (menu.is(':hidden')) {
			$(menu).removeClass('hidden-xs');
			$(".navItem").each(function() {
				$(this).css("border-bottom", "0.5px dotted black");
			});//end each
			nav.css("border-bottom", "0.5px solid black");
			$(".smNav").css("border-bottom", "0.5px solid black");
			$("#navigation").css("border-bottom", "none");
		} else {
			$(menu).addClass('hidden-xs');
			$(".navItem").each(function() {
				$(this).css("border-bottom", "none");
			});//end each
			nav.css("border-bottom", "none");
			$(".smNav").css("border-bottom", "none");
			$("#navigation").css("border-bottom", "0.5px solid black");
		};//end if
	}); //end click
	
	$(".edgeItem").each(function() {				//animation in the section Edges
		var imgFile = $(this).find("img").attr('src');
		var preloadImage = new Image();
		preloadImage.src = imgFile.replace(/.png/g, "_inv.png");
		$(this).hover(function(){
			$(this).find("img").stop().animate({
				backgroundColor:"#364174"
				}, 800, 'easeOutExpo');//end enter animate
			$(this).find("img").attr("src", preloadImage.src);
			$(this).find("p").attr("style", "color:white");
		}, function(){
			$(this).find("img").stop().animate({
				backgroundColor:"white"
				}, 800, 'easeInSine');//end mouseleave animate
			$(this).find("img").attr("src", imgFile);
			$(this).find("p").attr("style", "color:#CFCBE8");
		}); // end hover
	}); // end each
	
	$(".navItem").click(function(){					//slow scroll to selected taget
		var target = $(this).find("a").attr("href");
		$('html, body').animate({scrollTop: $(target).offset().top}, 500);
		return false;
	});
	
	$(".fancybox").fancybox();  		//activate fancybox plagin pushing on the button
	
	$("#callback").submit(function() {				//send a callback form 
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#callback").serialize()
		}).done(function() {
			alert("�� ���������� � ��������� �����!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
	
	
}); //end ready
