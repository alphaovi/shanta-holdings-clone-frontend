// import missionImage from "../../../assets/images/About/Our-story/mission2.jpg";
// import visionImage from "../../../assets/images/About/Our-story/vision-image.png";
import useOurStoryData from "../../../Hooks/useOurStoryData";
import Loading from "../../../Shared/Loading/Loading";

const VissionAndMission = () => {
  const [ourStory] = useOurStoryData();

  if (!ourStory) {
    return (
      <div>
       <Loading></Loading>
      </div>
    );
  }

  return (
    <section className=" bg-[#5C5151] text-white">
      <div className="lg:grid grid-cols-2 mx-20 p-20 ">
        <div className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300">
          <h1 className="lg:text-6xl ">
            <span className="mr-10">V</span>
            <span className="mr-10">I</span>
            <span className="mr-10">S</span>
            <span className="mr-10">I</span>
            <span className="mr-10">O</span>
            <span >N</span>
          </h1>
          <p className="text-xl mr-10 my-10">{ourStory.visionTitle}</p>
          <img className=" h-[600px]" src={ourStory.visionImage} alt="Vision Image" />
        </div>
        <div className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300 lg:mt-0 mt-40">
          <h1 className="lg:text-6xl ">
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
