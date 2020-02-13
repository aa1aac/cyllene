import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

import "./style/materialize.css";

import UserState from "./context/user/UserState";

import Navbar from "./components/Navbar/Navbar";
import Routing from "./Routing";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <UserState>
      <Router>
        <Navbar />
        <Switch>
          <Routing />
        </Switch>
      </Router>
    </UserState>
  );
};

export default App;
