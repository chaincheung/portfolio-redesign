import React, { useState } from "react";

export const PortfolioContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear feedback message when user types
    if (feedbackMessage) setFeedbackMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFeedbackMessage("Please fill in all fields.");
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    const mailtoLink = `mailto:john.cheung75@gmail.com?subject=${subject}&body=${body}`;

    // Try multiple methods to open email client (more reliable)
    try {
      // Method 1: Create and click a temporary anchor element (most reliable)
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Method 2: Fallback to window.location.href
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 100);
      
      setFeedbackMessage("Opening your email client... If it doesn't open, please contact me directly at john.cheung75@gmail.com");
      
      // Clear form after a longer delay to give email client time to open
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setFeedbackMessage("");
      }, 5000);
    } catch (error) {
      console.error("Failed to open email client:", error);
      setFeedbackMessage("Unable to open email client. Please contact me directly at john.cheung75@gmail.com");
    }
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
                  e.preventDefault();
                  
                  const email = 'john.cheung75@gmail.com';
                  
                  // Direct location change - most reliable for mailto
                  window.location.href = `mailto:${email}`;
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
            {feedbackMessage && (
              <div className="form-feedback" style={{ 
                marginTop: '1rem', 
                padding: '1rem', 
                backgroundColor: 'rgba(102, 126, 234, 0.1)', 
                border: '1px solid rgba(102, 126, 234, 0.3)', 
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.9rem'
              }}>
                {feedbackMessage}
              </div>
            )}
          </form>
        </div>
      </div>
      <footer className="portfolio-footer">
        <p>&copy; {new Date().getFullYear()} John Cheung. All rights reserved.</p>
      </footer>
    </section>
  );
};

