import { useContext } from "react";
import ourLogo from "../../../assets/images/About/Our-story/SHL_Logo.original.png";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
import useOurStoryData from "../../../Hooks/useOurStoryData";

const OurLogoRationale = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [ourStory] = useOurStoryData();

  if (!ourStory) {
    return (
      <div>
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <section
      className={`flex ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex-1">
        <img className="w-full h-auto p-20" src={ourLogo} alt="Our Logo" />
      </div>
      <div className="flex-1 p-20  text-xl -mt-18">
        <h1 className={`${darkMode ? "text-white" : "text-black"} uppercase text-5xl`}>
          Our logo <br />
          rationale
        </h1>
        <br />
        <p>{ourStory.logoDescriptionFirst}</p>
        <br />
        <p>{ourStory.logoDescriptionSecond}</p>
        <br />
        <p>{ourStory.logoDescriptionThired}</p>
      </div>
    </section>
  );
};

export default OurLogoRationale;
