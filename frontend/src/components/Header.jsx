import React, { useState, useEffect } from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`animated-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon">SP</div>
          Stock Predictor Pro
        </Link>

        {/* Hamburger Menu Button - Mobile Only */}
        <button 
          className="hamburger-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
        </button>

        {/* Navigation Menu and Auth Buttons - Desktop */}
        <div className="desktop-nav">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>

          <div className="auth-buttons">
            <Link to="/login" className="btn btn-login">Login</Link>
            <Link to="/register" className="btn btn-signup">Sign Up</Link>
          </div>
        </div>

        {/* Mobile Menu - Only shown when hamburger is clicked */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-menu">
            <li className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>

          <div className="mobile-auth-buttons">
            <Link 
              to="/login" 
              className="btn btn-login" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="btn btn-signup" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;