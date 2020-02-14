import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";

import "./style/materialize.css";

import UserState from "./context/user/UserState";
import QAState from "./context/QA/QAState";

import Navbar from "./components/Navbar/Navbar";
import Routing from "./Routing";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <UserState>
    <QAState>
      <Router>
        <Navbar />
        <Switch>
          <Routing />
        </Switch>
      </Router>
      </QAState>
    </UserState>
  );
};

export default App;
