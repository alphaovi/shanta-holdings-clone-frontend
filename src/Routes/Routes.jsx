import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import OurStory from "../Pages/About/OurStory/OurStory";
import About from "../Layout/About";
import OurTeam from "../Pages/About/OurTeam/OurTeam";
import WhyShanta from "../Pages/About/WhyShanta/WhyShanta";
import OurBusiness from "../Pages/About/OurBusiness/OurBusiness/OurBusiness";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
      
    ],
  },
  {
    path: "/",
    element: <About></About>,
    children: [
      {
        path: "/our-story",
        element: <OurStory></OurStory>
      },
      {
        path: "/our-team",
        element: <OurTeam></OurTeam>
      },
      {
        path: "/why-shanta",
        element: <WhyShanta></WhyShanta>
      },
      {
        path: "/our-business",
        element: <OurBusiness></OurBusiness>
      }
    ],
  },
]);

export default router;
