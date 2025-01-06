import { useEffect, useState } from "react";

const LandMarksDetailsAndPhotos = () => {
  const [commitment, setCommitment] = useState("");

  useEffect(() => {
    fetch("https://shanti-holdings-backend.vercel.app/api/v1/withness/withness")
      .then((res) => res.json())
      .then((data) => {
        setCommitment(data.data);
        // console.log(data)
      });
  }, []);

  return (
    <section className="flex cols-3 items-center justify-center text-3xl p-20 font-familyPortfolio">
      <div>
        <div className="mb-20 font-familyPortfolio w-72">
          <p className="text-[#8E8A1F]">{commitment.totalAreaInputOne}+</p>
          <h1>{commitment.totalAreaInputTwo}</h1>
          <p>{commitment.totalAreaInputThree}</p>
        </div>
        <div className="mb-20 font-familyPortfolio lg:w-96">
          <p className="text-[#8E8A1F]">{commitment.activeYearsInputOne}</p>
          <h1>commitment.activeYearsInputTwo</h1>
          <p>commitment.activeYearsInputThree</p>
        </div>
        <div className="mt-20 font-familyPortfolio w-72">
          <p className="text-[#8E8A1F]">
            {commitment.completedProjectsInputOne}
          </p>
          <h1>{commitment.completedProjectsInputTwo}</h1>
          <p>{commitment.completedProjectsInputThree}</p>
        </div>
      </div>
      <div className="block">
        <img src={commitment.image} alt="" />
      </div>
      <div>
        <div className="mb-20 font-familyPortfolio w-72">
          <p className="text-[#8E8A1F]">
            {commitment.numberOfProjectsInputOne}
          </p>
          <h1>{commitment.numberOfProjectsInputTwo}</h1>
          <p>{commitment.numberOfProjectsInputThree}</p>
        </div>
        <div className="mb-20 font-familyPortfolio w-72">
          <p className="text-[#8E8A1F]">{commitment.clientsInputOne}</p>
          <h1>{commitment.clientsInputTwo}</h1>
          <h1>{commitment.clientsInputThree}</h1>
        </div>
        <div className="mt-20 font-familyPortfolio w-72">
          <p className="text-[#8E8A1F]">{commitment.OtherThingsInputOne}</p>
          <h1>{commitment.OtherThingsInputTwo}</h1>
          <p>{commitment.OtherThingsInputThree}</p>
        </div>
      </div>
    </section>
  );
};

export default LandMarksDetailsAndPhotos;
