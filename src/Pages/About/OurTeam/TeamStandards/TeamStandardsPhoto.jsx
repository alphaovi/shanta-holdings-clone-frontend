import useTeamCoverAndMD from "../../../../Hooks/useTeamCoverAndMD";

const TeamStandardsPhoto = () => {
  const [ourManagementTeamDatas, , error] = useTeamCoverAndMD();

  // Display error message if fetching fails
  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  // Show a loading message until data is fetched
  if (!ourManagementTeamDatas) {
    return <p>Loading...</p>;
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
