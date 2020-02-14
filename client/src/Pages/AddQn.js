import React from "react";
import { Link } from "react-router-dom";

import AddQuestion from "../components/AddQuestion/AddQuestion";

const AddQn = () => {
  return (
    <div className="container">
      <h5 className="blue-text">Add Question</h5>

      <Link className="btn red" to="/dashboard">
        Cancel
      </Link>
      <AddQuestion />
    </div>
  );
};

export default AddQn;
