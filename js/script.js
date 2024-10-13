var swiper = new Swiper(".testiSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".testi-next",
        prevEl: ".testi-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });

  var swiper = new Swiper(".gallerySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    grid: {
        rows: 2,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      loop: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
        nextEl: ".cs-gallery-next",
        prevEl: ".cs-gallery-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          grid: {
            rows: 2,
          },
        },
        768: {
          slidesPerView: 3,
          grid: {
            rows: 2,
          },
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 5,
          grid: {
            rows: 2,
          },
          spaceBetween: 10,
        },
      },
  });
 
  $.fn.parallax = function(resistance, mouse) {
    $el = $(this);
    TweenLite.to($el, 0.2, {
      x: -((mouse.clientX - window.innerWidth / 2) / resistance),
      y: -((mouse.clientY - window.innerHeight / 2) / resistance)
    });
  };
  
  $(document).mousemove(function(e) {
    $(".movein").parallax(10, e);
    $(".cloud2").parallax(20, e);
    $(".cloud3").parallax(30, e);
    });