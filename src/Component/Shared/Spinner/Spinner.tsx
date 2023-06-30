import React from "react";
import "./spinner.scss";

const Spinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Spinner;
