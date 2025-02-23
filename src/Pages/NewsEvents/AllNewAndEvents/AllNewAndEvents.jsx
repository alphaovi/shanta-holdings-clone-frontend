import useAllNewsAndEventsData from "../../../Hooks/useAllNewsAndEventsData";
import AllNewsAndEvent from "./AllNewsAndEvent";

const AllNewsAndEvents = () => {
  const [allNewsAndEvents, isLoading] = useAllNewsAndEventsData();
  return (
    <div className="overflow-hidden relative z-10 grid grid-cols-3 gap-6 ml-20">
      {allNewsAndEvents.map((allNewsAndEvent) => (
        <AllNewsAndEvent
          key={allNewsAndEvent._id}
          allNewsAndEvent={allNewsAndEvent}
        ></AllNewsAndEvent>
      ))}
    </div>
  );
};

export default AllNewsAndEvents;
