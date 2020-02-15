import React, { useEffect, useContext } from "react";

import { Link } from "react-router-dom";

import QAContext from "../context/QA/QAContext";

const Dashboard = () => {
  const qaContext = useContext(QAContext);

  useEffect(() => {
    qaContext.getDashboardQuestions();
  }, []);

  console.log(qaContext.dashboardQuestions);
  return (
    <div className="container">
      <h4 className="blue-text center-align">Dashboard</h4>

      {/* for future use while displaying answer */}
      {/* <nav class="row center-align white black-text">
        <ul>
          <li class="col s6 active">Questioned</li>
          <li class="col s6">Answered</li>
        </ul>
      </nav> */}

      {qaContext.dashboardQuestions ? (
        qaContext.dashboardQuestions.map(dashbardQuestion => {
          return (
            <div className="row" key={dashbardQuestion._id}>
              <div className="col s12">
                <div className="card ">
                  <div className="card-content">
                    <span className="card-title">
                      {dashbardQuestion.question}
                    </span>
                    <br />
                    <hr className="blue-text" />
                    <p>
                      <em>
                        Asked by: <b>you</b>
                      </em>
                    </p>
                  </div>
                  <div className="card-action ">
                    <Link to={`/view/questions/${dashbardQuestion._id}`}>
                      <i className="fas fa-eye blue-text"> View</i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h6 className="center-align">No questions asked</h6>
        </div>
      )}

      <div className="fixed-action-btn">
        <Link to="/dashboard/add-qn" className="btn-floating btn-large blue">
          +
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
