import "./landing.css";
import React from "react";
import Canvas from "../../atoms/canvas";
import SectionHeader from "../../molecules/sectionHeader";
import SectionCard from "../../molecules/sectionCard";
import {
  WealthsimpleOutline,
  CoinbaseOutline,
  ShopifyOutline,
  RBCOutline,
} from "../../../assets/icons/Logos/logos";

interface LandingProps {
  children?: React.ReactNode;
}

const ExperienceCards = [
  {
    id: 1,
    icon: <WealthsimpleOutline />,
    title: "Wealthsimple",
    subtitle: "Software Engineer, Crypto Trading",
    date: "S'24",
    label: "wealthsimple-2",
  },
  {
    id: 2,
    icon: <WealthsimpleOutline />,
    title: "Wealthsimple",
    subtitle: "Software Engineer, Money Movement",
    date: "S'23",
    label: "wealthsimple-1",
  },
  {
    id: 3,
    icon: <CoinbaseOutline />,
    title: "Coinbase",
    subtitle: "Software Engineer, dApps Marketplace",
    date: "S'22",
    label: "coinbase-2",
  },
  {
    id: 4,
    icon: <ShopifyOutline />,
    title: "Shopify",
    subtitle: "Software Engineer, Media: Video & Image Infra",
    date: "W'22",
    label: "shopify-1",
  },
  {
    id: 5,
    icon: <CoinbaseOutline />,
    title: "Coinbase",
    subtitle: "Software Engineer, Coinbase Earn & Retail",
    date: "F'21",
    label: "coinbase-1",
  },
  {
    id: 6,
    icon: <RBCOutline />,
    title: "RBC Amplify",
    subtitle: "Software Engineer, Ventures (Goodside Product)",
    date: "S'21",
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
        {ExperienceCards.map(({ id, icon, title, subtitle, label, date }) => (
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

export default Landing;
