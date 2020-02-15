import React, { useReducer } from "react";
import axios from "axios";

import QAReducer from "./QAReducer";
import QAContext from "./QAContext";
import { GET_HOME_QUESTIONS, GET_DASHBOARD_QUESTIONS } from "../types";

const QAState = props => {
  const initialState = {
    dashboardQuestions: [],
    homeQuestions: [],
    dashboardAnswered: []
  };

  const [state, dispatch] = useReducer(QAReducer, initialState);

  // functions for context

  // post question
  const postQuestion = async (question, elaboration) => {
    let res = await axios.post("/questions/", { question, elaboration });

    // redirect the user to the dashboard todo
    console.log(res.data);
    // dispatch({ type: POST_QUESTION, payload: res.data.question });
  };

  // get dashboard question
  const getDashboardQuestions = async skip => {
    if (!skip) skip = 0;
    let res = await axios.get(`/questions/dashboard-questions/${skip}`);

    dispatch({ type: GET_DASHBOARD_QUESTIONS, payload: res.data.questions });
  };

  // get home questions
  const getHomeQuestions = async skip => {
    if (!skip) skip = 0;
    let res = await axios.get(`/questions/home-questions/${skip}`);

    dispatch({ type: GET_HOME_QUESTIONS, payload: res.data.questions });
  };

  return (
    <QAContext.Provider
      value={{
        dashboardQuestions: state.dashboardQuestions,
        homeQuestions: state.homeQuestions,
        dashboardAnswered: state.dashboardAnswered,
        postQuestion,
        getDashboardQuestions,
        getHomeQuestions
      }}
    >
      {props.children}
    </QAContext.Provider>
  );
};

export default QAState;
