'use strict';

$('.gallery').slick({
  infinite: true,
  fade: true,
  arrows: `<div class="slick-prev"></div>`,
  nextArrow: `<div class="slick-next"></div>`,
});

$('.choice-btn').slick({
  infinite: true,
  slidesToShow: 8,
  focusOnSelect: true,
  asNavFor: '.gallery',
});

$('.gallery').on('beforeChenge',
function(event, slick, currentSlide, nextSlide) {
  var index = nextSlide;

  $(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current);")
});