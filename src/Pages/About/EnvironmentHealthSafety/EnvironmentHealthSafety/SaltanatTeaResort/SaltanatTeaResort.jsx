import environmentalProtectionImage1 from "../../../../../assets/images/About/EHS/4/66371bad924c6.jpg";
import environmentalProtectionImage2 from "../../../../../assets/images/About/EHS/4/banner-1.jpg";
import environmentalProtectionImage3 from "../../../../../assets/images/About/EHS/4/ezgif-75e5fc34657b32.jpg";
import environmentalProtectionImage4 from "../../../../../assets/images/About/EHS/4/ezgif-7cde54b859d8f7.jpg";
import { useContext } from "react";
import { DarkModeContext } from "../../../../../Contexts/NightLightContext";


const SaltanatTeaResort = () => {
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
          Available Facilities in Saltanat Tea Resort
        </h1>
        <p className="mt-5 ">A new branch of Chuti Resort Limited named The Saltanat Tea Resort is being launched in Srimangal, Sylhet Division, one of Bangladesh's major tourist zones. Nearly 27 acres of land in the tea capital of Srimangal, The Saltanat Inn project will feature villas, cottages, and all the modern amenities of a luxury resort.
        </p>
      </div>
    </section>
  );
};

export default SaltanatTeaResort;
