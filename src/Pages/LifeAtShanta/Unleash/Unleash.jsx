import { useContext } from "react";
import { LuArrowRightCircle } from "react-icons/lu";
import { DarkModeContext } from "../../../Contexts/NightLightContext";

const Unleash = () => {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={`p-20 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div>
        <h1 className="text-7xl text-center">
          Unleash Your <span className="font-bold">Potential</span> <br /> with{" "}
          <span className="font-bold">Chuti Harmony's</span> Winning Team!
        </h1>
      </div>
      <div className="mt-20">
        <p className="text-xl text-center">
          At Chuti Harmony, your potential is limited only by your talents and
          ambitions. Within Chuti Harmony or beyond, our people make a difference
          because of the leaders they become while here. You will do more than
          just build! Our aspiration is to change lifestyles, business practices
          and even society.
        </p>
      </div>
      <div className="mt-10 text-white hover:text-[#5F613A]">
        <button className="uppercase flex items-center text-xl mx-auto"><LuArrowRightCircle className="mr-2" /> Current Opening</button>
      </div>
    </div>
  );
};

export default Unleash;
