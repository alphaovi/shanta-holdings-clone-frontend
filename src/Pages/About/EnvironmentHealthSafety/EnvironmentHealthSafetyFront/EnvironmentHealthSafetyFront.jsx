import { useContext } from "react";
import ehsFrontImage from "../../../../assets/images/About/EHS/Untitled_design4.2e16d0ba.fill-1280x720-c0.format-avif.jpg";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";

const EnvironmentHealthSafetyFront = () => {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? "text-white" : "text-black"}`}>
      <div>
        <h1 className={`${darkMode ? "text-white" : "text-black"} text-8xl text-center  uppercase`}>Environment, <br /> Health & Safety</h1>
      </div>
      <div className="mx-20">
        <img src={ehsFrontImage} alt="" />
      </div>
      <div>
        <h3 className={`${darkMode ? "text-white" : "text-black"} text-2xl text-center  m-20`}>Chuti Harmony pledges sustainable practices to build a greener future and takes bold steps to Protect Workers and Communities</h3>
      </div>
    </div>
  );
};

export default EnvironmentHealthSafetyFront;
