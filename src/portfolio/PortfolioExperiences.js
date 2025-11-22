import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const PortfolioExperiences = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const experiences = [
    {
      title: "Yellowheart App",
      subtitle: "The world's first blockchain ticketing wallet",
      category: "Mobile App",
      color: "#FFD700",
      link: "/project/yellowheart-app",
      image: "/images/scraped/yellowheart-app.png",
    },
    {
      title: "RelationshipScience",
      subtitle: "See how you connect to important decision makers",
      category: "Web Platform",
      color: "#4A90E2",
      link: "/project/relationshipscience-com",
      image: "/images/scraped/relationshipscience.png",
    },
    {
      title: "RelSci Radar",
      subtitle: "SAS Contact Intelligence Tool",
      category: "Enterprise Tool",
      color: "#7B68EE",
      link: "/project/relsci-radar",
      image: "/images/scraped/relsci-radar.png",
    },
    {
      title: "Audiyo",
      subtitle: "The audio social media app",
      category: "Social Media",
      color: "#FF6B6B",
      link: "/project/audiyo",
      image: "/images/scraped/audiyo.png",
    },
    {
      title: "Digital Payment Engine",
      subtitle: "A streamlined payments platform",
      category: "FinTech",
      color: "#50C878",
      link: "/project/aig-digital-payment",
      image: "/images/scraped/aig-payment-engine.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".experience-container");
    items?.forEach((item) => observer.observe(item));

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section id="experiences" className="portfolio-experiences" ref={sectionRef}>
      <div className="experiences-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="big-text-2"></span>
            <span className="big-text-2"></span>
            My Experiences
          </h2>
        </div>
        <div className="experiences-list">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`experience-container ${visibleCards.includes(index) ? "visible" : ""}`}
              data-index={index}
            >
              <Link to={experience.link} className="experience-image-link">
                <img src={experience.image} alt={experience.title} className="experience-image" />
              </Link>
              <div className="experience-info-block">
                <Link to={experience.link} className="experience-title-link">
                  {experience.title}
                </Link>
                <h4 className="experience-subtitle">{experience.subtitle}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

