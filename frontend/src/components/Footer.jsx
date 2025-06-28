import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-section">
            <h2>Stock Predictor Pro</h2>
            <p>Empowering investors with AI-driven stock market predictions, real-time analytics, and comprehensive financial insights to make informed trading decisions.</p>
            <div class="social-links">
              <a href="#" title="Facebook">📘</a>
              <a href="#" title="Twitter">🐦</a>
              <a href="#" title="LinkedIn">💼</a>
              <a href="#" title="YouTube">📺</a>
            </div>
          </div>

          <div class="footer-section">
            <h3>Market Tools</h3>
            <ul>
              <li><a href="#predictions">AI Predictions</a></li>
              <li><a href="#analysis">Technical Analysis</a></li>
              <li><a href="#screener">Stock Screener</a></li>
              <li><a href="#portfolio">Portfolio Tracker</a></li>
              <li><a href="#alerts">Price Alerts</a></li>
              <li><a href="#trends">Market Trends</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#tutorials">Tutorials</a></li>
              <li><a href="#research">Market Research</a></li>
              <li><a href="#glossary">Investing Glossary</a></li>
              <li><a href="#blog">Investing Blog</a></li>
              <li><a href="#webinars">Webinars</a></li>
              <li><a href="#api">Developer API</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#status">System Status</a></li>
              <li><a href="#feedback">Feedback</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Company</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><Link to={"/about"}>About Us</Link></li>
              <li><Link to={"/products"}>Pricing</Link></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#partners">Press</a></li>
              <li><Link to={"/contact"}>Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
            <a href="#security">Security</a>
            <a href="#disclaimer">Risk Disclaimer</a>
            <a href="#sitemap">Site Map</a>
          </div>
          <p>&copy; 2025 Stock Predictor Pro. All rights reserved. | made by <a href="http://github.com/rabi-09" class="footer-link" target='_blank'>rabi.09</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;