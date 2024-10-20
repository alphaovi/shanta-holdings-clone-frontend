import healthyPhoto from "../../../../assets/images/About/EHS/Wellbeing.original.png"


const HealthHygiene = () => {
  return (
    <section className="grid grid-cols-2 text-white  p-24">
      <div>
        <h1 className="text-5xl uppercase mb-10">Health, hygiene & <br /> well-being</h1>
        <li className="mb-5">Inclusive Workforce Accommodation</li>
        <li className="mb-5">Accessible Sanitation Facilities</li>
        <li className="mb-5">Medical Campaigns And Training</li>
        <li className="mb-5">Free Medical Care</li>
      </div>
      <div>
        <img src={healthyPhoto} alt="" />
      </div>
    </section>
  );
};

export default HealthHygiene;
