import { useContext } from "react";
import healthyPhoto from "../../../../assets/images/About/EHS/1/Couple-5.jpeg";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";

const HealthHygiene = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`${
        darkMode ? "text-white" : "text-black"
      } grid grid-cols-2   p-24`}
    >
      <div>
        <h1 className="text-5xl uppercase mb-10">Capacity</h1>
        <li className="mb-5">53 Rooms</li>
        <li className="mb-5"> 3 Workshop Venue</li>
        <li className="mb-5"> Fine Dining</li>
        <li className="mb-5"> Dayout capacity 2500 person per day</li>
        <li className="mb-5">300 Car parking facility</li>
      </div>
      <div>
        <img className="h-96" src={healthyPhoto} alt="" />
      </div>
    </section>
  );
};

export default HealthHygiene;
