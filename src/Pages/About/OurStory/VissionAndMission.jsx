import missionImage from "../../../assets/images/About/Our-story/mission2.jpg";
import visionImage from "../../../assets/images/About/Our-story/vision-image.png";

const VissionAndMission = () => {
  return (
    <section className=" bg-[#5C5151] text-white">
      <div className="flex mx-20 p-20">
        <div className="">
          <h1 className="text-6xl "><span className="mr-10">V</span><span className="mr-10">I</span><span className="mr-10">S</span><span className="mr-10">I</span><span className="mr-10">O</span><span>N</span></h1>
          <p className="text-xl mr-10 my-10">
            To become the most trusted brand in the region by offering
            comprehensive solutions to the diverse needs of the communities we
            serve.
          </p>
          <img src={visionImage} alt="Vision Image" />
        </div>
        <div className="scroll-m-8 hover:scroll-m-0">
          <h1 className="text-6xl "><span className="mr-10">M</span><span className="mr-10">I</span><span className="mr-10">S</span><span className="mr-10">S</span><span className="mr-10">I</span><span className="mr-10">O</span><span>N</span></h1>
          <p className="text-xl mr-10 my-10">
            To set new standards through innovation and sustainable solutions
            that exceed the expectations of all our stakeholders.
          </p>
          <img src={missionImage} alt="Mission Image" />
        </div>
      </div>
    </section>
  );
};

export default VissionAndMission;
