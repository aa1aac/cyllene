import React from "react";

import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h4 className="center blue-text text-accent-3">Login</h4>

      <h6>
        login with
        {/* todo */}
      </h6>

      <form className="row m2">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input type="email" id="email" className="autocomplete" />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-field col s12">
              <input type="email" id="password" className="autocomplete" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
        </div>
        <div className="center-align">
          <button
            class="btn waves-effect waves-light blue accent-2 btn-large"
            type="submit"
            name="action"
          >
            Login <i className="fas fa-sign-in-alt"></i>
          </button>

          <h6>
            Don't have an account?{" "}
            <button
              class="btn waves-effect waves-light blue accent-2 btn-large"
              type="submit"
              name="action"
            >
              Signup <i className="fas fa-user-plus"></i>
            </button>
          </h6>
        </div>
      </form>
    </div>
  );
};

export default Login;
