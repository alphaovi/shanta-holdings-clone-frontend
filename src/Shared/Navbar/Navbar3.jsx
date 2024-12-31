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
  //   FaTimes,
} from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { PiLinkedinLogo } from "react-icons/pi";
import { FaTiktok } from "react-icons/fa6";
import "./Navbar2.css";

const Navbar3 = () => {
  const darkModeContext = useContext(DarkModeContext);
  const { darkMode, setDarkMode } = darkModeContext;

  const [currentMenu, setCurrentMenu] = useState("main"); // Tracks the current menu being displayed
  const [showMenu, setShowMenu] = useState(false); // Tracks whether the menu is open
  const menuRef = useRef(null); // Reference for menu container

  // Handlers for navigating between menus
  const handleMenuToggle = () => setShowMenu(!showMenu);
  const showMainMenu = () => setCurrentMenu("main");
  const showSubMenu = (menu) => setCurrentMenu(menu);

  // Close menu on outside click
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
      <div className="navbar px-20 py-5 flex items-center">
        {/* Logo */}
        <div className="flex-1">
          <Link to={"/"} className="text-start block">
            {darkMode ? (
              <img src={navbarLogoForLight} alt="Logo" className="h-20" />
            ) : (
              <img src={navbarLogoForDark} alt="Logo" className="h-20" />
            )}
          </Link>
        </div>

        {/* Light/Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <p
            onClick={() => setDarkMode(!darkMode)}
            className={`cursor-pointer text-2xl ${
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
              <FaToggleOff className="h-7 w-7 text-[#8F8933]" />
            ) : (
              <FaToggleOn className="h-7 w-7 text-[#8F8933]" />
            )}
          </div>
        </div>

        {/* Menu Button */}
        {!showMenu && (
          <div
            className="menu-icon ml-10 text-2xl cursor-pointer"
            onClick={handleMenuToggle}
          >
            <p>Menu</p>
            <CiMenuBurger className="cursor-pointer text-4xl ml-4" />
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
        className={`menu-container fixed top-0 right-0 h-full w-[300px] bg-black text-white z-50 transform ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-96`}
        style={{ backgroundColor: "black" }}
      >
        <div className={`menu-content`}>
          {/* Close Button */}
          {/* <button
            className="close-button text-2xl absolute top-4 right-4"
            onClick={() => setShowMenu(false)}
          >
            <FaTimes />
          </button> */}

          {/* Main Menu */}
          {currentMenu === "main" && (
            <ul className="menu-list space-y-4 p-6 ml-5 navbar-menuItemsDesign">
              <li>
                <input
                  type="text"
                  placeholder="Search Projects"
                  className="w-full p-2 border rounded mt-10"
                />
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <button
                  onClick={() => showSubMenu("about")}
                  className="flex items-center w-full"
                >
                  About Shanta <MdOutlineKeyboardArrowRight className="ml-5" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => showSubMenu("projects")}
                  className="flex items-center w-full"
                >
                  Projects <MdOutlineKeyboardArrowRight className="ml-5" />
                </button>
              </li>
              <li style={{ marginTop: "40px" }}>
                <Link to="/life-at-shanta">Life At Shanta</Link>
              </li>
              <li>
                <button
                  onClick={() => showSubMenu("contact")}
                  className="flex items-center w-full"
                >
                  Contact Us <MdOutlineKeyboardArrowRight className="ml-5" />
                </button>
              </li>
            </ul>
          )}

          {/* Submenus */}
          {currentMenu === "about" && (
            <ul className="menu-list space-y-4 p-6 ml-5">
              <li>
                <input
                  type="text"
                  placeholder="Search Projects"
                  className="w-full p-2 border rounded mt-10"
                />
              </li>
              <li>
                <button
                  onClick={showMainMenu}
                  className="flex items-center space-x-2"
                >
                  <FaRegArrowAltCircleLeft /> Back
                </button>
              </li>
              <li>Our Story</li>
              <li>Our Team</li>
              <li>Why Shanta?</li>
              <li>Our Business</li>
              <li>Our Clients</li>
            </ul>
          )}

          {currentMenu === "projects" && (
            <ul className="menu-list space-y-4 p-6 ml-5 mt-10">
              <li>
                <input
                  type="text"
                  placeholder="Search Projects"
                  className={`w-full p-2 border rounded mt-10}`}
                />
              </li>
              <li>
                <button
                  onClick={showMainMenu}
                  className="flex items-center space-x-2"
                >
                  <FaRegArrowAltCircleLeft /> Back
                </button>
              </li>
              <li>Ongoing Projects</li>
              <li>Upcoming Projects</li>
              <li>Completed Projects</li>
            </ul>
          )}

          {currentMenu === "contact" && (
            <ul className="menu-list space-y-4 p-6 ml-5">
              <li>
                <input
                  type="text"
                  placeholder="Search Projects"
                  className={`w-full p-2 mt-10 border rounded`}
                />
              </li>
              <li>
                <button
                  onClick={showMainMenu}
                  className="flex items-center space-x-2"
                >
                  <FaRegArrowAltCircleLeft /> Back
                </button>
              </li>
              <li>Contact Info</li>
              <li>Location</li>
              <li>Email</li>
              <li>Support</li>
            </ul>
          )}

          <div className="flex gap-8 ml-5 mt-10 place-content-center text-4xl">
            <CiFacebook className="border-[#978c21] text-white border-2 rounded-full p-1  " />
            <FaInstagram className="border-[#978c21] text-white border-2 rounded-full p-1  " />
            <RiYoutubeLine className="border-[#978c21] text-white border-2 rounded-full p-1  " />
            <PiLinkedinLogo className="border-[#978c21] text-white border-2 rounded-full p-1  " />
            <FaTiktok className="border-[#978c21] text-white border-2 rounded-full p-1  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar3;
