$(function () {
  'use strict';

  // banner slider

  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });

  // venobox

  $('.venobox').venobox();

  // testimonial slider
  $('.test_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });

  // Couter js start
  $('.count').counterUp({
    delay: 10,
    time: 1000
  });

  // logo slider

  $('.logo_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
  });

})