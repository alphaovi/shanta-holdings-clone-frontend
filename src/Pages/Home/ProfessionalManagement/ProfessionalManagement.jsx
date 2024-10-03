import Marquee from "react-fast-marquee";

const ProfessionalManagement = () => {
  return (
    <section>
      <div className="">
        <Marquee>
          <p className="text-4xl font-bold text-white uppercase">
            Prime Locations . Leading Consultants . Top Quality Materials .
            Uncompromising Safety . On-time Delivery . Professional Management
          </p>
        </Marquee>
      </div>
      <div className="w-3/4 mx-auto mb-10 items-center">
        <video
          src="https://cms.shantaholdings.com/media/media/SHL_Final_Without_Super-28.02.24_2.mp4"
          controls
        ></video>
      </div>
    </section>
  );
};

export default ProfessionalManagement;
