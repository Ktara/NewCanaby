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


$('.category_question_list_header').click(function(){
    $('.category_question_list_text_wrapper').animate({
        height: 0
    }, 400);
    var target = $(this).next();
    if ($(this).hasClass('category_question_list_header_open')){
        $(this).removeClass('category_question_list_header_open');
        return;
    };
    $('.category_question_list_header').removeClass('category_question_list_header_open');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 400);
    $(this).addClass('category_question_list_header_open');
});


$('.categorypet_benefits_question_list_header').click(function(){
    $('.categorypet_benefits_question_list_text_wrapper').animate({
        height: 0
    }, 400);
    var target = $(this).next();
    if ($(this).hasClass('categorypet_benefits_question_list_header_open')){
        $(this).removeClass('categorypet_benefits_question_list_header_open');
        return;
    };
    $('.categorypet_benefits_question_list_header').removeClass('categorypet_benefits_question_list_header_open');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 400);
    $(this).addClass('categorypet_benefits_question_list_header_open');
});


$('.categorypet_faq_list_header').click(function(){
    $('.categorypet_faq_list_text_wrapper').animate({
        height: 0
    }, 400);
    var target = $(this).next();
    if ($(this).hasClass('categorypet_faq_list_header_open')){
        $(this).removeClass('categorypet_faq_list_header_open');
        return;
    };
    $('.categorypet_faq_list_header').removeClass('categorypet_faq_list_header_open');
    var childHeight = target.children().height();
    target.animate({
        height: childHeight
    }, 400);
    $(this).addClass('categorypet_faq_list_header_open');
});


$('.article_page_ps_slider_wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    zIndex: 100,
    adaptiveHeight: true,
    infinite: true
});