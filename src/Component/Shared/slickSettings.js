const settings = {
  slidesToShow: 3,
  dots: true,
  infinite: false,
  speed: 500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesPerRow: 1,
        slidesToShow: 1,
        speed: 500,
        rows: 2,
      },
    },
  ],
};

export default settings;
