import axios from "axios";
import { useEffect, useState } from "react";


const useInvestmentPhoto = () => {
  const [investmentBenefitPhotos, setInvestmentPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/investmentPhoto/investmentPhoto`
        );
        const data = response.data.data;
        setInvestmentPhotos(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);
  return [investmentBenefitPhotos, isLoading];
};

export default useInvestmentPhoto;
