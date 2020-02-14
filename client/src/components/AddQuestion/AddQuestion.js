import React, { useState } from "react";

import CustomEditor from "../Editor/Editor";

const AddQuestion = () => {
  const [question, setQuestion] = useState("");

  return (
    <div>
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                id="question"
                value={question}
                onChange={e => setQuestion(e.target.value)}
              />
              <label htmlFor="question">Question</label>
            </div>
          </div>
        </div>
      </div>
      <h5 className="blue-text">Elaborate your question </h5>
      <CustomEditor question={question} addQuestion={true} />
    </div>
  );
};

export default AddQuestion;
