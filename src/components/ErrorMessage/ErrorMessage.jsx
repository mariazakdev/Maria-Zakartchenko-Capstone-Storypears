import "./ErrorMessage.scss";
import React from "react";
import errorIcon from '../../assets/icons/Double-J-Design-Origami-Colored-Pencil-Blue-cross.16.png';

function ErrorMessage({ content }) {
  return (
    <div className="error">
      <img src={errorIcon} alt="error icon" className="error__icon" />
      <p className="error__msg">{content}</p>
    </div>
  );
}

export default ErrorMessage;
