import useOurStoryData from "../../../Hooks/useOurStoryData";

const WhoWeAre = () => {
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
    <section
      className="bg-[#5C5151] mb-5 -mt-10
     text-white"
    >
      <div className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300 py-5">
        <h1 className="text-6xl ml-28 font-bold">Who We Are</h1>
      </div>
      <div className="grid lg:grid-cols-2 ml-10">
        <p className="text-xl px-10 mx-10 my-10">
          {ourStory.whoWeAreFirstDescription}
        </p>
        <p className="text-xl px-10 mx-10 my-10">
          {ourStory.whoWeAreSecondDescription}
          <br />
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
