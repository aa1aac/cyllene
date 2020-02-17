import React, { useReducer } from "react";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";

import QAReducer from "./QAReducer";
import QAContext from "./QAContext";
import {
  GET_HOME_QUESTIONS,
  GET_DASHBOARD_QUESTIONS,
  GET_MORE_HOME_QUESTIONS,
  GET_MORE_DASHBOARD_QUESTIONS
} from "../types";

const QAState = props => {
  const initialState = {
    dashboardQuestions: [],
    homeQuestions: [],
    dashboardAnswered: [],
    homeHasMore: true,
    dashboardHasMore: true
  };

  const [state, dispatch] = useReducer(QAReducer, initialState);

  // functions for context

  // post question
  const postQuestion = async (question, elaboration) => {
    try {
      let res = await axios.post("/questions/", { question, elaboration });
     

      M.toast({
        html: "successfully posted the question",
        classes: "rounded green"
      });
    } catch (error) {}
  };

  // get dashboard question
  const getDashboardQuestions = async skip => {
    if (!skip) skip = 0;
    let res = await axios.get(`/questions/dashboard-questions/${skip}`);

    dispatch({ type: GET_DASHBOARD_QUESTIONS, payload: res.data });
  };

  // get home questions
  const getHomeQuestions = async skip => {
    if (!skip) skip = 0;
    let res = await axios.get(`/questions/home-questions/${skip}`);

    dispatch({ type: GET_HOME_QUESTIONS, payload: res.data });
  };

  const postAnswer = async (questionId, answer) => {
    try {
      let res = await axios.post(`/questions/${questionId}/answer`, {
        answer
      });

      if (res.data.msg)
        M.toast({ html: res.data.msg, classes: "green rounded" });

      if (res.data.error)
        M.toast({ html: res.data.error, classes: "red rounded" });
    } catch (error) {
      console.log(error);
      M.toast({ html: "some error occured", classes: "red rounded" });
    }
  };

  const getMoreHomeQuestions = async skip => {
    if (!skip) skip = 0;

    let res = await axios.get(`/questions/home-questions/${skip}`);

    dispatch({ type: GET_MORE_HOME_QUESTIONS, payload: res.data });
  };

  const getMoreDashboardQuestions = async skip => {
    if (!skip) skip = 0;
    let res = await axios.get(`/questions/dashboard-questions/${skip}`);

    dispatch({
      type: GET_MORE_DASHBOARD_QUESTIONS,
      payload: res.data
    });
  };

  return (
    <QAContext.Provider
      value={{
        dashboardQuestions: state.dashboardQuestions,
        homeQuestions: state.homeQuestions,
        dashboardAnswered: state.dashboardAnswered,
        homeHasMore: state.homeHasMore,
        dashboardHasMore: state.dashboardHasMore,
        postQuestion,
        getDashboardQuestions,
        getHomeQuestions,
        postAnswer,
        getMoreHomeQuestions,
        getMoreDashboardQuestions
      }}
    >
      {props.children}
    </QAContext.Provider>
  );
};

export default QAState;
