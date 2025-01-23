import { useState } from "react";
// import labourPhoto from "../../../assets/images/About/Our-story/Foundation.2e16d0ba.fill-518x648-c0 (1).jpg";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import useOurStoryData from "../../../Hooks/useOurStoryData";
import Loading from "../../../Shared/Loading/Loading";

const Foundation = () => {
  // load data for our story foundation
  const [ourStory] = useOurStoryData();
  const [showMore, setShowMore] = useState(false);

  if (!ourStory) {
    return (
      <div>
        
        <Loading></Loading>
      </div>
    );
  }

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="text-white bg-[#5C5151] ">
      <div>
        <h1 className="text-6xl font-normal ml-20 text-white p-10 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300">
          Foundation
        </h1>
      </div>
      <div className="m-10 lg:flex">
        <div className="mx-20">
          <img
            className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300"
            style={{ width: "6000px" }}
            src={ourStory.foundationImage}
            alt="Foundation"
          />
        </div>
        <div className="mt-40 ">
          <h3 className="text-2xl font-bold mb-5">
            {ourStory.foundationTitle}
          </h3>
          <p className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300">
            {ourStory.foundationDescriptionFirst}
          </p>
          <br />
          <p className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300">
            {ourStory.foundationDescriptionSecond}
          </p>
          <br />

          {showMore && (
            <div
              className="transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300"
              style={{
                maxHeight: showMore ? "150px" : "0",
                overflowY: "auto",
                transition: "max-height 0.5s ease",
              }}
            >
              {ourStory.foundationDescriptionReadMore}
            </div>
          )}
          <button
            className="btn btn-outline my-10 text-white hover:oranger-400 hover:bg-[#5C5151] hover:text-white underline border-x-4 transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={handleShowMore}
          >
            <span>Read More </span>
            <FaRegArrowAltCircleDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Foundation;
