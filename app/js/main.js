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


  $('.products__filter').on('click', function () {
    $('.products__list').slideToggle();
  });

  $('.search-home__btn-tada').on('click', function () {
    $('.search-home__inner').slideToggle();
  });
  // $('.header__menu-line').on('click', function () {
  //   $('.header__submenu-list').slideToggle();
  // });
  $('.search-home__btn-tada').on('click', function () {
    $('.search-home__btn-tada, .search-home').toggleClass("active");
  });
  // $('.search-home__btn-tada').on('click', function () {
  //   $('.search-home__form').toggleClass("active");
  // });

  // $('.header__menu-line').on('click', function () {
  //   $(this).toggleClass("active");
  // });
  // // $('.header__menu-line').on('click', function () {
  // //   $('.header__menu-line.active>.header__submenu-list').toggleClass("active");
  // // });
  // $('.header__menu-line').on('click', function () {
  //   $('.header__menu-line.active>.header__submenu-list').toggleClass("active");
  // });




  $(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.header__menu-link');
      // Evento
      links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el;
      $this = $(this),
        $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
        $el.find('.header__submenu-list').not($next).slideUp().parent().removeClass('open');
      };
    }

    var accordion = new Accordion($('#accordion'), false);
  });



  $('.header__menu-btn').on('click', function () {
    $('.header__menu-list').slideToggle();
  });



  var mixer = mixitup('.products__inner-items');
});

