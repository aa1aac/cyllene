import React, { useReducer } from "react";
import axios from "axios";

import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import M from "materialize-css/dist/js/materialize.min.js";

import { LOGIN, GET_USER, LOGOUT } from "../types";

const UserState = props => {
  let initialState = {
    _id: null,
    name: null,
    isLoggedIn: false
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (email, password) => {
    let res = await axios.post("/users/login", { email, password });

    if (res.data.hasValidationError) {
      res.data.validationError.forEach(error => {
        M.toast({
          html: `${error.msg} : ${error.param}`,
          classes: "red accent-3 rounded"
        });
      });
    }

    if (res.data.msg) {
      // dipatch login
      dispatch({ type: LOGIN, payload: res.data.user });

      M.toast({
        html: res.data.msg,
        classes: "green accent-3 text-black"
      });
    }
  };

  const getUser = async () => {
    try {
      let res = await axios.get("/users/get-user");

      dispatch({ type: GET_USER, payload: res.data.user });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    document.cookie = `token= ; path='/'; Expires=${Date.now()} `;

    dispatch({ type: LOGOUT });
  };

  return (
    <UserContext.Provider
      value={{
        _id: state._id,
        name: state.name,
        isLoggedIn: state.isLoggedIn,
        login,
        getUser,
        logout
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
