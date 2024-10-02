import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeaderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    fade: true,
    button: false,
    cssEase: "linear",
    arrows: false,
  };
  const photos = [
    {
      id: 1,
      url: "https://cms.shantaholdings.com/images/WREXEOJwZ3w92cxgZ_QF--PEyRo=/3649/fill-2560x1440-c0%7Cformat-avif/Feature_Project_Moins.jpg",
    },
    {
      id: 2,
      url: "https://cms.shantaholdings.com/images/pzcv8IahCiq3cjSAMxoM-6bMJI4=/3563/fill-2560x1440-c0%7Cformat-avif/Majesta.jpg",
    },
    {
      id: 3,
      url: "https://cms.shantaholdings.com/images/_Oj4CQIRm7XAfrrhEJdwOCicYNc=/3515/fill-2560x1440-c0%7Cformat-avif/Aronno_3.jpg",
    },
    {
      id: 4,
      url: "https://cms.shantaholdings.com/images/TDZfJ6I_MNz0B8RijOx3VC1gV1Q=/158/fill-2560x1440-c0%7Cformat-avif/APUL0568-HDR-Pano.jpg",
    },
    {
      id: 5,
      url: "https://cms.shantaholdings.com/images/6sRBCj0mVQT_LyOFgKSkbccIVsk=/155/fill-2560x1440-c0%7Cformat-avif/3Y0A3122-HDR.jpg",
    },
  ];
  return (
    <div className=" w-10/12" style={{ margin: "0 auto" }}>
      <Slider {...settings}>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.url}
              alt={`Slide ${photo.id}`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderCarousel;
