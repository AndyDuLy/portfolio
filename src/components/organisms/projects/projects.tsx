import "./projects.css";
import React from "react";
import Canvas from "../../atoms/canvas";
import SectionHeader from "../../molecules/sectionHeader";
import SectionCard from "../../molecules/sectionCard";
import {
  CameraOutline,
  DirectionsOutline,
  ImagesOutline,
  WeatherOutline,
} from "../../../assets/icons/Projects/projects";
import ProjectsDataJSON from "../../../assets/data/projects.json";

const ProjectsIconMap: Record<string, React.ElementType> = {
  CameraOutline,
  DirectionsOutline,
  ImagesOutline,
  WeatherOutline,
};

interface ProjectsProps {
  children?: React.ReactNode;
}

const Projects: React.FC<ProjectsProps> = ({ children }) => {
  return (
    <div id="projects">
      <Canvas variant="primary">
        <SectionHeader
          primaryHeading={ProjectsDataJSON["section-heading"]}
          title={ProjectsDataJSON["section-title"]}
          subtitle={ProjectsDataJSON["section-subtitle"]}
        />

        <Canvas variant="secondary">
          {ProjectsDataJSON.icons.map(
            ({ id, component, title, subtitle, label, date, link }) => {
              const IconReference = ProjectsIconMap[component];

              return (
                <SectionCard
                  key={id}
                  icon={IconReference ? <IconReference /> : null}
                  title={title}
                  subtitle={subtitle}
                  date={date}
                  link={link}
                  aria-label={label}
                />
              );
            }
          )}
        </Canvas>

        {children}
      </Canvas>
    </div>
  );
};

export default Projects;
