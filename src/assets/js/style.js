$(document).ready(function () {
    /*========================================*/
    /* START: Slide menu */
    /*========================================*/
    $("#openNav").click(function () {
      $("#menuSidenav").addClass("show");
    });
    $("#closeNav").click(function () {
      $("#menuSidenav").removeClass("show");
    });

    /*========================================*/
    /* START: Mansory Grid */
    /*========================================*/
    $(".grid").masonry({
      // options
      itemSelector: ".grid-item",
      columnWidth: 145,
      fitWidth: true,
      gutter: 12,
    });

    /*========================================*/
    /* START: Search Mobile */
    /*========================================*/
    // Handling for Search Mobile
    $(".search-input-mobile").on("keyup", function () {
      if ($(".search-input-mobile").val().length >= 3) {
        $(".box__result").addClass("visible");
      } else if ($(".search-input").val().length === 0) {
        $(".box__result").removeClass("visible");
      }
    });
    $(".toggle-search-mobile").click(function () {
        $(".search-box--mobile").addClass("visible");
    });
    $(".close-search-mobile").click(function () {
        $(".search-box--mobile").removeClass("visible");
    });

    /*========================================*/
    /* START: Slick Slider */
    /*========================================*/
    // Slider Position
    $(".slider--position").slick({
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // Slider Year
    $(".slider--year").slick({
      infinite: false,
      speed: 200,
      slidesToShow: 7,
      slidesToScroll: 1,
      dots: false,
      responsive: [
        {
          breakpoint: 1150,
          settings: {
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
});