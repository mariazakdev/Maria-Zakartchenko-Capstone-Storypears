import "./ErrorMessage.scss";
import React from "react";
import errorIcon from "../../assets/icons/circle-slash.svg";

function ErrorMessage({ content }) {
  return (
    <div className="error">
      <img src={errorIcon} alt="error icon" className="error__icon" />
      <p className="error__msg">{content}</p>
    </div>
  );
}

export default ErrorMessage;
