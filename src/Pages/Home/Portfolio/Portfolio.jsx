import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="grid gap-4 grid-cols-2 p-10 mb-10">
      <div>
        <img
          src="https://cms.shantaholdings.com/images/EJOqFsIILymJOKrS2Si5Dgt__Hk=/56/fill-395x263-c0/Home_small_image.png?t=1727929586352"
          alt=""
        />
      </div>
      <div>
        <p className="text-xl font-bold text-white">
          Our real estate portfolio is a mark of distinction. Featuring the
          country's most selective developments, we promise investors and buyers
          an unmatched level of service. Our success is built on strong
          standards and a keen eye for detail, embodying luxury and excellence.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
