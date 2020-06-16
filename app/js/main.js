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
  $('.search-home__btn-tada').on('click', function () {
    $('.search-home__btn-tada, .search-home').toggleClass("active");
  });


  $('.header__megamenu-title').on('click', function () {
    $(this).parent().toggleClass("active1");
  });


  $('.footer__title').on('click', function () {
    if (window.innerWidth <= 520) {
      $(this).parent().toggleClass("active");
    }
  });
  $('.aside__title').on('click', function () {
    if (window.innerWidth <= 1170) {
      $(this).parent().toggleClass("active");
    }
  });



  $('.header__menu-btn').on('click', function () {
    $('.header__menu-list').slideToggle();
  });







  $(function () {
    if (window.innerWidth <= 520) {
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
    }
  });


  // category-page
  $('.icon-th-large').on('click', function () {
    $('.products__item').removeClass("list").addClass('grid');
    $(this).addClass("active");
    $('.icon-th-list').removeClass("active");
  });

  $('.icon-th-list').on('click', function () {
    $('.products__item').removeClass("grid").addClass("list");
    $(this).addClass("active");
    $('.icon-th-large').removeClass("active");
  });

  $("#range").ionRangeSlider({
    min: 0,
    max: 330,
    skin: "big",
    hide_min_max: true,
    from: 30,
    to: 300,
    type: 'double',
    prefix: "$"
  });





  var mixer = mixitup('.products__inner-items');
});

