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
import NavbarDataJSON from "../../../assets/data/navbar.json";

const NavbarIconMap: Record<string, React.ElementType> = {
  HomeOutline,
  WorkOutline,
  ProjectOutline,
  ContactOutline,
};

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <div className="navbar-container">
      <Canvas variant="navbar">
        {NavbarDataJSON.icons.map(({ id, component, label, link }) => {
          const IconReference = NavbarIconMap[component];

          return (
            <Button
              link={link}
              key={id}
              icon={IconReference ? <IconReference /> : null}
              aria-label={label}
            />
          );
        })}
        {children}
      </Canvas>
    </div>
  );
};

export default Navbar;
