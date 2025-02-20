import Marquee from "react-fast-marquee";
import "./ProfessionalManagement.css";
import { useContext, useEffect, useRef, useState } from "react";
import { GoMute, GoUnmute } from "react-icons/go";
import { DarkModeContext } from "../../../Contexts/NightLightContext";
import { MotionAnimate } from "react-motion-animate";
import YouTube from "react-youtube";

const ProfessionalManagement = () => {
  const { darkMode } = useContext(DarkModeContext);
  const photoRef = useRef(null);
  const containerRef = useRef(null);
  const [isMute, setIsMute] = useState(true);
  const [offset, setOffset] = useState(0);

  const videoOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: isMute ? 1 : 0,
      controls: 0,
    },
  };

  const toggleHandleMute = () => setIsMute(!isMute);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && photoRef.current) {
        const container = containerRef.current;
        const photo = photoRef.current;
        const containerRect = container.getBoundingClientRect();
        const containerTop = containerRect.top;

        // Adjust photo position when the container is visible
        if (containerTop <= 0 && containerTop > -containerRect.height) {
          setOffset(-containerTop * 0.5); // Adjust the factor (0.5) for parallax speed
        } else if (containerTop > 0) {
          setOffset(0.8); // Reset to original position
        } else {
          setOffset(-containerRect.height * 0.8); // Stop at the bottom
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MotionAnimate animation="scrollFadeIn" scrollPositions={[0.1, 0.9]}>
      <section className="relative">
        <div
          ref={containerRef}
          className="parallax-container ml-40 z-10 relative"
          style={{ height: "600px" }}
        >
          {/* <img
            ref={photoRef}
            src="https://cms.shantaholdings.com/images/EJOqFsIILymJOKrS2Si5Dgt__Hk=/56/fill-395x263-c0/Home_small_image.png?t=1727929586352"
            alt=""
            style={{
              transform: `translateY(${offset}px)`,
              transition: "transform 0.1s ease-out",
            }}
          /> */}
        </div>
        <div className="text-marque -mt-[550px] text-gradient-to-b from-transparent to-gray-500 font-familyPortfolio overflow-hidden">
          <Marquee>
            <p
              className={`${
                darkMode ? "text-white" : "text-black bg-[#FFFFFF80]"
              } text-5xl font-bold uppercase space-y-5`}
            >
              Prime Locations . Leading Consultants . Top Quality Materials .
              Uncompromising Safety . On-time Delivery . Professional Management
            </p>
          </Marquee>
        </div>
        <div className="w-3/4 mx-auto mb-10 items-center relative -mt-6">
          <YouTube
            videoId="DcY2QIf4D9I" // Replace with your YouTube video ID
            opts={videoOptions}
            className="w-full lg:h-[750px]"
          />
          <p
            onClick={toggleHandleMute}
            className="flex justify-end mr-8 relative text-white"
            style={{ top: "-90px" }}
          >
            {isMute ? (
              <GoMute className="border rounded-full w-16 h-16 p-2" />
            ) : (
              <GoUnmute className="border rounded-full w-16 h-16 p-2 " />
            )}
          </p>
        </div>
      </section>
    </MotionAnimate>
  );
};

export default ProfessionalManagement;
