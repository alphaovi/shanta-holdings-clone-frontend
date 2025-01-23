import environmentalProtectionImage1 from "../../../../assets/images/About/EHS/EHS_Leed.2e16d0ba.fill-311x233-c0 (1).png";
import environmentalProtectionImage2 from "../../../../assets/images/About/EHS/3.2e16d0ba.fill-311x233-c0 (1).jpg";
import environmentalProtectionImage3 from "../../../../assets/images/About/EHS/1.2e16d0ba.fill-311x233-c0.jpg";
import environmentalProtectionImage4 from "../../../../assets/images/About/EHS/APU00349-HDR-min.2e16d0ba.fill-311x233-c0.jpg";
import { useContext } from "react";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";


const EnvironmentalProtection = () => {

  const {darkMode} = useContext(DarkModeContext);
  return (
    <section className={`${darkMode ? 'text-white' : "text-black"} flex  p-20 `}>
      <div className="grid grid-cols-2 gap-4 mr-40">
        <img src={environmentalProtectionImage1} alt="" />
        <img src={environmentalProtectionImage2} alt="" />
        <img src={environmentalProtectionImage3} alt="" />
        <img src={environmentalProtectionImage4} alt="" />
      </div>
      <div className={`${darkMode ? "text-white" : "text-black"}`}>
        <h1 className="text-6xl mb-10">Environmental Protection</h1>        
            <li className="mt-5">Sustainable Construction Practices</li>
            <li className="mt-5">Holistic Environment Impact Analysis</li>
            <li className="mt-5">Green certification Commitment</li>
            <li className="mt-5">Cutting-Edge Energy Efficiency</li>
            <li className="mt-5">Usage Of World-Class Materials</li>
            <li className="mt-5">State-Of-The-Art Construction Technology</li>
        
      </div>
    </section>
  );
};

export default EnvironmentalProtection;
