import ProjectInMap from "./ProjectInMap/ProjectInMap";
import "./Projects.css";
import 'mapbox-gl/dist/mapbox-gl.css';

const Projects = () => {
  return (
    <section className="mb-20">
      <div className="flex justify-end mr-20 mb-8">
        <h1 className="text-8xl font-bold">Projects</h1>
      </div>
      <div className="border-4 border-red-500 w-4/6 mx-auto">
        <ProjectInMap></ProjectInMap>
      </div>
    </section>
  );
};

export default Projects;
