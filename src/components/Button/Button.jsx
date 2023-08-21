import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ value, className, to }) => {
  if (to) {
    return (
      <Link to={to} className={`button ${className}`}>
        {value}
      </Link>
    );
  } else {
    return <button className={`button ${className}`}>{value}</button>;
  }
};

export default Button;
