import React from "react";

import NonPrivateRoute from "./NonPrivateRouteComponent";

import SignupPage from "../Pages/Signup";
import IndexPage from "../Pages/Signup";

const NonPrivateRoutes = () => {
  return (
    <div>
      <NonPrivateRoute path="/signup/" exact component={SignupPage} />
      <NonPrivateRoute path="/" exact component={IndexPage} />
    </div>
  );
};

export default NonPrivateRoutes;
