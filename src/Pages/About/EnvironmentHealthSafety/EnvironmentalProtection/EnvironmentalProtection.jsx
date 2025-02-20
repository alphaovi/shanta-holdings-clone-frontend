import environmentalProtectionImage1 from "../../../../assets/images/About/EHS/1/banne5r-1.jpg";
import environmentalProtectionImage2 from "../../../../assets/images/About/EHS/1/banner-102.jpg";
import environmentalProtectionImage3 from "../../../../assets/images/About/EHS/1/banner-2.jpg";
import environmentalProtectionImage4 from "../../../../assets/images/About/EHS/1/bhawal-cottage-thumb.jpg";
import { useContext } from "react";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";

const EnvironmentalProtection = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section
      className={`${darkMode ? "text-white" : "text-black"} flex  p-20 `}
    >
      <div className="grid grid-cols-2 gap-4 mr-40">
        <img className="w-96" src={environmentalProtectionImage1} alt="" />
        <img className="w-96" src={environmentalProtectionImage2} alt="" />
        <img className="w-96" src={environmentalProtectionImage3} alt="" />
        <img className="w-96" src={environmentalProtectionImage4} alt="" />
      </div>
      <div className={`${darkMode ? "text-white" : "text-black"}`}>
        <h1 className="text-4xl mb-10">
          Available Facilities in Chuti Resort Gazipur
        </h1>
        <li className="mt-5">
          Night Stay, Swimming, Corporate Dayout, Corporate Dinner, Corporate
          Workshop,{" "}
        </li>
        <li className="mt-5">
          Family Dayout, Student Dayout, Couple Night Stay, Candlelight Dinner,
          Destination Wedding,{" "}
        </li>
        <li className="mt-5">
          Horse Riding, Boating, Kayaking, Birthday Celebration, Walking track,
          Tent Living, DJ Party,31st Night celebration
        </li>
        <li className="mt-5">
          Pohela Boishakh Celebration, Fishing, and many more.
        </li>
      </div>
    </section>
  );
};

export default EnvironmentalProtection;
