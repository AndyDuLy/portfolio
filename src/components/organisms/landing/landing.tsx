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
    link: "https://www.wealthsimple.com/en-ca/crypto",
  },
  {
    id: 2,
    icon: <WealthsimpleOutline />,
    title: "Wealthsimple",
    subtitle: "Software Engineer, Money Movement",
    date: "S'23",
    label: "wealthsimple-1",
    link: "https://www.wealthsimple.com/en-ca/accounts/fhsa",
  },
  {
    id: 3,
    icon: <CoinbaseOutline />,
    title: "Coinbase",
    subtitle: "Software Engineer, dApps Marketplace",
    date: "S'22",
    label: "coinbase-2",
    link: "https://www.coinbase.com/fr/web3",
  },
  {
    id: 4,
    icon: <ShopifyOutline />,
    title: "Shopify",
    subtitle: "Software Engineer, Media: Video & Image Infra",
    date: "W'22",
    label: "shopify-1",
    link: "https://www.shopify.com/",
  },
  {
    id: 5,
    icon: <CoinbaseOutline />,
    title: "Coinbase",
    subtitle: "Software Engineer, Coinbase Earn & Retail",
    date: "F'21",
    label: "coinbase-1",
    link: "https://www.coinbase.com/en-fr/learn",
  },
  {
    id: 6,
    icon: <RBCOutline />,
    title: "RBC Amplify",
    subtitle: "Software Engineer, Ventures (Goodside Product)",
    date: "S'21",
    label: "rbc-1",
    link: "https://www.rbcx.com/ventures/",
  },
];

const Landing: React.FC<LandingProps> = ({ children }) => {
  return (
    <div id="work">
      <Canvas variant="primary">
        <SectionHeader
          primaryHeading="-- Career"
          title="Experience"
          subtitle="Interested in learning about how I've applied my skillset at the largest production scales in the world? Read on to learn more."
        />

        <Canvas variant="secondary">
          {ExperienceCards.map(
            ({ id, icon, title, subtitle, label, date, link }) => (
              <SectionCard
                key={id}
                icon={icon}
                title={title}
                subtitle={subtitle}
                date={date}
                link={link}
                aria-label={label}
              />
            )
          )}
        </Canvas>

        {children}
      </Canvas>
    </div>
  );
};

export default Landing;
