
wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       100,          // default
        mobile:       true,       // default
        live:         true        // default
    }
)
wow.init();

$(document).ready(function(){
    $('.slider-1').slick({
        autoplay: true,
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
});

$(document).ready(function(){
    $('.slider-2').slick({
        autoplay: true,
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('.prev-2'),
        nextArrow: $('.next-2'),
    });
});



$('.burger').click(function (){
    $('.b-span').toggleClass('burger-active');
    $('.burger-menu').toggleClass('burger-menu-active');
});




