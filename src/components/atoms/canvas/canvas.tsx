import "./canvas.css";
import React from "react";

interface CanvasProps {
  children?: React.ReactNode;
  variant?: string;
}

const Canvas: React.FC<CanvasProps> = ({ children, variant }) => {
  return variant === "primary" ? (
    <div className="canvas-container">{children}</div>
  ) : (
    <div className="canvas-container-secondary">{children}</div>
  );
};

export default Canvas;
