$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpead: 500,
        adaptiveHeight: true,
        dots: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              arrows: false,
            }
        },
      ]

      });
    
});
