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
import LandingDataJSON from "../../../assets/data/landing.json";

const LandingIconMap: Record<string, React.ElementType> = {
  WealthsimpleOutline,
  CoinbaseOutline,
  ShopifyOutline,
  RBCOutline,
};

interface LandingProps {
  children?: React.ReactNode;
}

const Landing: React.FC<LandingProps> = ({ children }) => {
  return (
    <div id="work">
      <Canvas variant="primary">
        <SectionHeader
          primaryHeading={LandingDataJSON["section-heading"]}
          title={LandingDataJSON["section-title"]}
          subtitle={LandingDataJSON["section-subtitle"]}
        />

        <Canvas variant="secondary">
          {LandingDataJSON.icons.map(
            ({ id, component, title, subtitle, label, date, link }) => {
              const IconReference = LandingIconMap[component];
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

export default Landing;
