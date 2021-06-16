$(document).ready(function () {
    const swiper = new Swiper('.mySwiper', {
        pagination: {
            el: '.swiper-pagination',
        },
    });

    $(window).scroll(function(){
        let sticky = $('.header'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) sticky.addClass('header-fixed');
        else sticky.removeClass('header-fixed');
    });
});