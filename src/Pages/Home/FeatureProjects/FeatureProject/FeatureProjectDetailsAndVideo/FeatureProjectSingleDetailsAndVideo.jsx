import useFeatureProjectsSingleFullData from "../../../../../Hooks/useFeatureProjectsSingleFullData";
import Loading from "../../../../../Shared/Loading/Loading";

const FeatureProjectSingleDetailsAndVideo = () => {
  const [featureProjectSingleFullDetails, isLoading] =
    useFeatureProjectsSingleFullData();
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (!featureProjectSingleFullDetails) {
    return <div>No Project Details Found.</div>;
  }
  return (
    <div className="text-black">
      <h1>{featureProjectSingleFullDetails.projectName}</h1>
      <p>{featureProjectSingleFullDetails.projectType}</p>
      <p>{featureProjectSingleFullDetails.address}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default FeatureProjectSingleDetailsAndVideo;
