$(function() {

	
	
	$('.more-btn-wrap').on('click', function(){
		$(this).toggleClass('active');
	});

	
	
	$('.btn.blue').on('click', function(){
		$('.show_more-blog').slideToggle('fast');
		$(this).text(function(i, v){
			$('.btn.blue').toggleClass('less')
			return v === 'Показать больше' ? 'Показать меньше' : 'Показать больше';
			
		 })
	});
	

	$('.block_gallery-home').slick({
		dots: false,
		arrows: true,
		speed: 300,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false
				}
			}
		]
	});

	$('.industry_slider').slick({
		dots: true,
		arrows: true,
		speed: 300,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					dots: true,
					arrows: false
				}
			}
		]

	});

	$('.slider .main-slider').slick({
		dots: true,
		arrows: false,
		speed: 300,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});


	$('.it-otrasli-slider').slick({
		dots: true,
		arrows: true,
		speed: 300,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					dots: true,
					arrows: false
				}
			}
		]
	});
	
	$('.project-item-slider').slick({
		dots: true,
		arrows: true,
		speed: 300,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					dots: true,
					arrows: false
				}
			}
		]
	});



	$('.block_projects').slick({
		dots: false,
		arrows: true,
		speed: 300,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: false,
					dots: true,
					arrows: false,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false,
					dots: true,
					arrows: false
				}
			}
		]
	});

	$('.company_slider-home').slick({
        dots: false,
        arrows: true,
        speed: 300,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            }
        ]
	});

	$('.our-partners-slider').slick({
        dots: false,
        arrows: true,
        speed: 300,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            }
        ]
	});
	

	

	$('.callback-close').on('click', function() {
		$('.callback-wrap').fadeOut(200);
		$('body').css('overflow', 'visible');
	});

	$(document).on('click', function(event) {
		if ( $(event.target).closest('.callback').length ) return;
		$('.callback-close').trigger('click');
	});

	$('.callback-link, .trigger').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();

		$('.callback-wrap').fadeIn(200);
		$('body').css('overflow', 'hidden');
	});


	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 263,
		fitWidth: true, // When enabled, you can center the container with CSS.
		gutter: 15
	  });
	
	  // Loading Animation
	  $('.grid-item').each(function(i) {
		setTimeout(function() {
		  $('.grid-item').eq(i).addClass('is-visible');
		}, 200 * i);
	  });
	
	  // Fancybox
	  $('.fancybox').fancybox({
		helpers: {
		  overlay: { locked: false }
		}
	  });

});


