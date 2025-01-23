import { useEffect, useState } from "react";
// import valuePhoto from "../../../../assets/images/About/Our-story/Values_OVWVTw0.2e16d0ba.fill-602x401-c0 (1).png";
import Value from "./Value";
import useOurStoryData from "../../../../Hooks/useOurStoryData";
import Loading from "../../../../Shared/Loading/Loading";

const Values = () => {
  const [values, setValues] = useState([]);
  const [ourStory] = useOurStoryData();

  useEffect(() => {
    fetch("values.json")
      .then((res) => res.json())
      .then((data) => setValues(data));
  }, []);

  if (!ourStory) {
    return (
      <div>
       <Loading></Loading>
      </div>
    );
  }
  return (
    <section className="bg-[#212121]">
      <div>
        <h1 className="lg:text-8xl text-white text-center mb-15 pt-10">
          <span className="lg:mr-40">V</span>
          <span className="lg:mr-40">A</span>
          <span className="lg:mr-40">L</span>
          <span className="lg:mr-40">U</span>
          <span className="lg:mr-40">E</span>
          <span>S</span>
        </h1>
      </div>
      <div className="flex w-full">
        <div className="w-full flex-1 h-auto p-20">
          <img src={ourStory.valueImage} alt="" />
          <p className="text-white font-semibold mt-4">
            {ourStory.valueDescription}
          </p>
        </div>
        <div className="flex-1 text-white">
          {values.map((value) => (
            <Value key={value._id} value={value}></Value>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
