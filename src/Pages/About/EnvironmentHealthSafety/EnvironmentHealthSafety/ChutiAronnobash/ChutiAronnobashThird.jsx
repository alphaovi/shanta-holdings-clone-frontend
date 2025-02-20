import safetyImage1 from "../../../../../assets/images/About/EHS/2/bhawal-cottage-thumb.jpg";
import { useContext } from "react";
import { DarkModeContext } from "../../../../../Contexts/NightLightContext";

const ChutiAronnobashThird = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section>
      <div
        className={`grid grid-cols-2 m-20 ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        <div>
          <img className="w-[28rem]" src={safetyImage1} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-10">Resort Details</h1>
          <li className="mb-5">
            Project Location: Bilashara, Vadhune, Gazipur, Pubail, Bangladesh
          </li>
          <li className="mb-5">
            <a href="https://www.facebook.com/aronnobashresortbd" target="_blank" rel="noopener noreferrer">
              FB: www.facebook.com/aronnobashresortbd
            </a>
          </li>
          <li className="mb-5">
            <a href="https://www.youtube.com/@Aronnobashresortbd" target="_blank" rel="noopener noreferrer">
              https://www.youtube.com/@Aronnobashresortbd
            </a>
          </li>
          <li className="mb-5">
            <a href="https://aronnobashbd.com" target="_blank" rel="noopener noreferrer">
              Website: aronnobashbd.com
            </a>
          </li>
        </div>
      </div>
    </section>
  );
};

export default ChutiAronnobashThird;