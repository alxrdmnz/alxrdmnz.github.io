import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Alex Munoz</h3>
          <p>Product & Engineering Leader passionate about building scalable digital solutions.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#awards">Awards</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-social">
            <a
              href="https://github.com/alxrdmnz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/alexardmunoz/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a href="mailto:alexardmunoz@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Alex Munoz. Built with React & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
