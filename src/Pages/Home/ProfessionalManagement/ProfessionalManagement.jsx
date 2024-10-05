import Marquee from "react-fast-marquee";
import "./ProfessionalManagement.css";
import { useEffect, useRef, useState } from "react";

const ProfessionalManagement = () => {
  const videoRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(true);
  const [isMute, setIsMute] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    video.muted = isMute;
    video.play();
  }, [isMute]);

  const handleMute = () => {
    const video = videoRef.current;
    setIsMute(!isMute);
    video.muted = !isMute;
  };

  return (
    <section className="">
      <div className="parallax-container ml-40">
        <img
          src="https://cms.shantaholdings.com/images/EJOqFsIILymJOKrS2Si5Dgt__Hk=/56/fill-395x263-c0/Home_small_image.png?t=1727929586352"
          alt=""
        />
      </div>
      <div className="-mt-96 text-gradient-to-b from-transparent to-gray-500">
        <Marquee>
          <p className="text-4xl font-bold text-white uppercase space-y-5 p-4 ">
            Prime Locations . Leading Consultants . Top Quality Materials .
            Uncompromising Safety . On-time Delivery . Professional Management
          </p>
        </Marquee>
      </div>
      <div className="w-3/4 mx-auto mb-10 items-center relative">
        <video
          ref={videoRef}
          src="https://cms.shantaholdings.com/media/media/SHL_Final_Without_Super-28.02.24_2.mp4"
          controls={false}
        ></video>
        <p
          onClick={handleMute}
          className="flex justify-end mr-20 relative "
          style={{ top: "-80px" }}
        >
          {isMute ? "Unmute" : "mute"}
        </p>
      </div>
    </section>
  );
};

export default ProfessionalManagement;
