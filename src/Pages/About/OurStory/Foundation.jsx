import { useState } from "react";
import labourPhoto from "../../../assets/images/About/Our-story/Foundation.2e16d0ba.fill-518x648-c0 (1).jpg";

const Foundation = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="text-white bg-[#5C5151]">
      <div>
        <h1 className="text-6xl font-normal ml-20 text-white p-10">
          Foundation
        </h1>
      </div>
      <div className="m-10 flex">
        <div className="mx-20">
          <img style={{ width: "6000px" }} src={labourPhoto} alt="Foundation" />
        </div>
        <div className="mt-40">
          <h3 className="text-2xl font-bold mb-5">
            Construction a new standard of excellence
          </h3>
          <p>
            Shanta started its journey in 1988 in the ready-made garment (RMG)
            sector and became one of the forerunners in RMG export by
            establishing leading industries such as Shanta Garments Ltd, Shanta
            Industries Ltd, Shanta Washworks Ltd, GDS Chemicals Ltd and Shanta
            Denims Ltd. Earning a solid reputation as an important vendor for
            some of the most renowned apparel brands of USA and Europe.
          </p>
          <br />
          <p>
            Shanta is also a key founding member and majority stakeholder of the{" "}
            <a
              className="font-bold underline cursor-pointer"
              href="Innovative It"
            >
              Innovative it
            </a>{" "}
            - the promoter of the world-class{" "}
            <a
              className="font-bold underline cursor-pointer"
              href="https://www.evercarebd.com/"
            >
              Evercare Hospitals Dhaka
            </a>
            (previously Apollo Hospital) and Chattogram,{" "}
            <a
              className="font-bold underline cursor-pointer"
              href="https://www.isdbd.org/"
            >
              International School Dhaka (ISD)
            </a>
            ,
            <a
              className="font-bold underline cursor-pointer"
              href="https://glenrich.edu.bd/"
            >
              Glenrich International School
            </a>
            ,
            <a
              className="font-bold underline cursor-pointer"
              href="https://ucbbd.org/"
            >
              Universal College Bangladesh (UCB)
            </a>
            <a
              className="font-bold underline cursor-pointer"
              href="https://dpsstsdhaka.org/"
            >
              Delhi Public Schools
            </a>
            , Dhaka. Moreover,
            <a
              className="font-bold underline cursor-pointer"
              href="https://www.shantasecurities.com/"
            >
              Shanta Securities Ltd.
            </a>
            <a
              className="font-bold underline cursor-pointer"
              href="https://www.shanta-aml.com/"
            >
              Shanta Asset Management Ltd.
            </a>
            and
            <a
              className="font-bold underline cursor-pointer"
              href="https://shantaequity.net/"
            >
              Shanta Equity Ltd.
            </a>
            were established in 2015 with the aim of setting higher standards in
            the financial services sector. Shanta has a long track record of
            construction since 1991, having been involved in various projects of
            its own and of the STS Group. It has built the iconic Safura Tower-
            the 16 storied commercial landmark at Banani, the 200,000 sft
            multi-facility centrally air conditioned International School Dhaka
            (ISD) at Bashundhara, the 125,000 sft Delhi Public School at Uttara,
            state-of-the-art RMG factories such as its 150,000 sft Shanta
            Industries Ltd, the 150,000 sft Shanta Denims Ltd and the 35,000 sft
            Shanta Washworks Ltd at Dhaka EPZ.
          </p>
          <br />

          {showMore && (
            <div
              style={{
                maxHeight: showMore ? "150px" : "0",
                overflowY: "auto",
                transition: "max-height 0.5s ease",
              }}
            >
              <p>
                Furthermore, the team was also involved in the construction of
                Apollo Hospitals Dhaka - the 550,000 sft first
                multi-disciplinary super-specialty hospital of the country.
              </p>
              <br />
              <p>
                Eventually exiting the RMG sector and dissolving its interests
                to pursue the passion for construction, Shanta Holdings Limited
                (SHL) was established in 2005 with a mission to change the
                lifestyle of city dwellers by providing modern, functional and
                aesthetic living and working spaces that can only be compared to
                the most successful developers of the globe.
              </p>
              <br />
              <p>
                With the belief that construction is not just about building
                structures - but an Art, SHL goes beyond the traditional scopes
                of property development and integrates the best the world has to
                offer. Since then, SHL has emerged as the most reputed and
                fastest growing real estate developer of the country.
              </p>
              <br />
              <p>
                <a
                  className="font-bold underline cursor-pointer"
                  href="https://shantalifestyle.com/"
                >
                  Shanta Lifestyle
                </a>{" "}
                was established in 2022 with an aim to cater to the rising
                interior design and home decor needs of Bangladeshi consumers
                searching for luxury and exclusivity.
              </p>
              <br />
              <p>
                <a
                  className="font-bold underline cursor-pointer"
                  href="https://shantalife.com/"
                >
                  Shanta Life Insurance
                </a>{" "}
                offers tailored solutions with the latest tech for comprehensive
                coverage and personalized service.
              </p>
            </div>
          )}
          <button
            className="btn btn-outline my-10 text-white hover:oranger-400 hover:bg-white-500"
            onClick={handleShowMore}
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Foundation;
