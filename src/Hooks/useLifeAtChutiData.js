import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useWhyChutiData = () => {
  const [whyChutiData, setWhyChutiData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const loadedData = await axios.get(
          `https://chuti-harmony-server.vercel.app/api/v1/life-at-chuti/life-at-chuti`
        );
        if (loadedData.data.data) {
          setWhyChutiData(loadedData.data.data);
        } else {
          toast.error("Unexpected data error");
        }
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchedData();
  }, []);
  return [whyChutiData, error, loading];
};

export default useWhyChutiData;
