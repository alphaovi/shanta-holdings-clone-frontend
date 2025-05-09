import { useState } from "react";
import projectPageBackground from "../../../assets/images/projects/project-cover.jpg";
import OnGoingProject from "./OnGoingProject/OnGoingProject";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import useProjectFullDetails from "../../../Hooks/useProjectFullDetails";

const OnGoingProjects = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null); // Track which dropdown is hovered
  const [selectedStatus, setSelectedStatus] = useState("Ongoing"); // Default to "Ongoing"
  const [ongoingProjectFullDetails, error] = useProjectFullDetails();

  // Filter projects based on selected status
  const filteredProjects = ongoingProjectFullDetails.filter(
    (project) => project.status === selectedStatus
  );

  return (
    <section className="bg-[#FFFAF4]">
      <div className="">
        <img
          loading="lazy"
          className="w-full h-48 md:h-64 lg:h-96 -mt-16 md:-mt-24 lg:-mt-32"
          src={projectPageBackground}
          alt="Project Cover"
        />
        <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase text-center text-white -mt-20 md:-mt-40 lg:-mt-60">
          Exclusive properties in prime location
        </h1>
      </div>
      <div className="absolute bg-[#827466] p-4 w-full md:w-[72rem] mt-5 left-1/2 transform -translate-x-1/2 grid grid-cols-1 md:grid-cols-3 gap-4 z-10">
        {/* Project Type Dropdown */}
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="m-1 text-white text-lg md:text-xl"
          >
            <span className="flex items-center gap-2">
              Project Type
              {hoveredDropdown === "status" ? (
                <MdOutlineKeyboardArrowUp className="mt-1 md:mt-2" />
              ) : (
                <MdOutlineKeyboardArrowDown className="mt-1 md:mt-2" />
              )}
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu overflow-auto text-lg md:text-xl z-[1] w-52 h-28 p-2 shadow border-none bg-[#827466] text-white"
          >
            <li>
              <a>Residential</a>
            </li>
            <li>
              <a>Commercial</a>
            </li>
          </ul>
        </div>

        {/* Status Dropdown */}
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="m-1 text-white text-lg md:text-xl"
            onMouseEnter={() => setHoveredDropdown("status")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <span className="flex items-center gap-2">
              Status
              {hoveredDropdown === "status" ? (
                <MdOutlineKeyboardArrowUp className="mt-1 md:mt-2" />
              ) : (
                <MdOutlineKeyboardArrowDown className="mt-1 md:mt-2" />
              )}
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu overflow-auto text-lg md:text-xl z-[1] w-52 h-42 p-2 shadow border-none bg-[#827466] text-white absolute"
          >
            <li>
              <a onClick={() => setSelectedStatus("Ongoing")}>Ongoing</a>
            </li>
            <li>
              <a onClick={() => setSelectedStatus("Upcoming")}>Upcoming</a>
            </li>
            <li>
              <a onClick={() => setSelectedStatus("Completed")}>Completed</a>
            </li>
          </ul>
        </div>

        {/* Search Input */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Projects"
            className="input input-bordered w-full md:w-auto rounded-none bg-[#827466] text-[#fff]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center mx-4 md:mx-32 lg:mt-40 mt-72 mb-20 bg-[#FFFAF4] relative z-0">
        {error && <p className="text-red-500 text-center">{error.message}</p>}
        {filteredProjects.map((ongoingProjectFullDetail) => (
          <OnGoingProject
            key={ongoingProjectFullDetail._id}
            ongoingProjectFullDetail={ongoingProjectFullDetail}
          />
        ))}
      </div>
    </section>
  );
};

export default OnGoingProjects;
