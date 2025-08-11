import React, { useState } from 'react';
import './Contact.css';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  program: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    program: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        program: ''
      });
    }, 3000);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>Contact Us</h1>
              <p>Get in touch with our team - we're here to help you start your volunteer journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2>Get In Touch</h2>
              <p>
                We're here to answer any questions you have about volunteering in Sri Lanka. 
                Whether you're just starting to explore or ready to apply, our team is ready to help.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Visit Us</h3>
                    <p>123 Volunteer Street<br />Colombo 03, Sri Lanka</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Call Us</h3>
                    <p>+94 77 123 4567<br />Mon-Fri: 9AM-6PM (LKT)</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h3>Email Us</h3>
                    <p>info@srilankavol.org<br />apply@srilankavol.org</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">💬</div>
                  <div className="contact-text">
                    <h3>WhatsApp</h3>
                    <p>+94 77 123 4567<br />Quick responses available</p>
                  </div>
                </div>
              </div>

              <div className="social-contact">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i> YouTube
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="contact-form-card">
                {!isSubmitted ? (
                  <>
                    <h2>Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                      <div className="form-group">
                        <label>Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div className="form-group">
                        <label>Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 234 567 8900"
                        />
                      </div>

                      <div className="form-group">
                        <label>Interested Program</label>
                        <select
                          name="program"
                          value={formData.program}
                          onChange={handleInputChange}
                        >
                          <option value="">Select a program (optional)</option>
                          <option value="mental-health">Mental Health Placement</option>
                          <option value="special-needs">Working with Special Needs Children</option>
                          <option value="teaching">Teaching in Rural Schools</option>
                          <option value="cultural">Cultural Exchange Programs</option>
                          <option value="psychology">Psychology Training</option>
                          <option value="meditation">Meditation Programs</option>
                          <option value="tea-factory">Tea Factory Visit</option>
                          <option value="temple-village">Temple and Village Volunteering</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Subject *</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="What is your message about?"
                        />
                      </div>

                      <div className="form-group">
                        <label>Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      <button type="submit" className="btn btn-primary btn-full">
                        Send Message
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="success-message">
                    <div className="success-icon">✅</div>
                    <h2>Message Sent Successfully!</h2>
                    <p>
                      Thank you for contacting us. We'll get back to you within 24 hours.
                      Check your email for a confirmation message.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.152854272495!2d79.84219975!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sri Lanka Volunteers Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How quickly will you respond to my inquiry?</h3>
              <p>We typically respond to all inquiries within 24 hours during business days. For urgent matters, you can reach us on WhatsApp for faster response.</p>
            </div>
            <div className="faq-item">
              <h3>What's the best way to contact you?</h3>
              <p>Email is great for detailed questions, WhatsApp for quick questions, and phone calls for complex discussions about programs.</p>
            </div>
            <div className="faq-item">
              <h3>Can I visit your office before applying?</h3>
              <p>Absolutely! We welcome visitors to our Colombo office. Please schedule an appointment in advance to ensure someone is available to meet with you.</p>
            </div>
            <div className="faq-item">
              <h3>Do you offer video consultations?</h3>
              <p>Yes, we offer Skype, Zoom, and WhatsApp video calls for international volunteers who want to discuss programs before applying.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-contact">
        <div className="container">
          <div className="emergency-card">
            <h2>Emergency Contact</h2>
            <p>
              If you're a current volunteer and need immediate assistance, 
              please use our 24/7 emergency hotline:
            </p>
            <div className="emergency-number">
              <a href="tel:+94771234567">+94 77 123 4567</a>
            </div>
            <p className="emergency-note">
              This number is only for current volunteers experiencing emergencies. 
              For general inquiries, please use the contact methods above.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
