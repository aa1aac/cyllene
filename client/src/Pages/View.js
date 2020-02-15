import React, { useEffect, useState } from "react";
import axios from "axios";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";

const View = props => {
  let id = props.match.params.id;

  const [question, setQuestion] = useState({});

  let markup;

  useEffect(() => {
    fetchView();
  }, []);

  const fetchView = async () => {
    let res = await axios.get(`/questions/${id}`);

    setQuestion(res.data.question);
  };

  if (question.elaboration) {
    markup = draftToHtml(question.elaboration);
  }

  if (question.elaboration) {
    return (
      <div className="container">
        <h3 className="blue-text">{question.question}</h3>
        <br />
        <hr className="blue-text" />
        <em>
          asked on: <b>{new Date(question.date).toDateString()}</b>
        </em>{" "}
        <br />
        <em>
          asked by: <b>{question._author.name}</b>
        </em>
        <br />
        <hr className="blue-text" />
        <div id="editor">{ReactHtmlParser(markup)}</div>
        <br />
      </div>
    );
  } else {
    return (
      <div className="container center-align">
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default View;
