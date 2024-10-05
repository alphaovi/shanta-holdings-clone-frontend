import { useContext } from "react";
import HeaderCarousel from "./HeaderCarousel";
import { DarkModeContext } from "../../../Contexts/NightLightContext";

const HeaderAndPhotos = () => {
  const darkModeContext = useContext(DarkModeContext);
  const {darkMode} = darkModeContext;
  
  return (
    <div style={{"backgroundColor": darkMode ? "#212121" : "white", "color": darkMode ?  "#212121" : "white" }}>
      <div>
        <h1 className="text-8xl font-thin text-black letter-spacing-6 mb-10 text-center" >
          <span></span>
          <span className="m-2 p-2 text-white">s</span>
          <span className="m-2 p-2 text-white">e</span>
          <span className="m-2 p-2 text-white">t</span>
          <span className="m-2 p-2 text-white">t</span>
          <span className="m-2 p-2 text-white">i</span>
          <span className="m-2 p-2 text-white">n</span>
          <span className="m-2 p-2 text-white">g</span>
          <span className="m-2 p-2 text-white"></span>
          <span className="m-2 p-2 text-white">s</span>
          <span className="m-2 p-2 text-white">t</span>
          <span className="m-2 p-2 text-white">a</span>
          <span className="m-2 p-2 text-white">n</span>
          <span className="m-2 p-2 text-white">d</span>
          <span className="m-2 p-2 text-white">a</span>
          <span className="m-2 p-2 text-white">r</span>
          <span className="m-2 p-2 text-white">d</span>
          <span className="m-2 p-2 text-white">s</span>
        </h1>
      </div>
      <div className="mb-10">
        <HeaderCarousel></HeaderCarousel>
      </div>
    </div>
  );
};

export default HeaderAndPhotos;
