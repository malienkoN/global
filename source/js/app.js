$(document).ready(function () {
    new Swiper('.mySwiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    new Swiper('.ReviewsSwiper', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 2,
        spaceBetween: 15,
    });

    $(window).scroll(function(){
        let sticky = $('.header'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('header-fixed');
        else sticky.removeClass('header-fixed');
    });
});