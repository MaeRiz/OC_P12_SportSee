import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div id="notfound-page">
      <h2>404</h2>
      <h3>Page introuvable !</h3>
      <button onClick={goBack}>Retourner en arrière</button>
    </div>
  );
};

export default NotFound;
