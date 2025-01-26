const AdminAllProjectData = ({ projectFullDetail, index }) => {
  const {
    projectName,
    projectCoverPhoto,
    status,
    address,
    architectName,
    landArea,
    facing,
    frontRoad,
    sizeOfUnits,
    numberOfCarParking,
    landScapingConsultant,
    loadOrientation,
    specialtyOfTheLand,
    numberOfApartments,
    numberOfBaseMents,
    rajukApprovalNo,
  } = projectFullDetail;

  return (
    <div>
        <div>
            <h1 className="text-xl mb-2 font-bold">Project : {index+1}</h1>
        </div>
      <div className="border broder-black rounded p-2">
        <p>Project Name: {projectName}</p>
        <p>Status: {status}</p>
        <p>Address: {address}</p>
        <p>Architect name: {architectName}</p>
        <p>Land area: {landArea}</p>
        <p>Facing: {facing}</p>
        <p>Front road: {frontRoad}</p>
        <p>Size of units: {sizeOfUnits}</p>
        <p>Number of car parking: {numberOfCarParking}</p>
        <p>Land scaping consultant: {landScapingConsultant}</p>
        <p>Load orientation: {loadOrientation}</p>
        <p>Specialty of the land: {specialtyOfTheLand}</p>
        <p>Number of apartments: {numberOfApartments}</p>
        <p>Number of basements: {numberOfBaseMents}</p>
        <p>Rajuk approval no: {rajukApprovalNo}</p>
        <img className="w-60 h-60 mt-5" src={projectCoverPhoto} alt="" />
        <div className="flex gap-20 p-2">
          <button className="btn btn-warning">Edit</button>
          <button className="btn btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AdminAllProjectData;
