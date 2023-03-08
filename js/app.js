$('.slider').slick({
  infinite: true,
  dots: true,
  fade: true,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: $('.arrowNext'),
  prevArrow: $('.arrowPrev'),
});

$(window).scroll(() => {
  let bottomAnim = $('.bottomAnim');
  let rightAnim = $('.rightAnim');
  let leftAnim = $('.leftAnim');
  let iconRight = $('.iconRight');
  let iconLeft = $('.iconLeft');
  let infoUp = $('.infoUp');
  let partner = $('.partner__item');
  let rotateLeft = $('.rotateLeft');
  let rotateRight = $('.rotateRight');
  let scroll = $(window).scrollTop();

  if (scroll > 55) {
    bottomAnim.addClass('bounceInUp');
    rightAnim.addClass('bounceInRight');
    leftAnim.addClass('bounceInLeft');
  }
  if (scroll > 535) {
    iconLeft.addClass('fadeInLeft');
    iconRight.addClass('fadeInRight');
    infoUp.addClass('fadeInUpBig');
  }
  if (scroll > 1550) {
    partner.addClass('show');
  }
  if (scroll > 2330) {
    rotateLeft.addClass('rotateInDownLeft');
    rotateRight.addClass('rotateInUpRight');
  }
});
