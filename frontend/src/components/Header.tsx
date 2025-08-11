import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img className="logo-img" src="/logo.png" alt="Ceylon Volunteer Hub Logo" />
              <div className="logo-creative">
                <span className="logo-text">Ceylon</span>
              <span className="logo-accent">Volunteer Hub</span>
              <div className="logo-underline"></div>
            
              </div>
              </div>
          </Link>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/programs" onClick={() => setIsMenuOpen(false)}>Programs</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
          <div className="nav-cta">
            <Link to="/apply" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
              Apply Now
            </Link>
          </div>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
