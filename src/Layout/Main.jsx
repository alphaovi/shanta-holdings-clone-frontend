import { Outlet } from "react-router-dom";
// import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { DarkModeContext } from "../Contexts/NightLightContext";
import Navbar2 from "../Shared/Navbar/Navbar2";

const Main = () => {
    const darkModeContext = useContext(DarkModeContext);
    const {darkMode} = darkModeContext;
    return (
        <div style={{"backgroundColor": darkMode ? "#212121" : "white", "color": darkMode ? "white" : "black"}}>
            <Navbar2></Navbar2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;