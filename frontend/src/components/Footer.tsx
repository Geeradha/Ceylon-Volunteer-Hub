import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ceylon Volunteer Hub</h3>
            <p>
              Empowering communities through volunteering. Experience meaningful impact 
              in beautiful Sri Lanka while immersing yourself in rich culture and traditions 
              through ethical, community-led programs.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Guide: Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Volunteer Programs</Link></li>
              <li><Link to="/volunteer-life">Volunteer Life</Link></li>
              <li><Link to="/apply">Apply Now</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Programs</h4>
            <ul>
              <li><Link to="/programs/mental-health">Mental Health</Link></li>
              <li><Link to="/programs/special-needs">Special Needs</Link></li>
              <li><Link to="/programs/rural-teaching">Rural Teaching</Link></li>
              <li><Link to="/programs/cultural-exchange">Cultural Exchange</Link></li>
              <li><Link to="/programs/psychology-workshop">Psychology Workshop</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <div className="contact-info">
              <h4>Contact Info</h4>
              <p><i className="fas fa-map-marker-alt"></i> Colombo, Sri Lanka</p>
              <p><i className="fas fa-phone"></i> +94 77 123 4567</p>
              <p><i className="fas fa-envelope"></i> info@ceylonvolunteerhub.org</p>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2005 Ceylon Volunteer Hub. All rights reserved.</p>
            <div className="footer-links">
              <span>Printed Page:</span>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;