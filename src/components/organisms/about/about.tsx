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
import AboutDataJSON from "../../../assets/data/about.json";
import LandingImage from "../../../assets/images/landing.jpeg";

const AboutIconMap: Record<string, React.ElementType> = {
  GithubOutline,
  LinkedinOutline,
  MediumOutline,
  ResumeOutline,
};

interface AboutProps {
  children?: React.ReactNode;
}

const About: React.FC<AboutProps> = ({ children }) => {
  return (
    <div id="home">
      <Canvas variant="primary">
        <div className="two-column-landing">
          <SectionHeader
            primaryHeading={AboutDataJSON["landing-greeting"]}
            title={AboutDataJSON["landing-title"]}
            subtitle={AboutDataJSON["landing-subtitle"]}
          />

          <img className="landing-image" src={LandingImage} />
        </div>

        <Canvas variant="secondary">
          <div className="portfolio-links">
            {AboutDataJSON.icons.map(({ id, component, label, link }) => {
              const IconReference = AboutIconMap[component];
              return (
                <Button
                  link={link}
                  key={id}
                  icon={IconReference ? <IconReference /> : null}
                  aria-label={label}
                />
              );
            })}
          </div>
        </Canvas>

        <div className="cta-text">
          {AboutDataJSON["cta-1"]}

          <a href="mailto:aduly.fr@gmail.com" target="_blank">
            {AboutDataJSON["cta-2"]}
          </a>
        </div>
      </Canvas>

      {children}
    </div>
  );
};

export default About;
