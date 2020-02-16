import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import M from "materialize-css/dist/js/materialize.min.js";

import UserContext from "../../context/user/UserContext";

const Navbar = props => {
  let userContext = useContext(UserContext);

  const onClickLogout = () => {
    userContext.logout();
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

  if (userContext.isLoggedIn) {
    return (
      <div>
        <nav className="navbar-fixed">
          <div className="nav-wrapper blue accent-4">
            <Link to="/home" className="brand-logo">
              <i className="fab fa-cuttlefish"> Cyllene</i>
            </Link>
            <a href="#!" data-target="mobile" className="sidenav-trigger">
              <i className="fas fa-ellipsis-v"></i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/dashboard/search">Search</Link>
              </li>
              <li>
                <a href="#!" onClick={onClickLogout}>
                  Logout
                </a>
              </li>

              <li>
                <a href="#!">Hi {userContext.name}!</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav blue accent-1 " id="mobile">
          <h4 className="center-align">
            Hi {userContext.name} ! <br />
            Howdy!
          </h4>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/search">Search</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <a href="#!" onClick={onClickLogout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    );
  }

  return <div />;
};

export default Navbar;
