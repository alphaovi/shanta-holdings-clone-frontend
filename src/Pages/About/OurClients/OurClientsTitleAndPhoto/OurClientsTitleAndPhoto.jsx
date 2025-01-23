import { useContext } from "react";
import ourClicentsCoverPhoto from "../../../../assets/images/About/Our-Clients/15970554951xOvJ.2e16d0ba.fill-1280x720-c0.jpg";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";

const OurClientsTitleAndPhoto = () => {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 px-20">
        <h1 className={`${darkMode ? "text-white" : "text-black"} text-8xl  text-center`}>OUR CLIENTS</h1>
      </div>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 px-20">
        <img src={ourClicentsCoverPhoto} alt="" />
      </div>
    </div>
  );
};

export default OurClientsTitleAndPhoto;
