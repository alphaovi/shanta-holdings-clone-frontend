import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import OurStory from "../Pages/About/OurStory/OurStory";
import About from "../Layout/About";
import OurTeam from "../Pages/About/OurTeam/OurTeam";
import WhyShanta from "../Pages/About/WhyShanta/WhyShanta";
import OurBusiness from "../Pages/About/OurBusiness/OurBusiness/OurBusiness";
import OurClients from "../Pages/About/OurClients/OurClients/OurClients";
import EnvironmentHealthSafety from "../Pages/About/EnvironmentHealthSafety/EnvironmentHealthSafety/EnvironmentHealthSafety";
import Csr from "../Pages/About/CSR/CSR/CSR";
import LifeAtShanta from "../Pages/LifeAtShanta/LifeAtShanta/LifeAtShanta";
import Login from "../Layout/Login";
import SignIn from "../Pages/LoginLogout/SignIn/SignIn";
import SignUp from "../Pages/LoginLogout/SignUp/SignUp";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import AdminLayout from "../Layout/AdminLayout";
import Admin from "../Pages/BackendControl/Admin/Admin";
import AdminPortfolio from "../Pages/BackendControl/Home/Portfolio/AdminPortfolio";
import AdminFeatureProjects from "../Pages/BackendControl/Home/Admin-Feature-Projects/AdminFeatureProjects/AdminFeatureProjects";
import EditAdminFeatureProject from "../Pages/BackendControl/Home/Admin-Feature-Projects/EditAdminFeatureProject/EditAdminFeatureProject";
import CreateAdminFeatureProjects from "../Pages/BackendControl/Home/Admin-Feature-Projects/CreateAdminFeatureProjects/CreateAdminFeatureProjects";
import AdminCommitments from "../Pages/BackendControl/Home/AdminCommitment/AdminCommitments/AdminCommitments";
import AdminConnect from "../Pages/BackendControl/Home/AdminConnect/AdminConnect";
import AdminGetExplore from "../Pages/BackendControl/Home/AdminExploreProject/AdminGetExplore/AdminGetExplore";
import AdminCreateExplore from "../Pages/BackendControl/Home/AdminExploreProject/AdminCreateExplore/AdminCreateExplore";
import AdminOurStory from "../Pages/BackendControl/OurStory/AdminOurStory";

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
        element: <OurStory></OurStory>,
      },
      {
        path: "/our-team",
        element: <OurTeam></OurTeam>,
      },
      {
        path: "/why-chuti",
        element: <WhyShanta></WhyShanta>,
      },
      {
        path: "/our-business",
        element: <OurBusiness></OurBusiness>,
      },
      {
        path: "/our-clients",
        element: <OurClients></OurClients>,
      },
      {
        path: "/ehs",
        element: <EnvironmentHealthSafety></EnvironmentHealthSafety>,
      },
      {
        path: "/csr",
        element: <Csr></Csr>,
      },
      {
        path: "/life-at-chuti",
        element: <LifeAtShanta></LifeAtShanta>,
      },
    ],
  },
  {
    path: "/",
    element: <Login></Login>,
    children: [
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "/admin",
        element: <Admin></Admin>,
      },
      {
        path: "/admin/about-us",
        element: <AdminPortfolio></AdminPortfolio>,
      },
      {
        path: "/admin/feature-project",
        element: <AdminFeatureProjects></AdminFeatureProjects>,
      },
      {
        path: "/admin/feature-project/:projectId",
        element: <EditAdminFeatureProject></EditAdminFeatureProject>
      },
      {
        path: "/admin/create-project",
        element: <CreateAdminFeatureProjects></CreateAdminFeatureProjects>
      },
      {
        path: "/admin/commitment",
        element: <AdminCommitments></AdminCommitments>
      },
      {
        path: "/admin/explore",
        element: <AdminGetExplore></AdminGetExplore>
      },
      {
        path: "/admin/create-explore",
        element: <AdminCreateExplore></AdminCreateExplore>
      },
      {
        path: "/admin/connect",
        element: <AdminConnect></AdminConnect>
      },
      {
        path: "/admin/our-story",
        element: <AdminOurStory></AdminOurStory>
      },
    ],
  },
]);

export default router;
