import "./button.css";
import React from "react";

interface ButtonProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ icon, children, link }) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (link.startsWith("#")) {
      event.preventDefault();

      setTimeout(() => {
        const element = document.querySelector(link);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else window.open(link, "_blank");
  };

  return (
    <button
      // onClick={() => window.open(link)}
      onClick={handleClick}
      className={icon ? "icon-button-container" : "button-container"}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
