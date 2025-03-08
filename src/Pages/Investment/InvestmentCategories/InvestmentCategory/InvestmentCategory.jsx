const InvestmentCategory = ({ investmentCategory }) => {
  const { name, description, icon } = investmentCategory;
  return (
    <div className="bg-[#8F8933] px-10 py-2 text-white w-96 h-96">
      <div className="">
        <img
          style={{ filter: "brightness(0) invert(1)" }}
          className="w-16 mt-5"
          src={icon}
          alt=""
        />
        <h1 className="text-3xl font-bold my-2 w-96 mt-5">{name}</h1>
        <p className="text-xl mt-5">{description}</p>
      </div>
    </div>
  );
};

export default InvestmentCategory;
