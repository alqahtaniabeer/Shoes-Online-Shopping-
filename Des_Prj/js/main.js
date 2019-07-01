$(document).ready(function(){

	$(document).on('click', '.section3 .select-menu ul li', function(){
		var currentid = $(this).attr('data-id');
		$('.section3 .select-menu ul li, .items-selectmenu .items-menu').removeClass('active');
		$('.section3 .select-menu ul li [data-id="' +currentid+'"], .items-selectmenu .items-menu[data-id="' +currentid+'"]').addClass('active');
	});
});

    $("#product-header-slide").lightSlider({
        adaptiveHeight: true,
        item: 1,
        addClass: '',
        mode: "fade",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
        speed: 1000, //ms'
        auto: true,
        slideMargin: 0,
        loop: true,
        slideEndAnimation: true,
        pause: 3000,       
    });

	$("#topproduct-slide").lightSlider({
        adaptiveHeight: true,
        item: 3,
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
        speed: 1000, //ms'
        auto: true,
        slideMargin: 10,
        loop: true,
        slideEndAnimation: true,
        pause: 4000, 
        controls: false      
    });


