import chiefExecutiveOfficer from "../../../../assets/images/About/Our-Team/MRMHABIBULBASIT.2e16d0ba.fill-498x624-c0.png";
import ExecutiveOfficer1 from "../../../../assets/images/About/Our-Team/Rectangle_5792.2e16d0ba.fill-498x624-c0.png";
import ExecutiveOfficer2 from "../../../../assets/images/About/Our-Team/Rectangle_5793.2e16d0ba.fill-498x624-c0.png";
import ExecutiveOfficer3 from "../../../../assets/images/About/Our-Team/Rectangle_5794.2e16d0ba.fill-498x624-c0.png";

const SeniorManagement = () => {
    const chiefExecutiveOfficerDetails = "Mr. M. Habibul Basit, a well seasoned professional with an illustrious track record, joined Shanta in October 2015 taking up the role of Chief Executive Officer. Prior to joining, Mr. Basit held the position of Managing Director at Archroma Bangladesh Limited for two years, and Chief Operating Officer of Rahimafrooz Accumulators Limited from November 2008 till January 2013. Before Rahimafrooz Mr. Basit worked in Toronto, Canada for Strip Tech, a company specializing in metal stripping and sand blasting. Mr. Basit worked for Rekitt Benckiser in Bangladesh as a Sales Director from January 1998 to July 2001, before which he worked as a National Sales Manager for New Zealand Milk Products, Bangladesh for a span of 4 years. The start of Mr. Basit’s illustrious career was at British American Tobacco, Bangladesh, where he started as a Trainee District Sales Officer in 1985 and went on to become Area Sales & Marketing Manager by 1991. Mr. Basit completed his Masters of Commerce in Marketing from the University of Dhaka, following which he acquired a Post Graduate Diploma in “Marketing Management and Physical Distribution” from Netherlands International Institute for Executive Development, Holland.";
  return (
    <section className="bg-[#5C5151]">
      <div className="my-20">
        <h1 className="text-6xl font-bold text-center">Senior management Team</h1>
      </div>
      <div className="mx-20">
        <div className="flex">
          
          <div className="flex-1 p-40">
            <h3 className="uppercase text-2xl font-bold">
              Mr. M. Habibul basit
            </h3>
            <h4 className="my-4 text-[#918721] text-xl">Chief Executive officer</h4>
            <p>{chiefExecutiveOfficerDetails.slice(0, 300)}</p>
            <button className="uppercase  mt-5 underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
              Show more
            </button>
          </div>
          <div className="flex-1">
            <img src={chiefExecutiveOfficer} alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="mb-10 flex-1 p-2">
            <img src={ExecutiveOfficer1} alt="" />
            <h3 className="text-xl font-bold uppercase my-3">
              Mr. MD. Mujibur Rahman
            </h3>
            <h4 className="text-xl uppercase text-[#918721] my-3">Executive Director</h4>
            <button className="text-xl uppercase underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
              Show bio +
            </button>
          </div>
          <div className="mb-10 flex-1 p-2">
            <img src={ExecutiveOfficer2} alt="" />
            <h3 className="text-xl font-bold uppercase my-3">
              MR. MIR Mahmud Ali Dilip
            </h3>
            <h4 className="text-xl uppercase text-[#918721] my-3">Executive Director</h4>
            <button className="text-xl uppercase underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
              Show bio +
            </button>
          </div>
          <div className="mb-10 flex-1 p-2">
            <img src={ExecutiveOfficer3} alt="" />
            <h3 className="text-xl font-bold uppercase my-3">
              Mr. M. Anisul Haque, FCMA
            </h3>
            <h4 className="text-xl uppercase text-[#918721] my-3">Executive Director, Group Finance</h4>
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
