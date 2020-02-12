import React, { useEffect, useContext } from "react";

import Signup from "../components/signup/Signup";
import UserContext from "../context/user/UserContext";

const SignupPage = () => {
  let userContext = useContext(UserContext);

  useEffect(() => {
    userContext.getUser();
  }, []);

 
  return (
    <div className="row">
      <div className="col l8 xl7 hide-on-small "></div>

      <div className="col s12 l4 xl5">
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
