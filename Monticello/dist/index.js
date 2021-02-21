$(".slider").slick({
  dots: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
});
$(".news__slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  prevArrow: '<img src="img/arrow_left.png" alt="prev" class="left">',
  nextArrow: '<img src="img/arrow_right.png" alt="next" class="right">',
});
