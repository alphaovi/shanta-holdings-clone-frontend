import ourBusinessImage from "../../../../assets/images/About/Our-Business/Our_Business_Ban.2e16d0ba.fill-2560x1440-c0.format-avif.jpg";
const OurBusinessTitleAndPhoto = () => {
  return (
    <section>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 px-20">
        <h1 className="text-8xl text-white text-center">OUR BUSINESS</h1>
      </div>
      <div className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 px-20">
        <img src={ourBusinessImage} alt="" />
      </div>
      
    </section>
  );
};

export default OurBusinessTitleAndPhoto;
