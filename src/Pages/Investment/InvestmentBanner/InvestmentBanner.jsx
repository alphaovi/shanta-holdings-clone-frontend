import investmentBannerPhoto from "../../../assets/images/Investment/axonometric-scaled.jpeg";

const InvestmentBanner = () => {
  return (
    <section>
      <div className="relative">
        {/* Image Container */}
        <div className="relative">
          {/* Background Image */}
          <img
            className="h-[480px] w-full object-cover"
            src={investmentBannerPhoto}
            alt="Investment Banner"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-serif text-center">
          <p className="text-3xl uppercase">Ideal Place to Invest</p>
          <h1 className="text-5xl font-bold text-[#beb52b] px-10">
            Investment & Ownership Opportunities in Chuti Cox's Bazar LTD
          </h1>
        </div>
      </div>
    </section>
  );
};

export default InvestmentBanner;
