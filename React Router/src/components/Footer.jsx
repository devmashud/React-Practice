import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* --- Left Section --- */}
        <div className="footer-about">
          <h2>The Fact Forge</h2>
          <p>
            Your trusted source for verified, unbiased, and fearless journalism.
            Truth — Forged Daily 🔥
          </p>
        </div>

        {/* --- Middle Section --- */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/categories">Categories</Link></li>
          </ul>
        </div>

        {/* --- Right Section --- */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">🌐</a>
            <a href="#" target="_blank" rel="noopener noreferrer">🐦</a>
            <a href="#" target="_blank" rel="noopener noreferrer">📘</a>
            <a href="#" target="_blank" rel="noopener noreferrer">📸</a>
          </div>
        </div>

      </div>

      {/* --- Bottom Section --- */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} The Fact Forge. All Rights Reserved.</p>
        <p>Powered by React ⚛️</p>
      </div>
    </footer>
  );
};

export default Footer;
