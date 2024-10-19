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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                className="dropdwon flex items-center"
                onClick={handleShowSubitems}
              >
                About Shanta
                <FaRegArrowAltCircleRight className="ml-2 text-white" />
              </Link>
            </li>
            <li>
              <Link
                className="dropdwon flex items-center"
                onClick={handleShowProjects}
              >
                Projects
                <FaRegArrowAltCircleRight className="ml-2 text-white" />
              </Link>
            </li>
            <li>
              <Link to="/">Life At Shanta</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">News & Events</Link>
            </li>
            <li>
              <Link to="/"
                className="dropdwon flex items-center"
                onClick={handleShowContacts}
              >
                Contact Us
                <FaRegArrowAltCircleRight className="ml-2 text-white" />
              </Link>
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
          <Link>About Shanta</Link>
        </li>
        <li>
          <Link to="/our-story">Our Story</Link>
        </li>
        <li>
          <Link to="/our-team">Our Team</Link>
        </li>
        <li>
          <Link to="/why-shanta">Why Shanta?</Link>
        </li>
        <li>
          <Link to="/our-business">Our Business</Link>
        </li>
        <li>
          <Link to="/our-clients">Our Clients</Link>
        </li>
        <li>
          <Link to="/ehs">EHS</Link>
        </li>
        <li>
          <Link to="/csr">CSR</Link>
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
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/">Ongoing</Link>
        </li>
        <li>
          <Link to="/">Upcoming</Link>
        </li>
        <li>
          <Link to="/">Completed</Link>
        </li>
        <li>
          <Link to="/">Completed Projects</Link>
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
          <Link to="/">Contact Us</Link>
        </li>
        <li>
          <Link to="/">3653525</Link>
        </li>
        <li>
          <Link to="/">Upcoming</Link>
        </li>
        <li>
          <Link to="/">Completed</Link>
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
