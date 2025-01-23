import InvestmentBanner from "../InvestmentBanner/InvestmentBanner";
import InvestmentPropertyPhotoAndFacilities from "../InvestmentPropertyPhotoAndFacilities/InvestmentPropertyPhotoAndFacilities";


const Investment = () => {
  return (
    <div className="font-serif">
      <InvestmentBanner></InvestmentBanner>
      <InvestmentPropertyPhotoAndFacilities></InvestmentPropertyPhotoAndFacilities>
    </div>
  );
};

export default Investment;
