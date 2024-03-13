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
import PlaceOrder from "./components/PlaceOrder/PlaceOrder.jsx";
import TrackOrder from "./components/TrackOrder/TrackOrder.jsx";
import OrderCancellation from "./components/OrderCancellation/OrderCancellation.jsx";
import Returns from "./components/Returns/Returns.jsx";
import Footer from "./components/Footer/Footer.jsx";



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
      },
      {
        path: "/placeOrder",
        element: <PlaceOrder/>
      },
      {
        path: "/trackOrder",
        element: <TrackOrder/>
      },
      {
        path: "/orderCancellation",
        element: <OrderCancellation/>
      },
      {
        path: "/returnsRefunds",
        element: <Returns/>
      },
      {
        path: "/footer",
        element: <Footer/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

