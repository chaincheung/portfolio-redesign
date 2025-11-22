import React, { useState } from "react";

export const PortfolioContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="portfolio-contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="contact-description">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="contact-links">
              <a 
                href="mailto:john.cheung75@gmail.com" 
                className="contact-link"
                onClick={(e) => {
                  // Ensure mailto opens email client
                  setTimeout(() => {
                    window.location.href = 'mailto:john.cheung75@gmail.com';
                  }, 0);
                }}
              >
                <span className="link-icon">✉</span>
                <span>Contact Me</span>
              </a>
              <a href="/John_Cheung_Resume.pdf" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="link-icon">📄</span>
                <span>View Resume</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <footer className="portfolio-footer">
        <p>&copy; {new Date().getFullYear()} John Cheung. All rights reserved.</p>
      </footer>
    </section>
  );
};

