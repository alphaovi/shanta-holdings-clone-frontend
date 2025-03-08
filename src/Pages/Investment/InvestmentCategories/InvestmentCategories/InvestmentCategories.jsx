import axios from "axios";
import { useEffect, useState } from "react";
import InvestmentCategory from "../InvestmentCategory/InvestmentCategory";

const InvestmentCategories = () => {
  const [investmentCategories, setInvestmentCategories] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      const responseData = await axios.get("investmentCategories.json");
      if (responseData.data) {
        setInvestmentCategories(responseData.data);
      }
    };
    fetchedData();
  }, []);
  return (
    <div>
      <div className="grid justify-center bg-[#DB3131] text-black">
        <div>
          <div
            className=""
          ></div>
          <div className="">
            <h2 className="uppercase text-2xl my-5">Ownership</h2>
          </div>
          <div></div>
        </div>
        <h1 className="uppercase text-3xl text-white">Ownership categories</h1>
        <p className="text-lg mt-5">
          There are 5 Categories of Ownership in Five star Chuti Resort Cox’s
          Bazar.
        </p>
        <ul className="text-lg my-5">
          <li>1. Standard Category</li>
          <li>2. Premimun Category</li>
          <li>3. Platinum Category</li>
          <li>4. Royal Category</li>
          <li>5. Suite Category</li>
        </ul>
      </div>
      <div className="lg:grid grid-cols-3 gap-5 p-10">
        {investmentCategories.map((investmentCategory) => (
          <InvestmentCategory
            key={investmentCategory._id}
            investmentCategory={investmentCategory}
          ></InvestmentCategory>
        ))}
      </div>
    </div>
  );
};

export default InvestmentCategories;
