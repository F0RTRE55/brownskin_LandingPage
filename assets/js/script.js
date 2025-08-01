$(document).ready(function(){
	function scrollMove() {
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();

		$('.index-banner__tit, .index-banner__txt, .index-banner__img, .index-issue__tit, .index-issue__item-left, .index-issue__textbox, .index-history__tit, .index-history__txt, .index-history__grid, .index-certification__tit, .index-certification__txt, .index-certification__ico-box, .index-certification__textbox, .index-contact__tit, .index-contact__btn, .index-contact__flex').each(function(index) {
			var elementTop = $(this).offset().top;

			if (scrollTop + windowHeight > elementTop && scrollTop < elementTop + $(this).outerHeight()) {

				setTimeout(() => {
					$(this).css({
						'opacity': '1',
						'transform':'translateY(0)'
					});
				}, index * 50);
			}
		});
	}

	$(window).on('load', function() {
		scrollMove();
	});

	$(window).on('scroll', function() {
		scrollMove();
	});



	setTimeout(function(){
		$('.index-banner__color-top').addClass('on');
	}, 500);
})
	