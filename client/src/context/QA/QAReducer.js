import {
  GET_DASHBOARD_QUESTIONS,
  GET_HOME_QUESTIONS,
  GET_MORE_HOME_QUESTIONS,
  GET_MORE_DASHBOARD_QUESTIONS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_HOME_QUESTIONS:
      return {
        ...state,
        homeQuestions: [...action.payload.questions],
        homeHasMore: action.payload.hasMore
      };
    case GET_MORE_HOME_QUESTIONS:
      return {
        ...state,
        homeQuestions: [...state.homeQuestions, ...action.payload.questions],
        homeHasMore: action.payload.hasMore
      };
    case GET_DASHBOARD_QUESTIONS:
      return {
        ...state,
        dashboardQuestions: [...action.payload.questions],
        dashboardHasMore: action.payload.hasMore
      };
    case GET_MORE_DASHBOARD_QUESTIONS:
      return {
        ...state,
        dashboardQuestions: [
          ...state.dashboardQuestions,
          ...action.payload.questions
        ],
        dashboardHasMore: action.payload.hasMore
      };

    default:
      return state;
  }
};
