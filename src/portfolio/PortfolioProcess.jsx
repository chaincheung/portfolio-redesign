import React, { useEffect, useRef, useState } from "react";

export const PortfolioProcess = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(250);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const slideRefs = useRef([]);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

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

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = 0;
    touchEndY.current = 0;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 50; // Minimum distance for a swipe
    
    // Only trigger if it's a horizontal swipe (horizontal distance > vertical distance)
    if (Math.abs(distanceX) > minSwipeDistance && Math.abs(distanceX) > Math.abs(distanceY)) {
      if (distanceX > 0) {
        // Swiped left - go to next slide
        nextSlide();
      } else {
        // Swiped right - go to previous slide
        prevSlide();
      }
    }
    
    // Reset touch positions
    touchStartX.current = 0;
    touchEndX.current = 0;
    touchStartY.current = 0;
    touchEndY.current = 0;
  };

  // Calculate maximum height from all slides on mount and resize
  useEffect(() => {
    const calculateMaxHeight = () => {
      let maxHeight = 250; // Default minimum
      
      slideRefs.current.forEach((slideRef) => {
        if (slideRef) {
          const content = slideRef.querySelector('.process-slide-content');
          if (content) {
            // Temporarily show to measure
            const originalStyles = {
              position: slideRef.style.position,
              visibility: slideRef.style.visibility,
              opacity: slideRef.style.opacity,
              display: slideRef.style.display
            };
            
            slideRef.style.position = 'static';
            slideRef.style.visibility = 'visible';
            slideRef.style.opacity = '1';
            slideRef.style.display = 'block';
            
            const height = content.offsetHeight;
            if (height > maxHeight) {
              maxHeight = height;
            }
            
            // Restore
            Object.keys(originalStyles).forEach(key => {
              slideRef.style[key] = originalStyles[key] || '';
            });
          }
        }
      });
      
      setSliderHeight(maxHeight);
    };

    // Wait for all slides to render
    const timer = setTimeout(calculateMaxHeight, 200);
    window.addEventListener('resize', calculateMaxHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateMaxHeight);
    };
  }, [processSteps.length]);

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
          <div 
            className="process-slider"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ height: `${sliderHeight}px` }}
          >
            {processSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (slideRefs.current[index] = el)}
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

