import Slider from "react-slick/lib/slider";

const Explore = () => {
  const sliderSettings = {
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
      url: "https://cms.shantaholdings.com/media/media/This_is_Shanta_Preview.mp4",
    },
    {
      id: 2,
      url: "https://cms.shantaholdings.com/images/pzcv8IahCiq3cjSAMxoM-6bMJI4=/3563/fill-2560x1440-c0%7Cformat-avif/Majesta.jpg",
    },
    {
      id: 3,
      url: "https://cms.shantaholdings.com/images/RobOfTCN-P9uZZNnb3qv45vk_XA=/163/fill-1120x628-c0/1694347488kUw3f.jpg?t=1728543228892",
    },
    {
      id: 4,
      url: "https://cms.shantaholdings.com/images/RobOfTCN-P9uZZNnb3qv45vk_XA=/163/fill-1120x628-c0/1694347488kUw3f.jpg?t=1728543228892",
    },
    {
      id: 5,
      url: "https://cms.shantaholdings.com/images/fKMEub0_ovUbsZHrGmxSlSsPbR4=/164/fill-1120x628-c0/1596038525qby3y.jpg?t=1728543228894",
    },
  ];
  return (
    <div className="scrollable-element mx-auto">
      <Slider {...sliderSettings}>
        {photos.map((photo) => {
          const isVideo = photo.url.endsWith(".mp4");
          console.log(photo.url);
          return (
            <div key={photo.id}>
              {isVideo ? (
                <video
                  controls
                  style={{ width: "100%", height: "90vh" }}
                  src={photo.url}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={photo.url}
                  alt={`Slide ${photo.id}`}
                  style={{ width: "100%", height: "90vh" }}
                />
              )}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Explore;
