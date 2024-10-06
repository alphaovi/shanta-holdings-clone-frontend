import { useEffect, useState } from "react";
import FeatureProject from "../FeatureProject/FeatureProject";
import Slider from "react-slick/lib/slider";

const FeatureProjects = () => {
  const [featureProjects, setFeatureProjects] = useState([]);

  useEffect(() => {
    fetch("featureProject.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatureProjects(data);
      });
  }, []);

  const settings1 = {
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
  const settings2 = {
    dots: true,
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

  return (
    <section className="mb-20">
      <div className="scrollable-element px-5">
        <Slider {...settings1}>
          {featureProjects.map((featureProject) => (
            <div key={featureProject.id}>
              <img
                src={featureProject.projectImg}
                alt={`Slide ${featureProject.id}`}
                style={{ height: "600px", width: "1400px" }}
              />
            </div>
          ))}
        </Slider>
      </div>
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
    </section>
  );
};

export default FeatureProjects;
