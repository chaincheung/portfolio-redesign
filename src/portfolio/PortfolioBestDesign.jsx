import React, { useEffect, useRef, useState } from "react";

export const PortfolioBestDesign = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section id="best-design" className="portfolio-best-design" ref={sectionRef} style={{ backgroundImage: 'url(/images/backgrounds/best-design.jpg)' }}>
      <div className="best-design-overlay"></div>
      <div className="best-design-container">
        <div className={`section-header ${isVisible ? "visible" : ""}`}>
          <h2 className="section-title">My Best Design.</h2>
        </div>
        <div className={`best-design-content ${isVisible ? "visible" : ""}`}>
        </div>
      </div>
    </section>
  );
};




