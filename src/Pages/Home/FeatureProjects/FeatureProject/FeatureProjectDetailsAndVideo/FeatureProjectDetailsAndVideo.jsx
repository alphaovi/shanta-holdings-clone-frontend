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
    speed: 500,
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
      <div className="ml-36 -mt-[480px] uppercase">
      <h1 className="text-xl mb-2 font-bold">Feature Projects</h1>
        <Slider {...settings2}>
          {featureProjects.map((featureProject) => (
            <div key={featureProject.id}>
              
              <h1 className="text-xl">{featureProject.projectType}</h1>
              <h1 className="text-4xl mt-4">{featureProject.projectName}</h1>
              <p className="text-xl mt-6">{featureProject.address}</p>
            </div>
          ))}
        </Slider>
          <button className="btn btn-outline text-white mt-16">View Project</button>
      </div>
      <div className="w-[550px] mr-20 -mt-60  float-end">
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
