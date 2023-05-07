import React from "react";
import { useNavigate } from "react-router-dom";

const InProgress = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div id="inprogress-page">
      <i className="fa-solid fa-gear"></i>
      <h2>Cette page est en cours de construction !</h2>
      <button onClick={goBack}>Retourner en arrière</button>
    </div>
  );
};

export default InProgress;
