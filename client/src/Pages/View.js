import React, { useEffect, useState } from "react";
import axios from "axios";
import draftToHtml from "draftjs-to-html";
import ReactHtmlParser from "react-html-parser";
import CustomEditor from "../components/Editor/Editor";

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
        <div className="col s12 mt1">
          <div className="card horizontal">
            <div className="card-stacked">
              <div className="card-content">
                <h3 className="blue-text header">{question.question}</h3>
                <br />
                <hr className="blue-text" />
                <br />
                <div id="editor">{ReactHtmlParser(markup)}</div>

                <br />
                <div className="card-action">
                  <em>
                    asked on: <b>{new Date(question.date).toDateString()}</b>
                  </em>{" "}
                  <br />
                  <em>
                    asked by: <b>{question._author.name}</b>
                  </em>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h5 className="blue-text">Answers : {question._answers.length}</h5>
        {question._answers.length
          ? question._answers.map((answer, i) => {
              return (
                <div className="col s12 mt1" key={answer._id}>
                  <h6 className="header">Answer {i + 1} </h6>
                  <div className="card horizontal">
                    <div className="card-stacked">
                      <div className="card-content">
                        {ReactHtmlParser(draftToHtml(answer.answer))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
        <h6>Your answer</h6>
        <CustomEditor addAnswer={true} questionId={id} fetchView={fetchView} />
      </div>
    );
  } else {
    return (
      <div className="container center-align">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default View;
