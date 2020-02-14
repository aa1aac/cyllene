import React, { useReducer } from "react";
import axios from "axios";

import QAReducer from "./QAReducer";
import QAContext from "./QAContext";
import { POST_QUESTION } from "../types";

const QAState = props => {
  const initialState = {
    dashbardQuestions: null,
    homeQuestions: null,
    dashboardAnswered: null
  };

  const [state, dispatch] = useReducer(QAReducer, initialState);

  // functions for context
  const postQuestion = async (question, elaboration) => {
    let res = await axios.post("/questions/", { question, elaboration });

    dispatch({ type: POST_QUESTION, payload: res.data.question });
  };

  return (
    <QAContext.Provider
      value={{
        dashbardQuestions: state.dashbardQuestions,
        homeQuestions: state.homeQuestions,
        dashboardAnswered: state.dashboardAnswered,
        postQuestion
      }}
    >
      {props.children}
    </QAContext.Provider>
  );
};

export default QAState;
