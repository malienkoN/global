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

    $('.faq__item-trigger').click(function () {
        $(this).next('.faq__item-content').slideToggle();
        $(this).parent().toggleClass('active');
        const replaceText = $(this).parent().hasClass('active') ? '-' : '+';
        $(this).find('.icon-special span').text(replaceText);
    });

    // $('.faq__item-trigger:first').click();
});