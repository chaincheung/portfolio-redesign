import React, { useEffect, useRef, useState } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  const processSteps = [
    {
      number: "01",
      title: "Understanding Business Goals",
      description: "Identifying business goals and usability goals allows the development of the UX vision and strategy.",
    },
    {
      number: "02",
      title: "User Research & Personas",
      description: "Understanding who you're designing for, motivations, and objectives.",
    },
    {
      number: "03",
      title: "Prototyping in Sketch, Figma & InVision",
      description: "I test animations, interactions or complex user flows using low or high fidelity wireframes in Sketch, Figma or Invision.",
    },
    {
      number: "04",
      title: "Usability Optimization & Testing",
      description: "Moderated user testing is crucial in validation of interactions and screen flows.",
    },
    {
      number: "05",
      title: "UX / UI Design",
      description: "As a UX / UI designer, I align the needs of your users with the strategic goals of your company.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => {
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

    const items = sectionRef.current?.querySelectorAll(".process-item");
    items?.forEach((item) => observer.observe(item));

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section id="process" className="portfolio-process" ref={sectionRef}>
      <div className="process-container">
        <div className="section-header">
          <h2 className="section-title">My Process</h2>
          <p className="section-subtitle">
            A systematic approach to creating exceptional user experiences
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`process-item ${visibleItems.includes(index) ? "visible" : ""}`}
              data-index={index}
            >
              <div className="process-number">{step.number}</div>
              <div className="process-content">
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="process-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;




