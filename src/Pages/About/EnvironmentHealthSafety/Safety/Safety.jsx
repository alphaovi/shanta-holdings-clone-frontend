import safetyImage1 from "../../../../assets/images/About/EHS/Rectangle_60.2e16d0ba.fill-395x273-c0 (1).png";
import safetyImage2 from "../../../../assets/images/About/EHS/EHS_Safety.2e16d0ba.fill-1016x573-c0.png";
const Safety = () => {
  return (
    <section>
      <div className="grid grid-cols-2 m-20 text-white">
        <div>
          <img src={safetyImage1} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-10">Safety</h1>
          <li className="mb-5">Zero Tolerance Safety Policy</li>
          <li className="mb-5">Risk Assessment & Mitigation</li>
          <li className="mb-5">Crisis Response</li>
          <li className="mb-5">Safety Excellence Recognition</li>
          <li className="mb-5">Effective Security Management</li>
        </div>
      </div>
      <div className="mx-40 mb-28">
        <img src={safetyImage2} alt="" />
      </div>
    </section>
  );
};

export default Safety;
