import "./ErrorMessage.scss";
import React from "react";
import errorIcon from '../../assets/icons/icons8-cross-30.png';
// https://icons8.com/icons/set/cross--blue

function ErrorMessage({ content }) {
  return (
    <div className="error">
      <img src={errorIcon} alt="error icon" className="error__icon" />
      <p className="error__msg">{content}</p>
    </div>
  );
}

export default ErrorMessage;
