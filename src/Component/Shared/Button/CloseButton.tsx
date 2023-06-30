import React from "react";
import "./close-button.scss";
import { useNavigate } from "react-router-dom";

const CloseButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button className="btn-close" onClick={() => navigate("/")}>
      X
    </button>
  );
};

export default CloseButton;
