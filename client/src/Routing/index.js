import React, { useContext, useEffect } from "react";
import M from "materialize-css/dist/js/materialize";

import PrivateRoutes from "./PrivateRoutes";
import NonPrivateRoutes from "./NonPrivateRoutes";
import UserContext from "../context/user/UserContext";

const Routing = () => {
  let userContext = useContext(UserContext);

  useEffect(() => {
    userContext.getUser();

    M.AutoInit();
    
  }, []);

  return (
    <div>
      <PrivateRoutes />
      <NonPrivateRoutes />
    </div>
  );
};

export default Routing;
