import { useState } from "react";
import { Link } from "react-router-dom";


const OurBusinessDetail = ({ businessDetail }) => {
  const { name, img, services } = businessDetail;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-10">
        <img src={img} alt="" />
      </div>
      <div className="-mt-[136px] opacity-75 absolute bg-black w-[400px] h-24">
        <h3 className="mt-5 text-white text-center font-bold">{name}</h3>
      </div>
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex flex-col justify-center items-center transition-all duration-300">
          <h1 className="text-white text-2xl font-bold">{name}</h1>
          <div className="text-white underline ">
            {services.map((service, i) => (<p className="hover:text-[#8F8933] m-5 font-bold" key={i}><Link to={"/"}>{service}</Link></p>))}
          </div>
        </div>
      )}
    </div>
  );
};


export default OurBusinessDetail;
