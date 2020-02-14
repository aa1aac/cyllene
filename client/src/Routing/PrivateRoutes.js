import React from "react";

import PrivateRoute from "./PrivateRouteComponent";

import Home from "../Pages/Home";
import DashBoard from "../Pages/Dashboard";
import AddQn from "../Pages/AddQn";

const PrivateRoutes = () => {
  return (
    <div>
      <PrivateRoute path="/home" exact component={Home} />

      <PrivateRoute path="/dashboard" exact component={DashBoard} />
      <PrivateRoute path="/dashboard/add-qn" exact component={AddQn} />
    </div>
  );
};

export default PrivateRoutes;
