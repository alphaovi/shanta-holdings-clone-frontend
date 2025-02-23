import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../OnGoingProjects/OnGoingProject/OnGoingProject.css"; 

const AllProject = ({ project }) => {
  const { _id, projectName, projectCoverPhoto, address } = project;

  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleRedirect = () => {
    navigate(`/project/${_id}`); 
  };

  return (
    <section>
      <div
        className="project-card w-[377px] h-[458px] lg:mt-0 mt-20 p-5 relative overflow-hidden"
        style={{ border: "none" }}
        onClick={handleRedirect}
        onMouseMove={handleMouseMove}
      >
        <img
          className="project-image w-[367px] h-[367px] mb-2"
          src={projectCoverPhoto}
          alt=""
        />
        <div
          className="view-details"
          style={{
            transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          }}
        >
          View Details
        </div>
        <h1 className="text-2xl font-bold text-[#8E8A1F] mb-2">{projectName}</h1>
        <h3 className="font-serif">{address}</h3>
      </div>
    </section>
  );
};

export default AllProject;
