import React, { useReducer } from "react";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";

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
    try {
      let res = await axios.post("/questions/", { question, elaboration });

      // redirect the user to the dashboard todo
      console.log(res.data);

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

    dispatch({ type: GET_DASHBOARD_QUESTIONS, payload: res.data.questions });
  };

  // get home questions
  const getHomeQuestions = async skip => {
    if (!skip) skip = 0;
    let res = await axios.get(`/questions/home-questions/${skip}`);

    dispatch({ type: GET_HOME_QUESTIONS, payload: res.data.questions });
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

  return (
    <QAContext.Provider
      value={{
        dashboardQuestions: state.dashboardQuestions,
        homeQuestions: state.homeQuestions,
        dashboardAnswered: state.dashboardAnswered,
        postQuestion,
        getDashboardQuestions,
        getHomeQuestions,
        postAnswer
      }}
    >
      {props.children}
    </QAContext.Provider>
  );
};

export default QAState;
