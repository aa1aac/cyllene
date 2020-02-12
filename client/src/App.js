import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style/materialize.css";

import M from "materialize-css/dist/js/materialize.min.js";

import UserState from "./context/user/UserState";
import Routing from "./Routing";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <UserState>
      <Router>
        <Switch>
          <Routing />
        </Switch>
      </Router>
    </UserState>
  );
};

export default App;
