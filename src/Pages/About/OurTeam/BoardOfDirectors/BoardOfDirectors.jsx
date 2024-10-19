import managingDirectorImage from "../../../../assets/images/About/Our-Team/Rectangle_5804.2e16d0ba.fill-498x624-c0 (1).png";
import director1 from "../../../../assets/images/About/Our-Team/Rectangle_5805_1InQy3r.2e16d0ba.fill-498x624-c0.png"
import director2 from "../../../../assets/images/About/Our-Team/Rectangle_5806.2e16d0ba.fill-498x624-c0 (1).png"
import director3 from "../../../../assets/images/About/Our-Team/Rectangle_5807_YlcJGdv.2e16d0ba.fill-498x624-c0.png"




const BoardOfDirectors = () => {
  const managingDirectorDetails =
    "A distinguished and perceptive entrepreneur, Khondoker Monir Uddin, the founder and promoter of Shanta, opts to do business by providing world-class products and services in Bangladesh. With his visionary leadership and extensive business knowledge, Shanta drives forward to not only provide superior quality products and services but to demonstrate unparalleled foresight by developing iconic projects which are the epitome of modern architecture, safe, functional and comfortable living. The reputation and success of Shanta are testaments to his strong ethics and relentless focus on quality, innovation and social responsibility. He is widely regarded as one of the most successful entrepreneurs in Bangladesh.";
  return (
    <section>
      <div className="my-20">
        <h1 className="text-6xl font-bold text-center">Board Of Directors</h1>
      </div>
      <div className="mx-20">
        <div className="flex">
          <div className="flex-1">
            <img src={managingDirectorImage} alt="" />
          </div>
          <div className="flex-1 p-40">
            <h3 className="uppercase text-2xl font-bold">
              Mr Khondoker monir uddin
            </h3>
            <h4 className="my-4 text-[#918721] text-xl">Managing Director</h4>
            <p>{managingDirectorDetails.slice(0, 300)}</p>
            <button className="uppercase  mt-5 underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
              Show more
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="mb-10 flex-1 p-2">
            <img src={director1} alt="" />
            <h3 className="text-xl font-bold uppercase my-3">Mrs. jasmine sultana</h3>
            <h4 className="text-xl uppercase text-[#918721] my-3">Director</h4>
            <button className="text-xl uppercase underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">Show bio +</button>
          </div>
          <div className="mb-10 flex-1 p-2">
            <img src={director2} alt="" />
            <h3 className="text-xl font-bold uppercase my-3">Mr saif khondoker</h3>
            <h4 className="text-xl uppercase text-[#918721] my-3">Director</h4>
            <button className="text-xl uppercase underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">Show bio +</button>
          </div>
          <div className="mb-10 flex-1 p-2">
            <img src={director3} alt="" />
            <h3 className="text-xl font-bold uppercase my-3">MS MATESHA KHONDOKER</h3>
            <h4 className="text-xl uppercase text-[#918721] my-3">Director</h4>
            <button className="text-xl uppercase underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">Show bio +</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
