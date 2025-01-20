import "./section-header.css";
import React from "react";

interface SectionHeaderProps {
  children?: React.ReactNode;
  primaryHeading: string;
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  primaryHeading,
  title,
  subtitle,
}) => {
  return (
    <div className="section-header-container">
      <div className="primary-heading"> {primaryHeading} </div>
      <div className="title"> {title} </div>
      <div className="subtitle"> {subtitle} </div>

      {children}
    </div>
  );
};

export default SectionHeader;
