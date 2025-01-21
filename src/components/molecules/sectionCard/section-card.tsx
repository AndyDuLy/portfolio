import Button from "../../atoms/button";
import "./section-card.css";
import React from "react";

interface SectionCardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
  date: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  icon,
  title,
  subtitle,
  date,
}) => {
  return (
    <div className="section-card-container">
      <span className="section-card-icon"> {icon} </span>

      <span>
        <div className="section-card-title"> {title} </div>
        <div className="section-card-subtitle"> {subtitle} </div>
      </span>

      <span className="section-card-right">
        <Button> {date} </Button>
      </span>
    </div>
  );
};

export default SectionCard;
