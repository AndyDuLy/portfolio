import "./footer.css";
import React from "react";

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className="footer">
      <h4> © 2025 Portfolio - Made with ♡ by Andy Du Ly </h4>
      {children}
    </div>
  );
};

export default Footer;
