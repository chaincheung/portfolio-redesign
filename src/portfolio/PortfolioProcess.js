import React, { useEffect, useRef, useState } from "react";

export const PortfolioProcess = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  const processSteps = [
    {
      number: "01",
      title: "Understanding Business Goals",
      description: "Identifying business goals and usability goals allows the development of the UX vision and strategy.",
      icon: "/images/scraped/process-target.png",
    },
    {
      number: "02",
      title: "User Research & Personas",
      description: "Understanding who you're designing for, motivations, and objectives.",
      icon: "/images/scraped/process-user-icon.png",
    },
    {
      number: "03",
      title: "Prototyping in Sketch, Figma & InVision",
      description: "I test animations, interactions or complex user flows using low or high fidelity wireframes in Sketch, Figma or Invision.",
      icon: "/images/scraped/process-prototype.png",
    },
    {
      number: "04",
      title: "Usability Optimization & Testing",
      description: "Moderated user testing is crucial in validation of interactions and screen flows.",
      icon: "/images/scraped/process-usability.png",
    },
    {
      number: "05",
      title: "UX / UI Design",
      description: "As a UX / UI designer, I align the needs of your users with the strategic goals of your company.",
      icon: "/images/scraped/process-ux-ui.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % processSteps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + processSteps.length) % processSteps.length);
  };

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
        </div>
        <div className="process-slider-wrapper">
          <button className="process-arrow process-arrow-left" onClick={prevSlide}>
            <img src="/images/scraped/arrow-left.png" alt="Previous" className="arrow-icon" />
          </button>
          <div className="process-slider">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`process-slide ${index === currentSlide ? "active" : ""} ${visibleItems.includes(index) ? "visible" : ""}`}
                data-index={index}
              >
                <div className="process-slide-content">
                  <div className="process-icon-wrapper">
                    <img src={step.icon} alt={step.title} className="process-icon" />
                  </div>
                  <div className="process-content">
                    <h3 className="process-title">{step.title}</h3>
                    <p className="process-description">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="process-arrow process-arrow-right" onClick={nextSlide}>
            <img src="/images/scraped/arrow-right.png" alt="Next" className="arrow-icon" />
          </button>
        </div>
        <div className="process-slider-dots">
          {processSteps.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

