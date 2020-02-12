import { LOGIN, GET_USER, LOGOUT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN:
    case GET_USER:
      return {
        ...state,
        _id: action.payload._id,
        name: action.payload.name,
        isLoggedIn: true
      };

    case LOGOUT:
      return {
        ...state,
        _id: null,
        name: null,
        isLoggedIn: false
      };
    default:
      return state;
  }
};
