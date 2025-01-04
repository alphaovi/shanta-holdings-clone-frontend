import { useState } from "react";
import chiefExecutiveOfficer from "../../../../assets/images/About/Our-Team/MRMHABIBULBASIT.2e16d0ba.fill-498x624-c0.png";
import ExecutiveOfficer1 from "../../../../assets/images/About/Our-Team/Rectangle_5792.2e16d0ba.fill-498x624-c0.png";
import ExecutiveOfficer2 from "../../../../assets/images/About/Our-Team/Rectangle_5793.2e16d0ba.fill-498x624-c0.png";
import ExecutiveOfficer3 from "../../../../assets/images/About/Our-Team/Rectangle_5794.2e16d0ba.fill-498x624-c0.png";
import useTeamCoverAndMD from "../../../../Hooks/useTeamCoverAndMD";

const SeniorManagement = () => {
  const [ourManagementTeamDatas, error] = useTeamCoverAndMD();
  const [showBio, setShowBio] = useState(false);

  // Show error message if API fails
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Show loading state until data is fetched
  if (!ourManagementTeamDatas) {
    return <div>Loading...</div>;
  }

  const handleShowBio = () => {
    setShowBio(!showBio);
  };
  return (
    <section className="bg-[#5C5151]">
      <div className="my-20">
        <h1 className="text-6xl font-bold text-center">
          Senior management Team
        </h1>
      </div>
      <div className="mx-20">
        <div className="flex">
          <div className="flex-1 p-40">
            <h3 className="uppercase text-2xl font-bold">
              {ourManagementTeamDatas.ceoName}
            </h3>
            <h4 className="my-4 text-[#918721] text-xl">
              Chief Executive officer
            </h4>
            <p>{ourManagementTeamDatas.ceoAbout.slice(0, 300)}</p>
            {showBio && (
              <p>{ourManagementTeamDatas.ceoAboutMore.slice(0, 300)}</p>
            )}
            <button
              onClick={() => handleShowBio()}
              className="uppercase  mt-5 underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
            >
              {showBio ? "Hide Bio" : "Show more"}
            </button>
          </div>
          <div className="flex-1">
            <img src={ourManagementTeamDatas.ceoPhoto} alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="mb-10 flex-1 p-2">
            <img src={ExecutiveOfficer1} alt="" />
            <h3 className="text-xl font-bold uppercase my-3">
              Mr. MD. Mujibur Rahman
            </h3>
            <h4 className="text-xl uppercase text-[#918721] my-3">
              Executive Director
            </h4>
            <button className="text-xl uppercase underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
              Show bio +
            </button>
          </div>
          <div className="mb-10 flex-1 p-2">
            <img src={ExecutiveOfficer2} alt="" />
            <h3 className="text-xl font-bold uppercase my-3">
              MR. MIR Mahmud Ali Dilip
            </h3>
            <h4 className="text-xl uppercase text-[#918721] my-3">
              Executive Director
            </h4>
            <button className="text-xl uppercase underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
              Show bio +
            </button>
          </div>
          <div className="mb-10 flex-1 p-2">
            <img src={ExecutiveOfficer3} alt="" />
            <h3 className="text-xl font-bold uppercase my-3">
              Mr. M. Anisul Haque, FCMA
            </h3>
            <h4 className="text-xl uppercase text-[#918721] my-3">
              Executive Director, Group Finance
            </h4>
            <button className="text-xl uppercase underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
              Show bio +
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeniorManagement;
