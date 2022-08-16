var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  },
});

function callAction() {
  console.log('d');
  window.open(
    'https://wa.me/+5535992739785?text=Ol%C3%A1,%20Quero%20saber%20mais.'
  );
}
