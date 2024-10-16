import { useEffect, useState } from "react";
import valuePhoto from "../../../../assets/images/About/Our-story/Values_OVWVTw0.2e16d0ba.fill-602x401-c0 (1).png";
import Value from "./Value";




const Values = () => {
  const [values, setValues] = useState([]);


  useEffect(() => {
    fetch("values.json")
    .then(res => res.json())
    .then(data => setValues(data))
  } , [])
  return (
    <section>
      <div>
        <h1 className="text-8xl text-white text-center my-20">
          <span className="mr-40">V</span>
          <span className="mr-40">A</span>
          <span className="mr-40">L</span>
          <span className="mr-40">U</span>
          <span className="mr-40">E</span>
          <span>S</span>
        </h1>
      </div>
      <div className="flex">
        <div className="w-full h-auto">
          <img src={valuePhoto} alt="" />
          <p>
            Our vision & mission are being made into reality through the belief
            and implementation of 6 core values. Integrity, commitment,
            innovation, quality focus, agility and value people are embedded in
            our DNA and drives toward our motto of “setting standards”.
          </p>
        </div>
        <div>
          {values.map(value => <Value key={value._id} value={value}></Value>)}
        </div>
      </div>
    </section>
  );
};

export default Values;
