import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "@fontsource/roboto";
import "@fontsource/outfit";
import SignIn from "./components/SignIn/SignIn.jsx";
import LandingPage from "../LandingPage.jsx";
import HelpCentre from "./components/HelpCentre/HelpCentre.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
       
        element: <LandingPage />,
        index: true,
      },
      {
        path: "/signIn",
        element: <SignIn/>
      },
      {
        path: "/helpCenter",
        element: <HelpCentre/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

