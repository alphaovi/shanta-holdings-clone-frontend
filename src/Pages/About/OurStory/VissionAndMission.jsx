// import missionImage from "../../../assets/images/About/Our-story/mission2.jpg";
// import visionImage from "../../../assets/images/About/Our-story/vision-image.png";
import useOurStoryData from "../../../Hooks/useOurStoryData";

const VissionAndMission = () => {
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
    <section className=" bg-[#5C5151] text-white">
      <div className="lg:flex mx-20 p-20 ">
        <div className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300">
          <h1 className="text-6xl ">
            <span className="mr-10">V</span>
            <span className="mr-10">I</span>
            <span className="mr-10">S</span>
            <span className="mr-10">I</span>
            <span className="mr-10">O</span>
            <span>N</span>
          </h1>
          <p className="text-xl mr-10 my-10">{ourStory.visionTitle}</p>
          <img className=" h-[600px]" src={ourStory.visionImage} alt="Vision Image" />
        </div>
        <div className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300">
          <h1 className="text-6xl ">
            <span className="mr-10">M</span>
            <span className="mr-10">I</span>
            <span className="mr-10">S</span>
            <span className="mr-10">S</span>
            <span className="mr-10">I</span>
            <span className="mr-10">O</span>
            <span>N</span>
          </h1>
          <p className="text-xl mr-10 my-10">{ourStory.missionTitle}</p>
          <img
            className="w-full h-[600px]"
            src={ourStory.misssionImage}
            alt="Mission Image"
          />
        </div>
      </div>
    </section>
  );
};

export default VissionAndMission;
