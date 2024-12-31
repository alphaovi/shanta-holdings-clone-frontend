import useOurStoryData from "../../../Hooks/useOurStoryData";

const WhoWeAre = () => {

  const [ourStory] = useOurStoryData();

  if (!ourStory) {
    return <p>Loading...</p>;
  }

  return (
    <section
      className="bg-[#5C5151] mb-5 -mt-10
     text-white"
    >
      <div className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300">
        <h1 className="text-6xl ml-28 font-bold">Who We Are</h1>
      </div>
      <div className="flex">
        <p className="text-xl px-16 mx-16 mt-10 ">
         {ourStory.whoWeAreFirstDescription}
        </p>
        <p className="text-xl px-10 mx-16 mt-10">
          {ourStory.whoWeAreSecondDescription}
          <br />
        </p>
      </div>
    </section>
  );
};

export default WhoWeAre;
