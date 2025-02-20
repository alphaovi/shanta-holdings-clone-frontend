import { useContext } from "react";
import healthyPhoto from "../../../../../assets/images/About/EHS/3/WhatsApp-Image-2024-04-01-at-9.52.03-PM-scaled.jpeg";
import { DarkModeContext } from "../../../../../Contexts/NightLightContext";

const ChutiPurbacalSecond = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`${
        darkMode ? "text-white" : "text-black"
      } grid grid-cols-2   p-24`}
    >
      <div>
        <h1 className="text-5xl uppercase mb-10">Capacity</h1>
        <li className="mb-5">23 Rooms</li>
        <li className="mb-5"> 2 Workshop Venue</li>
        <li className="mb-5"> Kids’ Zone</li>
        <li className="mb-5">
          {" "}
          Fine Dining and Dayout capacity 500 person per day
        </li>
        <li className="mb-5"> 45 car parking facility</li>
      </div>
      <div>
        <img className="h-96" src={healthyPhoto} alt="" />
      </div>
    </section>
  );
};

export default ChutiPurbacalSecond;
