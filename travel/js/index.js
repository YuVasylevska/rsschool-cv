  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 1,
        fixedWidth : '800 px',
        start: 1,
        focus: 'center',
        gap: '60px',
        arrows: false,
        rewindByDrag: true,
        autoplay: false,

      } );
    splide.mount();
  } );