import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSignUp = async e => {
    e.preventDefault();

    try {
      const res = await axios.post("/users/signup", {
        name,
        email,
        password,
        confirm
      });

      if (res.data.hasValidationError) {
        res.data.validationError.forEach(error => {
          M.toast({
            html: `${error.msg} :  ${error.param}`,
            classes: "red white-text rounded accent-3"
          });
        });
      }

      if (res.data.msg) {
        M.toast({
          html: `${res.data.msg}`,
          classes: "green black-text rounded accent-3"
        });
      }

      setConfirm("");
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      M.toast({
        html: "some error occured",
        classes: "red white-text rounded accent-3"
      });
    }
  };

  return (
    <div>
      <h4 className="center blue-text text-accent-3">Singup</h4>

      <form className="row m2 " onSubmit={onSignUp}>
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                id="name"
                className="autocomplete white-text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <label htmlFor="name">name</label>
            </div>

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
                minLength="8"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="input-field col s12">
              <input
                type="password"
                id="confirm"
                className="autocomplete white-text"
                minLength="8"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
              />
              <label htmlFor="confirm">confirm</label>
            </div>
          </div>
        </div>

        <button
          className="btn waves-effect waves-light blue accent-2 btn-large"
          type="submit"
          name="action"
        >
          Signup <i className="fas fa-user-plus"></i>
        </button>
        <br />
        <h6>Or, </h6>
        <Link to="/">
          <button
            className="btn waves-effect waves-light blue accent-2 "
            type="submit"
            name="action"
          >
            Login <i className="fas fa-sign-in-alt"></i>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
