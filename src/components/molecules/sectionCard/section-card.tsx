import "./section-card.css";
import React from "react";

interface SectionCardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="section-card-container">
      {icon}
      <div className="section-card-title"> {title} </div>
      <div className="section-card-subtitle"> {subtitle} </div>
    </div>
  );
};

export default SectionCard;
