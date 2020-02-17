import React, { useEffect, useContext } from "react";
import debounce from "lodash.debounce";

import { Link } from "react-router-dom";

import QAContext from "../context/QA/QAContext";

const Dashboard = () => {
  const qaContext = useContext(QAContext);

  useEffect(() => {
    qaContext.getDashboardQuestions();
  }, []);

  window.onscroll = debounce(() => {
    // Bails early if:
    // * there's nothing left to load
    if (!qaContext.dashboardHasMore) return;

    // Checks that the page has scrolled to the bottom
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // load more content
      qaContext.getMoreDashboardQuestions(qaContext.dashboardQuestions.length);
    }
  }, 100);

  return (
    <div className="container">
      <h4 className="blue-text center-align">Dashboard</h4>

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
