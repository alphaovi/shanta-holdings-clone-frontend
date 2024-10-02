import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);
    

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
        console.log(darkMode)
    }

  return (
    <div>
      <div className="px-20 mt-5 navbar bg-base-100">
        <div className="flex-1 ml-20">
          <Link to={"/"} className="text-start block">
            <span className="text-4xl">SHANTA</span>
            <span className="flex space-x-3 mt-3 font-thin">
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
        <div className="flex-none mr-10">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link onClick={handleDarkMode} className={`${darkMode ? "dark-mode" : "light-mode"}`}>
              {darkMode ? "Light" : "Dark"}
              </Link>
            </li>
            <li>
              <details>
                <summary>Menu</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Search Projects</a>
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
