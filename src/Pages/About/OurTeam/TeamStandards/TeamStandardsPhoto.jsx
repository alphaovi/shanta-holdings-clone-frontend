import useTeamCoverAndMD from "../../../../Hooks/useTeamCoverAndMD";

const TeamStandardsPhoto = () => {
  const [ourManagementTeamDatas, , error] = useTeamCoverAndMD();

  // Display error message if fetching fails
  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // Show a loading message until data is fetched
  if (!ourManagementTeamDatas) {
    return <div>
    <span className="loading loading-bars loading-xs"></span>
    <span className="loading loading-bars loading-sm"></span>
    <span className="loading loading-bars loading-md"></span>
    <span className="loading loading-bars loading-lg"></span>
  </div>;
  }

  return (
    <div>
      {/* Ensure teamCoverPhoto exists */}
      <img
        src={ourManagementTeamDatas.teamCoverPhoto}
        alt="Team Cover"
        className="w-full h-auto"
      />
    </div>
  );
};

export default TeamStandardsPhoto;
