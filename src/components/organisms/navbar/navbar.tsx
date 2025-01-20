import "./navbar.css";
import React from "react";
import Canvas from "../../atoms/canvas";
import Button from "../../atoms/button";
import HomeOutline from "../../../assets/icons/HomeOutline";
import WorkOutline from "../../../assets/icons/WorkOutline";
import ProjectOutline from "../../../assets/icons/ProjectOutline";
import ContactOutline from "../../../assets/icons/ContactOutline";

interface NavbarProps {
  children?: React.ReactNode;
}

const NavbarIcons = [
  { id: 1, component: <HomeOutline />, label: "Home" },
  { id: 2, component: <WorkOutline />, label: "Work" },
  { id: 3, component: <ProjectOutline />, label: "Project" },
  { id: 4, component: <ContactOutline />, label: "Contact" },
];

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div className="navbar-container">
      <Canvas variant="primary">
        {NavbarIcons.map(({ id, component, label }) => (
          <Button key={id} icon={component} aria-label={label} />
        ))}
        {children}
      </Canvas>
    </div>
  );
};

export default Navbar;
