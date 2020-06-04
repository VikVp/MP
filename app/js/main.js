$(function () {
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
  });



  $('.weekly__inner').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      // {
      //   breakpoint: 941,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      {
        breakpoint: 641,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('.feed__inner').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ,
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('.feedback__inner').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 941,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });


  // $('.products__filter-btn').on('click', function () {
  //   $('.products__list').slideToggle();
  // });
  $('.products__filter').on('click', function () {
    $('.products__list').slideToggle();
  });


  var mixer = mixitup('.products__inner-items');
});

