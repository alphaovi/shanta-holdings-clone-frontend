import Explore from "./Explore/Explore";
import "./Explores.css";

const Explores = () => {
  return (
    <section className="font-familyProjects px-4 sm:px-6 md:px-8 lg:px-12">
      <div>
        <h1 className="mb-10 text-center uppercase text-3xl sm:text-4xl md:text-5xl">
          Explore
        </h1>
      </div>
      <div>
        <Explore />
      </div>
    </section>
  );
};

export default Explores;
