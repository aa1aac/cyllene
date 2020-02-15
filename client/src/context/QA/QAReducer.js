import { GET_DASHBOARD_QUESTIONS, GET_HOME_QUESTIONS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_HOME_QUESTIONS:
      return {
        ...state,
        homeQuestions: [...action.payload]
      };
    case GET_DASHBOARD_QUESTIONS:
      return {
        ...state,
        dashboardQuestions: [...action.payload]
      };
    default:
      return state;
  }
};
