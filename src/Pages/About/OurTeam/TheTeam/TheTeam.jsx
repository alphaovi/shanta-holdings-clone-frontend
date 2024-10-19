
import teamPhoto from "../../../../assets/images/About/Our-Team/Rectangle_39.2e16d0ba.fill-2560x1440-c0.png";


const TheTeam = () => {
  
  return (
    <section>
      <div className="my-20">
        <h1 className="text-6xl text-center">The Team</h1>
      </div>
      <div>
        <img src={teamPhoto} alt="" />
      </div>
      <div className="flex text-xl bg-[#5C5151] ">
        <p className="flex-1 mx-10 p-20">
          The hidden sutra for successfully turning dreams into reality is our
          regular practice. Within our dedicated workforce, one division focuses
          on bridging the ambitious goals of our clients, while the other
          actively brings these aspirations to life.
        </p>
        <p className="flex-1 mx-10 p-20">
          In the pursuit of our overarching mission to enhance lifestyles and
          unlock potential, Shanta Holdings has curated a team of highly
          experienced professionals, adeptly trained both domestically and
          internationally. Our roster boasts over 200 full-time employees,
          encompassing a diverse range of expertise in development, management,
          and construction disciplines. A harmonious blend of individuals with
          backgrounds in business and technical fields tirelessly endeavors to
          fulfill the core mission of Shanta Holdings.
        </p>
      </div>
    </section>
  );
};

export default TheTeam;
