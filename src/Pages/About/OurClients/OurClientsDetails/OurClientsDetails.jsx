import { useEffect, useState } from "react";
import OurClientsDetail from "./OurClientsDetail";

const OurClientsDetails = () => {
  const [clientsDetails, setClientsDetails] = useState([]);

  useEffect(() => {
    fetch("clientsData.json")
      .then((res) => res.json())
      .then((data) => {
        setClientsDetails(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-2 m-5 opacity-100 ">
      {clientsDetails.map((clientDetail) => (
        <OurClientsDetail
          key={clientDetail.id}
          clientDetail={clientDetail}
        ></OurClientsDetail>
      ))}
    </div>
  );
};

export default OurClientsDetails;
