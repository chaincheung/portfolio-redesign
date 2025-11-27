import React, { useEffect, useRef, useState } from "react";

export const PortfolioHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToWork = () => {
    const element = document.getElementById("experiences");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="portfolio-hero" ref={heroRef}>
      <div className="hero-background" style={{ backgroundImage: 'url(/images/backgrounds/homepage-hero.jpg)' }}>
        <div className="hero-background-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className={`hero-content ${isVisible ? "visible" : ""}`}>
        <div className="hero-text">
          <h1 className="hero-greeting">Hello, I'm a</h1>
          <h1 className="hero-title">
            <span className="gradient-text">UX/UI Design</span> Strategist.
          </h1>
          <p className="hero-description">
            I create meaningful digital experiences that align user needs with business goals.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToWork}>
              View My Work
            </button>
            <a href="/John_Cheung_Resume.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

