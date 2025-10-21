$(document).ready(function(){

	$('.header__gnb, .header__gnb-bg').mouseenter(function(){
	  $('.header__gnb-sub, .header__gnb-bg').stop().slideDown();
	});

	$('.header__gnb, .header__gnb-bg').mouseleave(function(){
	  $('.header__gnb-sub, .header__gnb-bg').stop().slideUp();
	});

	$('.header__lang-ul, .header__lang-bg').hide();

	$('.header__lang-current').click(function(){
		$('.header__lang-ul, .header__lang-bg').stop().slideToggle();
	})

	$('.header__lang-bg').click(function(){
		$('.header__lang-ul, .header__lang-bg').stop().slideUp();
	})

	$('.header__mo-lang-ul, .header__mo-lang-bg').hide();

	$('.header__mo-lang-current').click(function(){
		$('.header__mo-lang-ul, .header__mo-lang-bg').stop().slideToggle();
	})

	$('.header__mo-lang-bg').click(function(){
		$('.header__mo-lang-ul, .header__mo-lang-bg').stop().slideUp();
	})

	
	$('.header__mo-gnb-li-wrap').click(function(){

		if ($(this).next('.header__mo-gnb-sub').is(':visible')) {
			$(this).next('.header__mo-gnb-sub').slideUp();
			$(this).parent().removeClass('open');
			$(this).find('.header__mo-gnb-li-ico').removeClass('ro');
		} else {
			$('.header__mo-gnb-sub').slideUp();
			$('.header__mo-gnb-li').removeClass('open');
			$('.header__mo-gnb-li-ico').removeClass('ro');

			$(this).next('.header__mo-gnb-sub').slideDown();
			$(this).parent().addClass('open');
			$(this).find('.header__mo-gnb-li-ico').addClass('ro');
		}
	});

	setTimeout(function(){
		$('.index-banner__color-top').addClass('on');
	}, 500);



	$('.header__mo-btn').click(function(){
		$('.header__mo-gnb-wrap').addClass('gnb');
		$('.header__mo-gnb-bg').fadeIn()
	});

	$('.header__mo-gnb-close, .header__mo-gnb-bg').click(function(){
		$('.header__mo-gnb-wrap').removeClass('gnb');
		$('.header__mo-gnb-bg').fadeOut()
	});

	$('.vision-ideal__item').mouseenter(function(){
		$(this).find('.vision-ideal__item-num, .vision-ideal__item-tit, .vision-ideal__item-txt').css('color','var(--color-gray-00)')
		$(this).css('background-color','var(--color-primary-50)')
	});

	$('.vision-ideal__item').mouseleave(function(){
		$(this).find('.vision-ideal__item-num').css('color','var(--color-primary-50)')
		$(this).find('.vision-ideal__item-tit').css('color','var(--color-gray-95)')
		$(this).find('.vision-ideal__item-txt').css('color','var(--color-gray-80)')
		$(this).css('background-color','var(--color-gray-00)')
	});





	function scrollIndex() {
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();

		$('.index-banner__tit, .index-banner__txt, .index-banner__img, .index-issue__tit, .index-issue__item-left, .index-issue__textbox, .index-collabo__tit, .index-collabo__txt, .index-collabo__grid, .index-certification__tit, .index-certification__txt, .index-certification__ico-box, .index-certification__textbox, .index-contact__tit, .index-contact__btn, .index-contact__flex').each(function(index) {
			var $el = $(this);
			var elementTop = $el.offset().top;
			var triggerOffset = 300;

			if (scrollTop + windowHeight > elementTop - triggerOffset && scrollTop < elementTop + $el.outerHeight()) {
				setTimeout(() => {
					$el.css({
						'opacity': '1',
						'transform': 'translateY(0)'
					});
				}, index * 50);
			}
		});
	}

	$(window).on('load', function() {
		scrollIndex();
	});

	$(window).on('scroll', function() {
		scrollIndex();
	});

	function scrollAbout() {
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();

		$('.greetings-info__tit, .greetings-info__txt, .greetings-message__grid-imgbox, .greetings-message__grid-txtbox, .vision-head, .vision-mission, .vision-ideal__title, .vision-ideal__txt, .vision-ideal__grid, .history-list__tit, .history-list__txt, .history-list__item, .directions-hq__frame, .directions-hq__tit, .directions-hq__address, .directions-factory__frame, .directions-factory__tit, .directions-factory__address, .directions-info').each(function(index) {
			var $el = $(this);
			var elementTop = $el.offset().top;
			var triggerOffset = 0;

			if (scrollTop + windowHeight > elementTop - triggerOffset && scrollTop < elementTop + $el.outerHeight()) {
				setTimeout(() => {
					$el.css({
						'opacity': '1',
						'transform': 'translateY(0)'
					});
				}, index * 50);
			}
		});
	}

	$(window).on('load', function() {
		scrollAbout();
	});

	$(window).on('scroll', function() {
		scrollAbout();
	});

	function scrollProduct() {
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();

		$('.recycled-info__tit, .recycled-info__txt, .recycled-problem__item-txtbox, .recycled-process__item, .recycled-effect__tit, .recycled-effect__item, .portfolio-list__tit, .portfolio-list__txt, .portfolio-list__item').each(function(index) {
			var $el = $(this);
			var elementTop = $el.offset().top;
			var triggerOffset = 300;

			if (scrollTop + windowHeight > elementTop - triggerOffset && scrollTop < elementTop + $el.outerHeight()) {
				setTimeout(() => {
					$el.css({
						'opacity': '1',
						'transform': 'translateY(0)'
					});
				}, index * 50);
			}
		});
	}

	$(window).on('load', function() {
		scrollProduct();
	});

	$(window).on('scroll', function() {
		scrollProduct();
	});

	function scrollPR() {
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();

		$('.news-list__item, .notice-list__tr, .media-list__item').each(function(index) {
			var $el = $(this);
			var elementTop = $el.offset().top;
			var triggerOffset = 300;

			if (scrollTop + windowHeight > elementTop - triggerOffset && scrollTop < elementTop + $el.outerHeight()) {
				setTimeout(() => {
					$el.css({
						'opacity': '1',
						'transform': 'translateY(0)'
					});
				}, index * 50);
			}
		});
	}

	$(window).on('load', function() {
		scrollPR();
	});

	$(window).on('scroll', function() {
		scrollPR();
	});

	function scrollRecruit() {
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();

		$('.process-step__item, .process-info__list, .process-contact__tit, .process-contact__txt, .process-contact__link, .recruit-list__tr').each(function(index) {
			var $el = $(this);
			var elementTop = $el.offset().top;
			var triggerOffset = 300;

			if (scrollTop + windowHeight > elementTop - triggerOffset && scrollTop < elementTop + $el.outerHeight()) {
				setTimeout(() => {
					$el.css({
						'opacity': '1',
						'transform': 'translateY(0)'
					});
				}, index * 50);
			}
		});
	}

	$(window).on('load', function() {
		scrollRecruit();
	});

	$(window).on('scroll', function() {
		scrollRecruit();
	});

	function scrollContact() {
		var scrollTop = $(window).scrollTop();
		var windowHeight = $(window).height();

		$('.contact-form__tit, .contact-form__input, .contact-form__submit').each(function(index) {
			var $el = $(this);
			var elementTop = $el.offset().top;
			var triggerOffset = 300;

			if (scrollTop + windowHeight > elementTop - triggerOffset && scrollTop < elementTop + $el.outerHeight()) {
				setTimeout(() => {
					$el.css({
						'opacity': '1',
						'transform': 'translateY(0)'
					});
				}, index * 50);
			}
		});
	}

	$(window).on('load', function() {
		scrollContact();
	});

	$(window).on('scroll', function() {
		scrollContact();
	});



})
	