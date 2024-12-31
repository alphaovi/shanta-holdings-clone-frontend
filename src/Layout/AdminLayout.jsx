import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <div>
        <div className="h-screen">
          <ul className="menu text-white min-h-full w-80 p-4 bg-[#8E8A20] ">
            <div className="text-center mb-20">
              <Link to="/">
                <p>Chuti Harmony</p>
              </Link>
            </div>
            {/* Sidebar content here */}
            <li>
              <Link to={"/admin"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/admin/about-us"}>About Us</Link>
            </li>
            <li>
              <Link to={"/admin/feature-project"}>Feature Projects</Link>
            </li>
            <li>
              <Link to={"/admin/commitment"}>Achievements</Link>
            </li>
            <li>
              <Link to={"/admin/explore"}>Explore</Link>
            </li>
            <li>
              <Link to={"/admin/connect"}>Connect</Link>
            </li>
            <li>
              <Link to={"/admin/our-story"}>Our Story</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
