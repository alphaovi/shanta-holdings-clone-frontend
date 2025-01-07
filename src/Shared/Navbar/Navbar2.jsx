import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Contexts/NightLightContext";
import navbarLogoForDark from "../../assets/images/chuti-harmony/chuti-harmony-logo-black.png";
import navbarLogoForLight from "../../assets/images/chuti-harmony/chuti-harmony-logo.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  FaRegArrowAltCircleLeft,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { PiLinkedinLogo } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa6";
import "./Navbar2.css";

const Navbar2 = () => {
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode, setDarkMode } = darkModeContext;

  const [currentMenu, setCurrentMenu] = useState("main");
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => setShowMenu(!showMenu);
  const showMainMenu = () => setCurrentMenu("main");
  const showSubMenu = (menu) => setCurrentMenu(menu);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar px-5 md:px-20 py-3 md:py-5 flex items-center ">
        {/* Logo */}
        <div className="flex-1">
          <Link to={"/"} className="text-start block">
            {darkMode ? (
              <img
                src={navbarLogoForLight}
                alt="Logo"
                className="h-14 md:h-20"
              />
            ) : (
              <img
                src={navbarLogoForDark}
                alt="Logo"
                className="h-14 md:h-20"
              />
            )}
          </Link>
        </div>

        {/* Light/Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <p
            onClick={() => setDarkMode(!darkMode)}
            className={`cursor-pointer text-lg md:text-2xl ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {darkMode ? "Dark" : "Light"}
          </p>
          <div
            className="cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <FaToggleOff className="h-6 w-6 md:h-7 md:w-7 text-[#8F8933]" />
            ) : (
              <FaToggleOn className="h-6 w-6 md:h-7 md:w-7 text-[#8F8933]" />
            )}
          </div>
        </div>

        {/* Menu Button */}
        {!showMenu && (
          <div
            className="menu-icon ml-5 md:ml-10 text-lg md:text-2xl cursor-pointer"
            onClick={handleMenuToggle}
          >
            <p>Menu</p>
            <CiMenuBurger className="cursor-pointer text-3xl md:text-4xl ml-2 md:ml-4" />
          </div>
        )}
      </div>

      {/* Backdrop */}
      {showMenu && (
        <div
          className="backdrop fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowMenu(false)}
        ></div>
      )}

      {/* Sliding Menu */}
      <div
        ref={menuRef}
        className={`menu-container fixed top-0 right-0 h-full w-[250px] md:w-[300px] bg-black text-white z-50 transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        style={{ backgroundColor: "black" }}
      >
        <div className={`menu-content`}>
          {/* Main Menu */}
          {currentMenu === "main" && (
            <ul className="menu-list space-y-3 md:space-y-4 p-4 md:p-6 ml-3 md:ml-5 navbar-menuItemsDesign">
              <li>
                <input
                  type="text"
                  placeholder="Search Projects"
                  className="w-full p-2 border rounded mt-5 md:mt-10"
                />
              </li>
              <li className="hover:text-[#8F8933] pt-3 px-5">
                <Link to="/">Home</Link>
              </li>

              <li className="px-5">
                <button
                  onClick={() => showSubMenu("about")}
                  className="flex items-center w-full hover:text-[#8F8933]"
                  style={{ marginTop: "0px" }}
                >
                  About Chuti{" "}
                  <MdOutlineKeyboardArrowRight className="ml-3 md:ml-5" />
                </button>
              </li>
              <li className="px-5 ">
                <button
                  onClick={() => showSubMenu("projects")}
                  className="flex items-center w-full hover:text-[#8F8933]"
                  style={{ marginTop: "0px" }}
                >
                  Projects{" "}
                  <MdOutlineKeyboardArrowRight className="ml-3 md:ml-5" />
                </button>
              </li>
              <li className="mt-5 px-5 md:mt-10 hover:text-[#8F8933]">
                <Link to="/life-at-chuti">Life At Chuti</Link>
              </li>
              <li className="mt-5 px-5 md:mt-10 hover:text-[#8F8933]">
                <Link to="/careers">Careers</Link>
              </li>
              <li className=" px-5 hover:text-[#8F8933]">
                <Link to="/careers">News & Events</Link>
              </li>
              <li className="px-5">
                <button
                  onClick={() => showSubMenu("contact")}
                  className="flex items-center w-full hover:text-[#8F8933]"
                  style={{ marginTop: "0px" }}
                >
                  Contact Us{" "}
                  <MdOutlineKeyboardArrowRight className="ml-3 md:ml-5" />
                </button>
              </li>
            </ul>
          )}

          {/* Submenus */}
          {/* uncomment and it'll active */}
          {currentMenu === "about" && (
            <ul className="menu-list space-y-3 md:space-y-4 p-4 md:p-6 ml-3 md:ml-5">
              <li className="px-7">
                <button
                  onClick={showMainMenu}
                  className="flex items-center space-x-2 hover:text-[#8F8933]"
                >
                  <FaRegArrowAltCircleLeft /> Back
                </button>
              </li>
              <h2 className="text-3xl font-bold px-8 text-[#8F8933]">
                About Chuti
              </h2>
              <li className="hover:text-[#8F8933] px-7">
                <Link to="/our-story">Our Story</Link>
              </li>
              <li className="hover:text-[#8F8933] px-7">
                <Link to={"/our-team"}>Our Team</Link>
              </li>
              <li className="hover:text-[#8F8933] px-7">
                <Link to={"/why-chuti"}>Why Chuti ?</Link>
              </li>
              <li className="hover:text-[#8F8933] px-7">
                <Link to={"/our-business"}>Our Business</Link>
              </li>
              <li className="hover:text-[#8F8933] px-7">
                <Link to={"/our-clients"}>Our Clients</Link>
              </li>
              <li className="hover:text-[#8F8933] px-7">
                <Link to={"/ehs"}>EHS</Link>
              </li>
              <li className="hover:text-[#8F8933] px-7">
                <Link to={"/csr"}>CSR</Link>
              </li>
            </ul>
          )}

          {currentMenu === "projects" && (
            <ul className="menu-list space-y-3 md:space-y-4 p-4 md:p-6 ml-3 md:ml-5 mt-5 md:mt-10">
              <li className="px-7">
                <button
                  onClick={showMainMenu}
                  className="flex items-center space-x-2"
                >
                  <FaRegArrowAltCircleLeft /> Back
                </button>
              </li>
              <h2 className="text-3xl font-bold px-8 text-[#8F8933]">
                Projects
              </h2>
              <li className="hover:text-[#8F8933] px-7">
                <Link to={"/"}>Ongoing Projects </Link>
              </li>
              <li className="hover:text-[#8F8933] px-7">
                <Link to={"/"}>Upcoming Projects </Link>
              </li>
              <li className="hover:text-[#8F8933] px-7">
                <Link to={"/"}>Completed Projects </Link>
              </li>
            </ul>
          )}

          {currentMenu === "contact" && (
            <ul className="menu-list space-y-3 md:space-y-4 p-4 md:p-6 ml-3 md:ml-5">
              <li>
                <button
                  onClick={showMainMenu}
                  className="flex items-center space-x-2 px-7"
                >
                  <FaRegArrowAltCircleLeft /> Back
                </button>
              </li>
              <h2 className="text-3xl font-bold px-8 text-[#8F8933]">
                Contact Us
              </h2>
              <li className="hover:text-[#8F8933] px-7">
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li className="hover:text-[#8F8933] px-7">
                <Link to={"/location"}>Landowners</Link>
              </li>
              <li className="hover:text-[#8F8933] px-7">
                <Link to={"/email"}>Clients</Link>
              </li>
            </ul>
          )}

          <div className="flex gap-5 md:gap-8 ml-3 md:ml-5 mt-5 md:mt-10 justify-center text-3xl md:text-4xl ">
            <CiFacebook className="border-[#978c21] text-white border-2 rounded-full p-1 hover:text-[#8F8933]" />
            <FaInstagram className="border-[#978c21] text-white border-2 rounded-full p-1 hover:text-[#8F8933]" />
            <RiYoutubeLine className="border-[#978c21] text-white border-2 rounded-full p-1 hover:text-[#8F8933]" />
            <PiLinkedinLogo className="border-[#978c21] text-white border-2 rounded-full p-1 hover:text-[#8F8933]" />
            <FaTiktok className="border-[#978c21] text-white border-2 rounded-full p-1 hover:text-[#8F8933]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
