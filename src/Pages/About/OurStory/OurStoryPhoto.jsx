// import frontImage from '../../../assets/images/About/Our-story/Front-imageUntitled_design.2e16d0ba.fill-2560x1440-c0.png'
import useOurStoryData from "../../../Hooks/useOurStoryData";
const OurStoryPhoto = () => {
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
    <div>
      <img
        className="opacity-75 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300"
        src={ourStory.storyBannerImage}
        alt=""
      />
    </div>
  );
};

export default OurStoryPhoto;
