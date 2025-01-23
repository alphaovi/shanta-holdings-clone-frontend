import { useContext } from "react";
// import ourBusinessImage from "../../../../assets/images/About/Our-Business/Our_Business_Ban.2e16d0ba.fill-2560x1440-c0.format-avif.jpg";
import { DarkModeContext } from "../../../../Contexts/NightLightContext";
const OurBusinessTitleAndPhoto = () => {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <section>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 px-20">
        <h1 className={`${darkMode ? 'text-white' : "text-black"} text-8xl  text-center`}>OUR BUSINESS</h1>
      </div>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 px-20">
        <img src={"https://i.ibb.co.com/GVQpwfG/1.jpg"} alt="" />
      </div>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 px-20 mt-20">
        <img src={"https://i.ibb.co.com/6nJy2vv/2.jpg"} alt="" />
      </div>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 px-20 mt-20">
        <img src={"https://i.ibb.co.com/wJdNmYJ/3.jpg"} alt="" />
      </div>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 px-20 mt-20">
        <img src={"https://i.ibb.co.com/DzZJGp5/4.jpg"} alt="" />
      </div>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 px-20 mt-20">
        <img src={"https://i.ibb.co.com/cYVXzHx/5.jpg"} alt="" />
      </div>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 px-20 mt-20">
        <img src={"https://i.ibb.co.com/g6js1sH/6.jpg"} alt="" />
      </div>
      
    </section>
  );
};

export default OurBusinessTitleAndPhoto;
