import React from 'react';
import { FiGithub, FiLinkedin, FiMapPin, FiMail, FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const handleDownloadResume = () => {
    // You can replace this with an actual PDF file path
    alert('Resume download will be implemented once you provide the PDF file.');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Alex Munoz</span>
            </h1>
            <p className="hero-subtitle">
              Product & Engineering Leader @ NIKE
            </p>
            <p className="hero-description">
              Technology leader with <strong>12+ years</strong> leading global engineering, digital commerce, 
              SRE, and retail technology operations across North America, Europe, and China. I specialize 
              in modernizing enterprise platforms, driving AI-enabled transformation, and building 
              high-performing distributed teams that deliver resilient, consumer-first experiences at scale.
            </p>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="stat">
              <span className="stat-number">12+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">$2B</span>
              <span className="stat-label">Brand Scale</span>
            </div>
            <div className="stat">
              <span className="stat-number">13</span>
              <span className="stat-label">Countries</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <button onClick={handleDownloadResume} className="btn btn-secondary">
              <FiDownload /> Download Resume
            </button>
          </motion.div>

          <motion.div
            className="hero-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="info-item">
              <FiMapPin />
              <span>New York, NY</span>
            </div>
            <div className="info-item">
              <FiMail />
              <a href="mailto:alexardmunoz@gmail.com">alexardmunoz@gmail.com</a>
            </div>
            <div className="social-links">
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
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="image-wrapper">
            <img src="/profile.png" alt="Alex Munoz" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
