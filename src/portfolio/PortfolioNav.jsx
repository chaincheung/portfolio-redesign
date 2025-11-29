import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const PortfolioNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const jcLogo = "/images/scraped/jc-logo.png";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      
      // Hide nav when scrolling down, show when scrolling up
      if (currentScrollY < 10) {
        // Always show nav at the top of the page
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide nav
        setNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show nav
        setNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const projects = [
    { name: "Yellowheart App", path: "/project/yellowheart-app" },
    { name: "RelationshipScience", path: "/project/relationshipscience-com" },
    { name: "RelSci Radar", path: "/project/relsci-radar" },
    { name: "Audiyo!", path: "/project/audiyo" },
    { name: "AIG", path: "/project/aig-digital-payment" },
  ];

  return (
    <nav className={`portfolio-nav ${scrolled ? "scrolled" : ""} ${!navVisible ? "nav-hidden" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src={jcLogo} alt="John Cheung" className="nav-logo-img" />
        </Link>
        <button 
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`nav-menu-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)}>
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
          <div className="nav-menu-logo">
            <img src={jcLogo} alt="John Cheung" className="nav-menu-logo-img" />
          </div>
          <div className="nav-menu-content">
            <div className="nav-menu-section">
              <div className="nav-menu-section-title">Menu</div>
              <Link to="/" className="nav-menu-link" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <a 
                href="mailto:john.cheung75@gmail.com"
                className="nav-menu-link"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  
                  const email = 'john.cheung75@gmail.com';
                  
                  // Close menu
                  setMenuOpen(false);
                  
                  // Direct location change - most reliable
                  window.location.href = `mailto:${email}`;
                }}
              >
                Contact Me
              </a>
            </div>
            <div className="nav-menu-section">
              <div className="nav-menu-section-title">Work</div>
              {projects.map((project) => (
                <Link
                  key={project.path}
                  to={project.path}
                  className="nav-menu-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {project.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};




