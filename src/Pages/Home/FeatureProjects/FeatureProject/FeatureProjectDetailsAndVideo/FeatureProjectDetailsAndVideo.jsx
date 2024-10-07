import { useEffect, useRef, useState } from "react";
import Slider from "react-slick/lib/slider";

const FeatureProjectDetailsAndVideo = () => {
  const [featureProjects, setFeatureProjects] = useState([]);
  const videoRef = useRef();


  useEffect(() => {
    fetch("featureProject.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatureProjects(data);
      });
      
  }, []);


  // slider2 and slider3 setting
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    fade: false,
    button: false,
    cssEase: "linear",
    arrows: false,
  };

  // const handleVideoPlayer = () => {};
  return (
    <div>
      <div>
        <Slider {...settings2}>
          {featureProjects.map((featureProject) => (
            <div key={featureProject.id}>
              <h1>{featureProject.projectType}</h1>
              <p>{featureProject.projectName}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <Slider {...settings2}>
          {featureProjects.map((featureProject) => (
            <div key={featureProject.id}>
              <video
                ref={videoRef}
                src={featureProject.projectVideo}
                controls={false}
              ></video>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeatureProjectDetailsAndVideo;
