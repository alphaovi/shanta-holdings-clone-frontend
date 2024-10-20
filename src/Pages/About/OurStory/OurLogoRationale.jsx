import ourLogo from "../../../assets/images/About/Our-story/SHL_Logo.original.png";

const OurLogoRationale = () => {
  return (
    <section className="flex ">
      <div className="flex-1">
        <img className="w-full h-auto"  src={ourLogo} alt="Our Logo" />
      </div>
      <div className="flex-1 p-20  text-xl -mt-18 text-white">
        <h1 className="uppercase text-5xl text-white">Our logo <br />rationale</h1>
        <br />
        <p>
          The concept for our logo is derived from the shape of human hands, the
          shape they make when held with the palms facing each other.
        </p>
        <br />
        <p>
          Usually, when we hold an object in our palms, it is something we care
          about, something valuable to us. Like when a blow of air attempts to
          put off a candle that gives us light, we protect it with our palms.
          When a tiny bird falls from its nest, we hold it up and protect it in
          our palms. When a sculptor sculpts a masterpiece, he shapes it using
          his fingers and palms. Hence, our logo depicts the amount of care and
          emotion we put into each and every creation.
        </p>
        <br />
        <p>
          Moreover, it is a symbol that inspires us on a daily basis to be
          caring towards our clients and protect their interests by providing an
          uncompromising level of service and superior products.
        </p>
      </div>
    </section>
  );
};

export default OurLogoRationale;
