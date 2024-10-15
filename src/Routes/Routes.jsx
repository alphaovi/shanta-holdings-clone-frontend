import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import OurStory from "../Pages/About/OurStory/OurStory";
import About from "../Layout/About";

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
    path: "/our-story",
    element: <About></About>,
    children: [
      {
        path: "/our-story",
        element: <OurStory></OurStory>
      },
    ],
  },
]);

export default router;
