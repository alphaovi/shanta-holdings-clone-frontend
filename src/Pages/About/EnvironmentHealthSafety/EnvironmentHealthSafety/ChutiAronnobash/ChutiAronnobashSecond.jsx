import { useContext } from "react";
import healthyPhoto from "../../../../../assets/images/About/EHS/2/imageye___-_298504835_3933067333585923_5451053921575645786_n.png";
import { DarkModeContext } from "../../../../../Contexts/NightLightContext";

const ChutiAronnobashSecond = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`${
        darkMode ? "text-white" : "text-black"
      } grid grid-cols-2   p-24`}
    >
      <div>
        <h1 className="text-5xl uppercase mb-10">Capacity</h1>
        <li className="mb-5">09 Rooms</li>
        <li className="mb-5"> 2 Workshop Venue</li>
        <li className="mb-5">
          {" "}
          Fine Dining and Dayout capacity 1500 person per day
        </li>
        <li className="mb-5"> Dayout capacity 2500 person per day</li>
        <li className="mb-5"> 45 car parking facility</li>
      </div>
      <div>
        <img className="h-96" src={healthyPhoto} alt="" />
      </div>
    </section>
  );
};

export default ChutiAronnobashSecond;
