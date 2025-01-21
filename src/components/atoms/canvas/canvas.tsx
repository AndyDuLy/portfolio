import "./canvas.css";
import React from "react";

interface CanvasProps {
  children?: React.ReactNode;
  variant: string;
}

const Canvas: React.FC<CanvasProps> = ({ children, variant }) => {
  const variantClasses: Record<string, string> = {
    primary: "canvas-container",
    secondary: "canvas-container-secondary",
  };

  return <div className={variantClasses[variant] || "navbar"}>{children}</div>;
};

export default Canvas;
