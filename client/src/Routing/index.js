import React from "react";

import PrivateRoutes from "./PrivateRoutes";
import NonPrivateRoutes from "./NonPrivateRoutes";

const Routing = () => {
  return (
    <div>
      <PrivateRoutes />
      <NonPrivateRoutes />
    </div>
  );
};

export default Routing;
