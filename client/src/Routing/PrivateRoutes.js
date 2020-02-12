import React, { useContext } from "react";

import UserContext from "../context/user/UserContext";
import PrivateRoute from './PrivateRouteComponent'


const PrivateRoutes = () => {
  const userContext = useContext(UserContext);
  
  return (
      <div> 
  {
    userContext.isLoggedIn ? (
      <div>
        Navbar
        {/* other routes go here */}
      </div>
    ) : null
  }
      </div>
  )

};

export default PrivateRoutes;
