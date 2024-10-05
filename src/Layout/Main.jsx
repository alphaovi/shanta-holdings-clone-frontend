import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useContext } from "react";
import { DarkModeContext } from "../Contexts/NightLightContext";

const Main = () => {
    const darkModeContext = useContext(DarkModeContext);
    const {darkMode} = darkModeContext;
    return (
        <div style={{"backgroundColor": darkMode ? "#212121" : "white", "color": darkMode ? "white" : "black"}}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;