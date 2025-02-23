import { useNavigate } from "react-router-dom";

const AllNewsAndEvent = ({ allNewsAndEvent }) => {
  const { _id, title, coverphoto, date, newsOrEvent } = allNewsAndEvent;

  const navigate = useNavigate();

  const handleRedirectToFullDetails = () => {
    navigate(`/news-events/${_id}`);
  };

  return (
    <div
      className="relative cursor-pointer"
      onClick={handleRedirectToFullDetails}
    >
      <div>
        <img className="mt-5" src={coverphoto} alt="" />
        <h1
          className="day_outline mt-5"
          style={{
            color: "transparent",
            fontSize: "101px",
            fontWeight: 500,
            WebkitTextStroke: "1px #fff",
            display: "inline-block",
            lineHeight: "95%",
            paddingLeft: "10px",
            position: "absolute",
            zIndex: 4,
            top: 0,
            left: 0,
          }}
        >
          {date}
        </h1>
      </div>

      <div className="bg-[#FFFAF4]">
        <div className="flex justify-end mt-5">
          {" "}
          <h1 className="border border-gray-600 text-small rounded-full px-2 ">
            {newsOrEvent}
          </h1>
        </div>

        <div className="bg-[#FFFAF4] mb-20 p-2">
          <h1 className="text-2xl mt-4">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default AllNewsAndEvent;
