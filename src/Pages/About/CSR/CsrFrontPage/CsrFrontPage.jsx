import hospitalPhoto from "../../../../assets/images/About/CSR/Rectangle_5803_2.original.png"
const CsrFrontPage = () => {
  return (
    <div className="text-white">
      <div>
        <h1 className="text-8xl font-bold text-center">CSR</h1>
      </div>
      <div className="mx-20">
        <img src={hospitalPhoto} alt="" />
      </div>
      <div>
        <h1 className="text-7xl text-center uppercase m-20 opacity-95">Your Trusted <br /><span className="font-bold">Healthcare </span> provider<br />for<span className="font-bold"> women and children</span></h1>
      </div>
    </div>
  );
};

export default CsrFrontPage;
