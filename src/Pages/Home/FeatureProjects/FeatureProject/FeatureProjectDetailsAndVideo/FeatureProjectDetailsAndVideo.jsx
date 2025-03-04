import Slider from "react-slick/lib/slider";
import useProjectData from "../../../../../Hooks/useProjectData";
import { useContext, useEffect, useRef } from "react";
import FeatureProjectSlide from "./FeatureProjectRightVideo";
import { DarkModeContext } from "../../../../../Contexts/NightLightContext";
import { FiArrowRightCircle } from "react-icons/fi";

const FeatureProjectDetailsAndVideo = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [featureProjects] = useProjectData([]);
  const videoRef = useRef(null);

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

  const handleVideoPlayer = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.muted = true;
    }
  };

  //   useEffect for calling the video play function
  useEffect(() => {
    handleVideoPlayer();
  }, []);

  return (
    <section className="px-4 sm:px-8 lg:px-16">
      <div
        className={`ml-8 lg:ml-36 mt-8 sm:mt-12 lg:-mt-[480px] uppercase text-white`}
      >
        <h1 className="text-lg sm:text-xl mb-2 text-white">
          Feature Projects
        </h1>
        <Slider {...settings2}>
          {featureProjects.map((featureProject) => (
            <div
              key={featureProject._id}
              className={`${darkMode ? "" : "opacity-75"}`}
            >
              <h1 className="text-base sm:text-lg lg:text-[18.5px]">
                {featureProject.projectType}
              </h1>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl mt-4">
                {featureProject.projectName}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl mt-6">
                {featureProject.address}
              </p>
              <div>
                <button
                  onClick={() => console.log("HI")}
                  className={`${
                    darkMode ? "text-white" : "text-white "
                  } btn btn-outline mt-8 sm:mt-12 lg:mt-16 featureProject-font text-sm sm:text-lg lg:text-xl border-none bg-none`}
                >
                  <FiArrowRightCircle className="inline-block mr-2" />
                  View Project
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full sm:w-[450px] lg:w-[550px] mx-auto lg:mr-20 mt-12 lg:-mt-60 float-none lg:float-end">
        <FeatureProjectSlide></FeatureProjectSlide>
      </div>
    </section>
  );
};

export default FeatureProjectDetailsAndVideo;
