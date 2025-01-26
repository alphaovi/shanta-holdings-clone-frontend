

const AdminCreateProjectData = () => {
    
  return (
    <div className="mt-5">
      <form>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Project Name: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>

        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Statue: </p>
          <select className="select select-primary w-96">
            <option disabled  className="text-center">
              Project Status
            </option>
            <option className="text-center" >Ongoing</option>
            <option className="text-center" >Upcoming</option>
            <option className="text-center" >Completed</option>
          </select>
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Address: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Architect Name: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Land Area: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Facing: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Front Road: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Size Of Units: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Number Of Car Parking: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Land Scaping Consultant: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Load Orientation: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Specialty Of The Land: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Number Of Apartments: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Number Of Basements: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Rajuk Approval No: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-5 items-center">
          <p className="w-32">Project Cover Photo: </p>
          <input
            className="border border-gray-500 p-2 w-96 rounded"
            type="file"
          />
        </div>

        <div className="flex gap-2 mt-5 items-center">
          <input
            className="btn btn-outline hover:bg-[#8E8A20] hover:border-none border border-gray-500 p-2 w-40 rounded"
            type="submit"
            value="Create New Project"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminCreateProjectData;
