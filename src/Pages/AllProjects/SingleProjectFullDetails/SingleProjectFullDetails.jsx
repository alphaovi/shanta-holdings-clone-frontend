import useProjectFullDetailsSingleData from "../../../Hooks/useProjectFullDetailsSingleData";
import GetInTouch from "../../Contact/GetInTouch";
import SingleProjectDetails from "./SingleProjectDetail/SingleProjectDetails";
import SingleProjetFullDetailsCover from "./SingleProjectFullDetailsCover/SingleProjetFullDetailsCover";

const SingleProjectFullDetails = () => {
  const [projectFullDetails] = useProjectFullDetailsSingleData();

  return (
    <div>
      <SingleProjetFullDetailsCover></SingleProjetFullDetailsCover>
      <SingleProjectDetails></SingleProjectDetails>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default SingleProjectFullDetails;
