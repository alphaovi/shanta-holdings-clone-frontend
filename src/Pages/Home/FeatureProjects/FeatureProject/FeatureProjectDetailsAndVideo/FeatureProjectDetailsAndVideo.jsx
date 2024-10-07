import Slider from "react-slick/lib/slider";
import useProjectData from "../../../../../Hooks/useProjectData";
import { useRef } from "react";

const FeatureProjectDetailsAndVideo = () => {
  const [featureProjects] = useProjectData([]);
  const videoRef = useRef();

  // slider2 and slider3 setting
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    fade: false,
    button: false,
    cssEase: "linear",
    arrows: false,
  };

  // const handleVideoPlayer = () => {};
  return (
    <section>
      <div className="ml-36 -mt-[350px] text-gray-700">
        <Slider {...settings2}>
          {featureProjects.map((featureProject) => (
            <div key={featureProject.id}>
              <h1>{featureProject.projectType}</h1>
              <p>{featureProject.projectName}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-[550px] mr-20 -mt-44 float-end">
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
    </section>
  );
};

export default FeatureProjectDetailsAndVideo;
