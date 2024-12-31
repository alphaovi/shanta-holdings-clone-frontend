import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./LetConnect.css";
import { BsArrowRight } from "react-icons/bs";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
import axios from "axios";

const LetConnect = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [connectData, setConnectData] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in ms
      once: false, // Repeats animation
      mirror: false, // Disable reverse animation
      offset: 0,
    });
  }, []);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/connect/connect"
        );
        const data = response.data.data;
        setConnectData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  return (
    <section className="flex styleForMainDiv">
      <div className="flex-1">
        <div
          className={`mb-20 font-familyConnect w-20 uppercase
          }`}
        >
          <h2 className={`${darkMode ? "text-white" : "text-[#3C3C3B]"}`}>
            Let's Connect
          </h2>
        </div>
        <div className="font-familyPortfolio">
          <div>
            <div className="flex justify-between">
              <div>
                <Link to={"/clients"} className="text-[#978C21] text-2xl mt-2">
                  {connectData.title1}
                </Link>
              </div>
              <div className="flex justify-end">
                <Link to={""}>
                  <BsArrowRight className="text-[#6D6729]" />
                </Link>
              </div>
            </div>
            <div>
              <p className="text-xl font-thin mb-4 w-[75%]">
                {connectData.description1}
              </p>
            </div>
            <div className="border-t border-gray-400 w-full my-5"></div>
          </div>
          <div>
            <div>
              <div>
                <Link
                  to={"/landowners"}
                  className="text-[#978C21] text-2xl mt-2"
                >
                  {connectData.title2}
                </Link>
              </div>
              <div className="flex justify-end">
                <Link>
                  <BsArrowRight className="text-[#6D6729]" />
                </Link>
              </div>
            </div>
            <div>
              <p className="text-xl font-thin mb-4 w-[75%]">
                {connectData.description2}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="w-full h-1/2 flex-1"
        style={{
          padding: "50px",
          width: "50%",
          textAlign: "center",
        }}
      >
        <img
          className={``}
          style={{ height: "300px", width: "600px" }}
          src={
            connectData.image
          }
          alt=""
        />
      </div>
    </section>
  );
};

export default LetConnect;
