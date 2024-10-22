$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        fade: true,
    });


    $('.main_content .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });
    $('.main_content .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });


    $('.main_Collection .fade_slide').slick({
        arrows: false,
        fade: true,
        asNavFor: '.main_Collection .ga_slider'
    });


    $('.main_Collection .ga_slider').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.main_Collection .fade_slide'
    })

});