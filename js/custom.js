

$('.eventslider').slick({
    rows: 2,
    centerMode: true,
    centerPadding: '420px',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {

          centerPadding: '350px',
        }
      },
      {
        breakpoint: 1440,
        settings: {
          centerPadding: '300px',
        }
      },
      {
        breakpoint: 1300,
        settings: {
          centerPadding: '250px',
        }
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '200px',
        }
      },
      {
        breakpoint: 1050,
        settings: {
          arrows: false,
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 770,
        settings: {
          rows: 1,
          arrows: false,
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 420,
        settings: {
          rows: 1,
          arrows: false,
          centerPadding: '50px',
        }
      },
    ]
  });
          