import { useContext } from "react";
import lifeAtShantaCoverPhoto from "../../../assets/images/Life_At_Shanta/IMG_7354.2e16d0ba.fill-2560x1440-c0.jpg";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
const LifeAtShantaCover = () => {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <section
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <div>
        <h1 className="text-8xl text-center relative -mb-10 uppercase">
          Life at <br /> Chuti Harmony
        </h1>
      </div>
      <div>
        <img src={lifeAtShantaCoverPhoto} alt="" />
      </div>
    </section>
  );
};

export default LifeAtShantaCover;
