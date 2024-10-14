import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Contexts/NightLightContext";
import "./Navbar.css";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const Navbar = () => {
  const darkModeContext = useContext(DarkModeContext);
  const [showSubitems, setShowSubitems] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  const { darkMode, setDarkMode } = darkModeContext;
  // const [darkMode, setDarkMode] = useState(false);

  // const handleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  const handleShowSubitems = () => {
    setShowSubitems(!showSubitems);
    setShowProjects(false);
    setShowContacts(false);
  };
  const handleShowProjects = () => {
    setShowSubitems(false);
    setShowProjects(!showProjects);
    setShowContacts(false);
  };

  const handleShowContacts = () => {
    setShowSubitems(false);
    setShowProjects(false);
    setShowContacts(!showContacts);
  };

  const handleBackClick = () => {
    setShowSubitems(false);
  };
  const handleBackButtonInProject = () => {
    setShowProjects(false);
  };
  const handleBackButtonInContact = () => {
    setShowContacts(false);
  };

  const navMainItems = (
    <>
      <li className="dropdown" style={{ position: "relative", width: "350px" }}>
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
              <input
                className="border-b-5"
                style={{ borderBottom: "1px solid white" }}
                type="text"
                placeholder="Search Projects"
              />
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a
                className="dropdwon flex items-center"
                onClick={handleShowSubitems}
              >
                About Shanta
                <FaRegArrowAltCircleRight className="ml-2 text-white" />
              </a>
            </li>
            <li>
              <a
                className="dropdwon flex items-center"
                onClick={handleShowProjects}
              >
                Projects
                <FaRegArrowAltCircleRight className="ml-2 text-white" />
              </a>
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
              <a
                className="dropdwon flex items-center"
                onClick={handleShowContacts}
              >
                Contact Us
                <FaRegArrowAltCircleRight className="ml-2 text-white" />
              </a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  const navSubItems = (
    <>
      <ul className=" p-2 bg-none rounded">
        <li
          className="dropdown"
          style={{ position: "relative", width: "350px" }}
        >
          <summary
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "5px",
              fontWeight: "bold",
              // gap: "5px",
              cursor: "pointer",
            }}
            onClick={handleBackClick}
          >
            <FaRegArrowAltCircleLeft />
            Back
          </summary>
        </li>
        <li className="text-2xl text-[#8E8A1F]">
          <a>About Shanta</a>
        </li>
        <li>
          <a>Our Story</a>
        </li>
        <li>
          <a>Our Team</a>
        </li>
        <li>
          <a>Why Shanta?</a>
        </li>
        <li>
          <a>Our Business</a>
        </li>
        <li>
          <a>Our Clients</a>
        </li>
        <li>
          <a>EHS</a>
        </li>
        <li>
          <a>CSR</a>
        </li>
      </ul>
    </>
  );

  const navProjectItems = (
    <>
      <ul className="p-2 bg-none rounded">
        <li
          className="dropdown"
          style={{ position: "relative", width: "350px" }}
        >
          <summary
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={handleBackButtonInProject}
          >
            <FaRegArrowAltCircleLeft />
            Back
          </summary>
        </li>
        <li className="text-2xl text-[#8E8A1F]">
          <a>Projects</a>
        </li>
        <li>
          <a>Ongoing</a>
        </li>
        <li>
          <a>Upcoming</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
        <li>
          <a>Completed Projects</a>
        </li>
      </ul>
    </>
  );
  const navContactItems = (
    <>
      <ul className="p-2 bg-none rounded">
        <li
          className="dropdown"
          style={{ position: "relative", width: "350px" }}
        >
          <summary
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginBottom: "5px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={handleBackButtonInContact}
          >
            <FaRegArrowAltCircleLeft />
            Back
          </summary>
        </li>
        <li className="text-2xl text-[#8E8A1F]">
          <a>Contact Us</a>
        </li>
        <li>
          <a>3653525</a>
        </li>
        <li>
          <a>Upcoming</a>
        </li>
        <li>
          <a>Completed</a>
        </li>
      </ul>
    </>
  );

  return (
    <div>
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
            <li className="bg-none ">
              <Link
                onClick={() => setDarkMode(!darkMode)}
                className={`${darkMode ? "dark-mode" : "light-mode"}`}
              >
                {darkMode ? "Light" : "Dark"}
              </Link>
            </li>
            {/* for the main menu */}
            {!showSubitems && !showProjects && !showContacts && navMainItems}

            {/* show subitems for about shanta */}
            {showSubitems && navSubItems}

            {/* show projects submenu */}
            {showProjects && navProjectItems}

            {/* show contacts submenu */}
            {showContacts && navContactItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
