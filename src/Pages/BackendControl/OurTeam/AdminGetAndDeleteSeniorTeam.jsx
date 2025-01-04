const AdminGetAndDeleteSeniorTeam = ({ ourSeniorTeam, onDelete }) => {
  const { _id, name, designation, bio, photo } = ourSeniorTeam;

  const handleDeleteSeniorTeamMember = () => {
    const confirmDelete = window.confirm("Are you sure to delete this senior team memeber");
    if(confirmDelete){
        onDelete(_id);
    }
  }

  return (
    <div className="border border-lime-400 my-5 p-5 ">
      <h1 className="text-2xl">Name: {name}</h1>
      <h3 className="text-xl mt-5">Designation: {designation}</h3>
      <p className="text-xl mt-5">Bio: {bio}</p>
      <img className="mt-5" src={photo} alt="" />
      <button
      onClick={handleDeleteSeniorTeamMember}
       className="btn btn-error border-none mt-5 text-white ">
        Delete
      </button>
    </div>
  );
};

export default AdminGetAndDeleteSeniorTeam;
