import axios from "axios";
import { useEffect, useState } from "react";

const useProjectFullDetails = () => {
  const [ongoingProjectFullDetails, setOngoingProjectFullDetails] = useState(
    []
  );
  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          "https://chutiharmony-server.vercel.app/api/v1/project-details/project-details"
        );
        const data = response.data.data;
        setOngoingProjectFullDetails(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
      }
    };
    fetchedData();
  }, []);
  return [ongoingProjectFullDetails, error, loading];
};

export default useProjectFullDetails;
