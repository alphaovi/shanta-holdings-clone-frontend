import projectPageBackground from "../../../assets/images/projects/project-cover.jpg";

const AllProjects = () => {
    return (
         <section>
              <div className="">
                <img
                  className="w-full h-96 -mt-32"
                  src={projectPageBackground}
                  alt=""
                />
                <h1 className="text-8xl uppercase text-center text-white -mt-60">
                  Exclusive properties in prime location
                </h1>
              </div>
              <div className=" absolute bg-[#827466] p-4 w-3/4  mt-5 left-1/2  transform -translate-x-1/2 grid grid-cols-4 gap-4">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="m-1 text-[#fff] text-xl">
                    All Locations
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu overflow-auto text-xl z-[1] w-52 h-60 p-2 shadow border-none bg-[#827466] text-white"
                  >
                    <li>
                      <a>Banani</a>
                    </li>
                    <li>
                      <a>Gulsan</a>
                    </li>
                    <li>
                      <a>Baridhara</a>
                    </li>
                    <li>
                      <a>Tejgoan</a>
                    </li>
                    <li>
                      <a>Mirpur</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="m-1 text-white text-xl">
                    Status
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu overflow-auto text-xl z-[1] w-52 h-42 p-2 shadow border-none bg-[#827466] text-white"
                  >
                    <li>
                      <a>Ongoing</a>
                    </li>
                    <li>
                      <a>Upcoming</a>
                    </li>
                    <li>
                      <a>Completed</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="m-1 text-white text-xl">
                    Project Type
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu overflow-auto text-xl z-[1] w-52 h-28 p-2 shadow border-none bg-[#827466] text-white"
                  >
                    <li>
                      <a>Residential</a>
                    </li>
                    <li>
                      <a>Commercial</a>
                    </li>
                  </ul>
                </div>
        
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search Projets"
                    className="input input-bordered w-24 md:w-auto rounded-none bg-[#827466] text-[#fff]"
                  />
                </div>
              </div>
            </section>
    );
};

export default AllProjects;