import useProjectFullDetailsSingleData from "../../../../Hooks/useProjectFullDetailsSingleData";
import Loading from "../../../../Shared/Loading/Loading";
import "./SingleProjectFullDetailsCover.css";

const SingleProjetFullDetailsCover = () => {
  const [projectFullDetails, loading] = useProjectFullDetailsSingleData();

  if (loading) {
    <Loading></Loading>;
  }

  return (
    <div className="bg-[#454226] -mt-32 ">
      <div className="flex justify-end">
        <h1 className="text-8xl mt-32 mr-40 projectWordDesignForLight absolute ">
          {projectFullDetails.projectName}
        </h1>
        <img
          className="w-10/12 h-[750px] py-20 items-end mt-24"
          src={projectFullDetails.projectCoverPhoto}
          alt=""
        />
      </div>
      <div></div>
    </div>
  );
};

export default SingleProjetFullDetailsCover;
