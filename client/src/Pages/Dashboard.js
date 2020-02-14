import React from "react";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container">
      <h4 className="blue-text">Dashboard</h4>

      <div className="fixed-action-btn">
        <Link to="/dashboard/add-qn" className="btn-floating btn-large blue">
          +
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
