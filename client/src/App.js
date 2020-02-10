import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style/materialize.css";

import M from "materialize-css/dist/js/materialize.min.js";

import IndexPage from "./Pages/Index";
import SignupPage from "./Pages/Signup";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/signup/" exact component={SignupPage} />
          <Route path="/" exact component={IndexPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
