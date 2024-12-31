import { useEffect, useState } from "react";

const useProjectData = () => {
  const [featureProjects, setFeatureProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/feature-project/feature-project`
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          setFeatureProjects(data);
        } else if (data?.data && Array.isArray(data.data)) {
          setFeatureProjects(data.data);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
    };
    fetchProjects();
  }, []);
  return [featureProjects, error];
};

export default useProjectData;
