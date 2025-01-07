import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../Contexts/NightLightContext";
import axios from "axios";

const GetInTouch = () => {
  const { darkMode } = useContext(DarkModeContext);

  const [contactData, setContactData] = useState("");

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          "https://chutiharmony-server.vercel.app/api/v1/connect/connect"
        );
        const data = response.data.data;
        setContactData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  return (
    <section
      className={`${
        darkMode ? "bg-[#5C5151] text-white" : "bg-[#ECE5DA] text-[#3C3C3B]"
      }`}
    >
      <div>
        <h1 className="text-6xl text-center mt-20 font-medium py-12 uppercase">
          Get in Touch
        </h1>
      </div>
      <div className="-mt-32">
        <div className="hero  min-h-screen">
          <div className="hero-content grid lg:grid-cols-2 gap-20 font-medium mt-32">
            <div>
              <img src="https://i.ibb.co.com/yp0H29x/8.jpg" alt="" />
            </div>
            <div className="text-center lg:text-left text-3xl">
              <div>
                <h1 className="text-[#a7ad2e]">Hotline</h1>
                <p
                  className={`${
                    darkMode ? "text-white" : "text-[#3c3c3b]"
                  } mt-5  hover:underline hover:cursor-pointer`}
                >
                  {contactData.hotline}
                </p>
              </div>
              <div className="mt-10">
                <h1 className="text-[#a7ad2e]">Sales</h1>
                <p
                  className={`${
                    darkMode ? "text-white" : "text-[#3c3c3b]"
                  } mt-5  hover:underline hover:cursor-pointer`}
                >
                  {contactData.sales}
                </p>
              </div>
              <div className="mt-10">
                <h1 className="text-[#a7ad2e]">Email</h1>
                <p
                  className={`${
                    darkMode ? "text-white" : "text-[#3c3c3b]"
                  } mt-5  w-96 hover:underline hover:cursor-pointer`}
                >
                  {contactData.email}
                </p>
              </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
