import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Contexts/NightLightContext";
import "./Navbar.css";

const Navbar = () => {
  const darkModeContext  = useContext(DarkModeContext);

  const { darkMode, setDarkMode } = darkModeContext;
  // const [darkMode, setDarkMode] = useState(false);

  // const handleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };


  return (
    <div >
      <div className="px-20 py-5 navbar">
        <div className="flex-1 ml-20">
          <Link to={"/"} className="text-start block">
            <span className="text-4xl">SHANTA</span>
            <span className="flex space-x-3 mt-3 font-thin ">
              <ul>H</ul>
              <ul>O</ul>
              <ul>L</ul>
              <ul>D</ul>
              <ul>I</ul>
              <ul>N</ul>
              <ul>G</ul>
              <ul>S</ul>
            </span>
          </Link>
        </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal px-1">
            <li className="bg-none">
              <Link
                onClick={() => setDarkMode(!darkMode)}
                className={`${darkMode ? "dark-mode" : "light-mode"}`}
              >
                {darkMode ? "Light" : "Dark"}
              </Link>
            </li>
            <li
              className="dropdown"
              style={{ position: "relative", width: "350px" }}
            >
              <details>
                <summary
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    // gap: "5px",
                    cursor: "pointer",
                  }}
                >
                  Menu
                </summary>
                <ul className="dropdown-content bg-base-100 rounded-t-none p-2 ">
                  <li>
                    <input className="border-b-5" style={{borderBottom:"1px solid white"}} type="text" placeholder="Search Projects" />
                  </li>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Projects</a>
                  </li>
                  <li>
                    <a>Life At Shanta</a>
                  </li>
                  <li>
                    <a>Careers</a>
                  </li>
                  <li>
                    <a>News & Events</a>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
