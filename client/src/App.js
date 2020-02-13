import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style/materialize.css";


import UserState from "./context/user/UserState";
import Routing from "./Routing";

const App = () => {


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
