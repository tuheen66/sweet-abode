import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import UpdateProfile from './Pages/UpdateProile/UpdateProfile';
import PropertyDetails from "./Pages/PropertyDetails/PropertyDetails.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./../public/residential.json"),
      },
      {
        path:'/property-details/:id',
        element:<PropertyDetails></PropertyDetails>,
        loader:()=>fetch("../public/residential.json")

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/update-profile",
        element:<UpdateProfile></UpdateProfile>
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
