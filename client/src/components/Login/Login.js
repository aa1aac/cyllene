import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js"
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async e => {
    e.preventDefault();

    let res = await axios.post("/users/login", { email, password });

    console.log(res.data);

    if (res.data.hasValidationError) {
      res.data.validationError.forEach(error => {
        M.toast({
          html: `${error.msg} : ${error.param}`,
          classes: "red accent-3 rounded"
        });
      });
    }

    if (res.data.msg) {
      M.toast({
        html: res.data.msg,
        classes: "green accent-3"
      });
    }
  };

  return (
    <div className="login">
      <h4 className="center blue-text text-accent-3">Login</h4>

      <h6>
        login with
        {/* todo */}
      </h6>

      <form className="row m2" onSubmit={onLogin}>
        <div className="col s12">
          <div className="row ">
            <div className="input-field col s12">
              <input
                type="email"
                id="email"
                className="autocomplete white-text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-field col s12">
              <input
                type="password"
                id="password"
                className="autocomplete white-text"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
        </div>
        <div className="center-align">
          <button
            className="btn waves-effect waves-light blue accent-2 btn-large"
            type="submit"
            name="action"
          >
            Login <i className="fas fa-sign-in-alt"></i>
          </button>

          <h6>
            Don't have an account?{" "}
            <Link to="/signup">
              <button
                className="btn waves-effect waves-light blue accent-2 "
                type="submit"
                name="action"
              >
                Signup <i className="fas fa-user-plus"></i>
              </button>
            </Link>
          </h6>
        </div>
      </form>
    </div>
  );
};

export default Login;
