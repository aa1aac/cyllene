import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import QAContext from "../context/QA/QAContext";

const Home = () => {
  const qaContext = useContext(QAContext);

  useEffect(() => {
    qaContext.getHomeQuestions();
  }, []);

  return (
    <div className="container">
      <h5 className="center-align blue-text">Home</h5>

      <ul className="collection">
        {qaContext.homeQuestions.map((homeQuestion, key) => {
          return (
            <li className="collection-item avatar p4" key={key}>
              <i className=" circle blue"></i>
              <span className="title">
                <h5>{homeQuestion.question}</h5>
              </span>

              <div>
                <br />
                <br />
                <hr className="blue-text m3" />
              </div>

              <p>
                <em>Asked by : {homeQuestion._author.name} </em>
              </p>
              <Link
                to={`view/questions/${homeQuestion._id}`}
                className="secondary-content blue-text"
              >
                <i className="fas fa-eye"> View</i>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
