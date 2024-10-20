import { useEffect, useState } from "react";
import OurBusinessDetail from "./OurBusinessDetail";

const OurBusinessDetails = () => {
  const [businessDetails, setBusinessDetails] = useState([]);
  useEffect(() => {
    fetch("businessDetails.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBusinessDetails(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-3 p-10">
      {businessDetails.map((businessDetail) => (
        <OurBusinessDetail
          key={businessDetail.id}
          businessDetail={businessDetail}
        ></OurBusinessDetail>
      ))}
    </div>
  );
};

export default OurBusinessDetails;
