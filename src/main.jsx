import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import NightLightContext from "./Contexts/NightLightContext.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <StrictMode>
      <NightLightContext>
        <RouterProvider router={router}></RouterProvider>
      </NightLightContext>
    </StrictMode>
  </div>
);
