import "./canvas.css";
import React from "react";

interface CanvasProps {
  children?: React.ReactNode;
}

const Canvas: React.FC<CanvasProps> = ({ children }) => {
  return <div className="canvas-container">{children}</div>;
};

export default Canvas;
