import "./navbar.css";
import React from "react";
import Canvas from "../../atoms/canvas";
import Button from "../../atoms/button";
import {
  HomeOutline,
  WorkOutline,
  ProjectOutline,
  ContactOutline,
} from "../../../assets/icons/Navbar/navbar";

interface NavbarProps {
  children?: React.ReactNode;
}

const NavbarIcons = [
  { id: 1, component: <HomeOutline />, label: "Home", link: "#home" },
  { id: 2, component: <WorkOutline />, label: "Work", link: "#work" },
  { id: 3, component: <ProjectOutline />, label: "Project", link: "#projects" },
  {
    id: 4,
    component: <ContactOutline />,
    label: "Contact",
    link: "mailto:aduly.fr@gmail.com",
  },
];

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div className="navbar-container">
      <Canvas variant="navbar">
        {NavbarIcons.map(({ id, component, label, link }) => (
          <Button link={link} key={id} icon={component} aria-label={label} />
        ))}
        {children}
      </Canvas>
    </div>
  );
};

export default Navbar;
