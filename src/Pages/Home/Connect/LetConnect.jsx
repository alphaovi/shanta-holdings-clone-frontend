import { Link } from "react-router-dom";

const LetConnect = () => {
  return (
    <section className="flex">
      <div className="p-40">
        <div className="mb-20">
          <h2 className="text-6xl font-bold">Let's Connect</h2>
        </div>
        <div>
          <Link to={"/clients"} className="text-[#978C21] text-2xl mt-2">
            Clients
          </Link>
          <p className="text-xl font-thin mb-4">
            Discover exquisite apartments, commercial spaces, and unmatched
            luxury with Shanta Holdings Ltd. to turn your dreams into a reality.
          </p>
          <Link to={"/landowners"} className="text-[#978C21] text-2xl mt-2">
            Landowners
          </Link>
          <p className="text-xl font-thin mb-4">
            Share your land with Shanta Holdings and be a part of the
            architectural splendor. Fill out the form to explore this
            partnership.
          </p>
        </div>
      </div>
      <div className="w-full mt-20">
        <img
          src={
            "https://cms.shantaholdings.com/images/-vv1vUVM1IMNkwW5kLCPW_vlbmg=/165/fill-1024x1270-c0/view-professional-handshake-business-people_23-2150917092.png?t=1728725498510"
          }
          alt=""
        />
      </div>
    </section>
  );
};

export default LetConnect;
