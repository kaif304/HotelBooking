import React from "react";
import "./Button.css";

const Button = ({ text = "Log In", onClick }) => {
  return (
    <button className="login-btn">
      {text}
    </button>
  );
};

export default Button;
