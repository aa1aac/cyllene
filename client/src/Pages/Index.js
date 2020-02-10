import React from "react";

import Login from "../components/Login/Login";

import "./styles/index.css";

const IndexPage = () => {
  return (
    <div id="index">
      <div className="row">
        <div className="col s12 l4 xl5">
          <Login />
        </div>
        <div className="col l8 xl7 hide-on-small-only"></div>
      </div>
    </div>
  );
};

export default IndexPage;
