import { useState } from "react";

const OurClientsDetail = ({ clientDetail }) => {
  const { img } = clientDetail;

  return (
    <>
      <div className="p-10 hover:-translate-y-1 hover:scale-180  duration-300 px-20 relative">
        <img src={img} alt="" />
      </div>
    </>
  );
};

export default OurClientsDetail;
