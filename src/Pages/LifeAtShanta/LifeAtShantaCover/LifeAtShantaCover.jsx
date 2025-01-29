import { useContext } from "react";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
import useLifeAtChutiData from "../../../Hooks/useLifeAtChutiData";
import Loading from "../../../Shared/Loading/Loading";
import AnimatedTextUptoDown from "../../../Shared/AnimatedText/AnimatedTextUptoDown";

const LifeAtShantaCover = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [whyChutiData, error, loading] = useLifeAtChutiData();
  return (
    <section
      className={`${
        darkMode ? "bg-black text-white" : "bg-[#FFFAF4] text-black"
      }`}
    >
      <div>
        <h1 className="cssanimation leHangAndDropLeft text-8xl text-center relative -mb-10 uppercase">
          <AnimatedTextUptoDown text="Life At" animationType="sequence" />
          <br />
          <AnimatedTextUptoDown text="Chuti Harmony" animationType="random" />
        </h1>
      </div>
      <div>
        {loading ? (
          <Loading></Loading>
        ) : (
          <img src={whyChutiData.coverPhoto} alt="" />
        )}
      </div>
    </section>
  );
};

export default LifeAtShantaCover;
