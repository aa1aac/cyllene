import React from "react";

import PrivateRoute from "./PrivateRouteComponent";

import Home from "../Pages/Home";
import DashBoard from "../Pages/Dashboard";

const PrivateRoutes = () => {
  return (
    <div>
      <PrivateRoute path="/home" exact component={Home} />
      <PrivateRoute path="/dashboard" exact component={DashBoard} />
    </div>
  );
};

export default PrivateRoutes;
