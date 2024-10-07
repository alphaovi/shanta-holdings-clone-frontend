import { useEffect, useState } from "react";

const useProjectData = () => {
  const [featureProjects, setFeatureProjects] = useState([]);
  useEffect(() => {
    fetch("featureProject.json")
      .then((res) => res.json())
      .then((data) => setFeatureProjects(data));
  }, []);
  return [featureProjects];
};

export default useProjectData;
