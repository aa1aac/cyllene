import React from "react";

import PrivateRoute from "./PrivateRouteComponent";

import Home from "../Pages/Home";
import DashBoard from "../Pages/Dashboard";

import Navbar from "../components/Navbar/Navbar";

const PrivateRoutes = () => {
  return (
    <div>
      <Navbar />
      <PrivateRoute to="/home" exact component={Home} />
      <PrivateRoute to="/dashboard" exact component={DashBoard} />
    </div>
  );
};

export default PrivateRoutes;
