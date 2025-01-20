import "./landing.css";
import React from "react";
import Canvas from "../../atoms/canvas";
import SectionHeader from "../../molecules/sectionHeader";
import SectionCard from "../../molecules/sectionCard";

interface LandingProps {
  children?: React.ReactNode;
}

const ExperienceCards = [
  {
    id: 1,
    title: "Wealthsimple",
    subtitle: "Software Engineer, Crypto Trading",
    label: "wealthsimple-2",
  },
  {
    id: 2,
    title: "Wealthsimple",
    subtitle: "Software Engineer, Money Movement",
    label: "wealthsimple-1",
  },
  {
    id: 3,
    title: "Coinbase",
    subtitle: "Software Engineer, dApps Marketplace",
    label: "coinbase-2",
  },
  {
    id: 4,
    title: "Shopify",
    subtitle: "Software Engineer, Media: Video & Image Infra",
    label: "shopify-1",
  },
  {
    id: 5,
    title: "Coinbase",
    subtitle: "Software Engineer, Coinbase Earn & Retail",
    label: "coinbase-1",
  },
  {
    id: 6,
    title: "RBC Amplify",
    subtitle: "Software Engineer, Ventures (Goodside Product)",
    label: "rbc-1",
  },
];

const Landing: React.FC<LandingProps> = ({ children }) => {
  return (
    <Canvas variant="primary">
      <SectionHeader
        primaryHeading="-- Career"
        title="Experience"
        subtitle="Interested in learning about how I've applied my skillset at the largest production scales in the world? Read on to learn more."
      />

      <Canvas variant="secondary">
        {ExperienceCards.map(({ id, title, subtitle, label }) => (
          <SectionCard
            key={id}
            title={title}
            subtitle={subtitle}
            aria-label={label}
          />
        ))}
      </Canvas>

      {children}
    </Canvas>
  );
};

export default Landing;
