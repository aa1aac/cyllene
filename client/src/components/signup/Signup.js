import React from "react";

const Signup = () => {
  return (
    <div>
      <h4 className="center blue-text text-accent-3">Singup</h4>

      <form className="row m2">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input type="text" id="name" className="autocomplete" />
              <label htmlFor="name">name</label>
            </div>

            <div className="input-field col s12">
              <input type="email" id="email" className="autocomplete" />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-field col s12">
              <input
                type="email"
                id="password"
                className="autocomplete"
                minLength="8"
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="input-field col s12">
              <input
                type="password"
                id="confirm"
                className="autocomplete"
                minLength="8"
              />
              <label htmlFor="confirm">confirm</label>
            </div>
          </div>
        </div>

        <button
          class="btn waves-effect waves-light blue accent-2 btn-large"
          type="submit"
          name="action"
        >
          Signup <i className="fas fa-user-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default Signup;
