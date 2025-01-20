import "./button.css";
import React from "react";

interface ButtonProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ icon, children }) => {
  return (
    <button className={icon ? "icon-button-container" : "button-container"}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
