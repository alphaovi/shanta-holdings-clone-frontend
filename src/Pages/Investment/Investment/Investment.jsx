import InvestmentBanner from "../InvestmentBanner/InvestmentBanner";
import InvestmentCategories from "../InvestmentCategories/InvestmentCategories/InvestmentCategories";
import InvestmentPropertyPhotoAndFacilities from "../InvestmentPropertyPhotoAndFacilities/InvestmentPropertyPhotoAndFacilities";


const Investment = () => {
  return (
    <div className="font-serif">
      <InvestmentBanner></InvestmentBanner>
      <InvestmentPropertyPhotoAndFacilities></InvestmentPropertyPhotoAndFacilities>
      <InvestmentCategories></InvestmentCategories>
    </div>
  );
};

export default Investment;
