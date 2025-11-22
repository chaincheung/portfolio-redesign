import React from "react";
import { PortfolioHero } from "./PortfolioHero";
import { PortfolioBestDesign } from "./PortfolioBestDesign";
import { PortfolioProcess } from "./PortfolioProcess";
import { PortfolioExperiences } from "./PortfolioExperiences";
import { PortfolioContact } from "./PortfolioContact";
import { PortfolioNav } from "./PortfolioNav";
import "./portfolio.css";

export const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <PortfolioNav />
      <PortfolioHero />
      <PortfolioBestDesign />
      <PortfolioProcess />
      <PortfolioExperiences />
      <PortfolioContact />
    </div>
  );
};

