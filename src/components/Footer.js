import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Resources</h3>
            <ul className="footer-links">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                  React Documentation
                </a>
              </li>
              <li>
                <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">
                  GitHub Pages
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-links">
              <li>Email: info@example.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: Software Engineering Lab</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Lab 1 Static Frontend. All rights reserved.
          </p>
          <p className="footer-team">
            Developed with ❤️ by SE Lab Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;