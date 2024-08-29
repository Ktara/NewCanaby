window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 20) {
        $('.navbar').addClass('navbar_active');        
    } else {
        $('.navbar').removeClass('navbar_active');        
    };
};


$('.best_slider_wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,    
    zIndex: 100,
    adaptiveHeight: true,
    infinite: true
});


$('.category_slider_wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,      
    zIndex: 100,
    adaptiveHeight: true,
    infinite: true
});


$('.quality_slider_wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true, 
    prevArrow: '<div class="quality_prevarrow"></div>',
    nextArrow: '<div class="quality_nextarrow"></div>',     
    zIndex: 100,
    adaptiveHeight: true,
    infinite: true
});