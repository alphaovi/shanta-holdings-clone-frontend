import { useContext } from "react";
import Foundation from "./Foundation";
import OurLogoRationale from "./OurLogoRationale";
import OurStoryPhoto from "./OurStoryPhoto";
import Values from "./Values/Values";
import VissionAndMission from "./VissionAndMission";
import WhoWeAre from "./WhoWeAre";
import  { DarkModeContext } from "../../../Contexts/NightLightContext";

const OurStory = () => {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <section className={`${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <div >
        <h1 className="text-8xl font-bold text-center  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          Our Story
        </h1>
      </div>
      <div>
        <OurStoryPhoto></OurStoryPhoto>
        <Foundation></Foundation>
        <WhoWeAre></WhoWeAre>
        <OurLogoRationale></OurLogoRationale>
        <VissionAndMission></VissionAndMission>
        <Values></Values>
      </div>
      
      
    </section>
  );
};

export default OurStory;
