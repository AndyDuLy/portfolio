import "./landing.css";
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

interface ProjectsProps {
  children?: React.ReactNode;
}

const ProjectCards = [
  {
    id: 1,
    icon: <CameraOutline />,
    title: "Programmatic Autochrome",
    subtitle:
      "Image manipulation with JIMP in a React/TS - Express/TS web app.",
    date: "Github",
    label: "proj-autochrome",
  },
  {
    id: 2,
    icon: <WeatherOutline />,
    title: "Automatic SMS Weather Updates",
    subtitle:
      "Customizable, TS serverless weather info SMS delivery with a pub/sub + cron job automation on GCP.",
    date: "Github",
    label: "proj-daily-weather-sms",
  },
  {
    id: 3,
    icon: <ImagesOutline />,
    title: "Image Repository API",
    subtitle: "Docker containerized ME(R)N REST API with AWS S3 bucket config.",
    date: "Github",
    label: "proj-image-repo",
  },
  {
    id: 4,
    icon: <DirectionsOutline />,
    title: "(Offline) SMS Google Maps Directions",
    subtitle:
      "Customizable, TS serverless google maps directions through offline SMS with Twilio on GCP.",
    date: "Github",
    label: "proj-offline-maps",
  },
];

const Projects: React.FC<ProjectsProps> = ({ children }) => {
  return (
    <Canvas variant="primary">
      <SectionHeader
        primaryHeading="-- Projects"
        title="Passion Projects"
        subtitle="Want to explore side projects that have piqued my interests? Read on to learn more."
      />

      <Canvas variant="secondary">
        {ProjectCards.map(({ id, icon, title, subtitle, label, date }) => (
          <SectionCard
            key={id}
            icon={icon}
            title={title}
            subtitle={subtitle}
            date={date}
            aria-label={label}
          />
        ))}
      </Canvas>

      {children}
    </Canvas>
  );
};

export default Projects;
