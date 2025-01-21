import {
  GithubOutline,
  LinkedinOutline,
  MediumOutline,
  ResumeOutline,
} from "../../../assets/icons/Logos/logos";
import Button from "../../atoms/button";
import Canvas from "../../atoms/canvas";
import SectionHeader from "../../molecules/sectionHeader";
import "./about.css";
import React from "react";

interface AboutProps {
  children?: React.ReactNode;
}

const SocialIcons = [
  {
    id: 1,
    component: <GithubOutline />,
    label: "Github",
    link: "https://github.com/andyduly",
  },
  {
    id: 2,
    component: <LinkedinOutline />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/andyduly/",
  },
  {
    id: 3,
    component: <ResumeOutline />,
    label: "Resume",
    link: "https://drive.google.com/drive/folders/1apDueoMyihJ-xJa9baEI26n9imZ8QB8y?usp=drive_link",
  },
  {
    id: 4,
    component: <MediumOutline />,
    label: "Medium",
    link: "https://medium.com/@aandy.duly",
  },
];

const About: React.FC<AboutProps> = ({ children }) => {
  return (
    <div id="home">
      <Canvas variant="primary">
        <SectionHeader
          primaryHeading={"Hey! 👋"}
          title={"I'm Andy Du Ly"}
          subtitle={`and I'm an EMEA/France based Software Engineer. Welcome to my website :)`}
        />

        <Canvas variant="secondary">
          <div className="portfolio-links">
            {SocialIcons.map(({ id, component, label, link }) => (
              <Button
                link={link}
                key={id}
                icon={component}
                aria-label={label}
              />
            ))}
          </div>
        </Canvas>
      </Canvas>

      {children}
    </div>
  );
};

export default About;
